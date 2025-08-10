import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";
import mongoose from "mongoose";

// Helper function to get today's day
const getToday = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[new Date().getDay()];
};

// Helper to safely convert to number
const safeNumber = (value) => {
  if (value === "" || value === null || value === undefined) return 0;
  const num = Number(value);
  return isNaN(num) ? 0 : num;
};

// Helper to normalize variations for laptops (array of {ram, storage, cpu, gpu, price})
const normalizeVariations = (variations) => {
  if (!variations) return variations;
  // If array (laptop spec variations)
  if (Array.isArray(variations)) {
    return variations.map((v) => ({
      ram: v.ram || "",
      storage: v.storage || v.ssd || "",
      cpu: v.cpu || "",
      gpu: v.gpu || "",
      price: safeNumber(v.price),
    }));
  }
  // Legacy object structure (for old products)
  const normalized = { ...variations };
  if (normalized.sizes && Array.isArray(normalized.sizes)) {
    normalized.sizes = normalized.sizes.map((size) => ({
      ...size,
      price: safeNumber(size.price),
    }));
  }
  if (normalized.wrap) {
    normalized.wrap = {
      ...normalized.wrap,
      price: safeNumber(normalized.wrap.price),
    };
  }
  return normalized;
};

// Add product
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      basePrice,
      category,
      bestseller,
      availableDays,
      inStock,
      variations,
      brand,
      condition,
      warranty,
    } = req.body;

    const image1 = req.files?.image1?.[0];
    const image2 = req.files?.image2?.[0];
    const image3 = req.files?.image3?.[0];
    const image4 = req.files?.image4?.[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );


    // Parse and validate variations if provided
    let parsedVariations = [];
    if (variations) {
      try {
        parsedVariations = JSON.parse(variations);
      } catch (error) {
        console.error("Error parsing variations:", error);
        return res.json({
          success: false,
          message: "Invalid variations format. Must be valid JSON.",
        });
      }
      // Validate all required fields and price
      for (const v of parsedVariations) {
        if (!v.ram || !v.storage || !v.cpu || typeof v.price !== "number" || v.price <= 0) {
          return res.json({
            success: false,
            message: "Each variation must have RAM, Storage, CPU, and a valid price > 0.",
          });
        }
      }
    }
    // Normalize all prices in variations
    parsedVariations = normalizeVariations(parsedVariations);

    // Handle boolean values
    const bestsellerBool = bestseller === "true" || bestseller === true;
    const inStockBool = inStock === "true" || inStock === true;

    const productData = {
      name,
      description,
      category,
      basePrice: safeNumber(basePrice),
      bestseller: bestsellerBool,
      image: imagesUrl,
      date: Date.now(),
      availableDays: availableDays || ["everyday"],
      inStock: inStockBool,
      variations: parsedVariations,
      brand: brand || "",
      condition: condition || "",
      warranty: warranty || "",
    };

    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, message: "Product Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// List all products (admin)
const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Get products available today (public)
const getAvailableProducts = async (req, res) => {
  try {
    const today = getToday();
    const products = await productModel.find({
      $or: [{ availableDays: "everyday" }, { availableDays: today }],
      inStock: true, // Only include in-stock products
    });
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Remove product
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Get single product info
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);
    res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
// Update product
const updateProduct = async (req, res) => {
  try {
    // Extract data from request
    const {
      id,
      name,
      description,
      basePrice,
      category,
      bestseller,
      inStock,
      variations,
      availableDays,
      brand,
      condition,
      warranty,
    } = req.body;

    // Handle boolean values
    const bestsellerBool = bestseller === "true" || bestseller === true;
    const inStockBool = inStock === "true" || inStock === true;


    // Parse and validate variations if provided
    let parsedVariations = [];
    if (variations) {
      try {
        parsedVariations = JSON.parse(variations);
      } catch (error) {
        console.error("Error parsing variations:", error);
        return res.json({
          success: false,
          message: "Invalid variations format. Must be valid JSON.",
        });
      }
      // Validate all required fields and price
      for (const v of parsedVariations) {
        if (!v.ram || !v.storage || !v.cpu || typeof v.price !== "number" || v.price <= 0) {
          return res.json({
            success: false,
            message: "Each variation must have RAM, Storage, CPU, and a valid price > 0.",
          });
        }
      }
    }
    // Normalize all fields in variations (ram, storage, cpu, gpu, price)
    parsedVariations = normalizeVariations(parsedVariations);

    const updateData = {
      name,
      description,
      basePrice: safeNumber(basePrice),
      category,
      bestseller: bestsellerBool,
      availableDays: availableDays || ["everyday"],
      inStock: inStockBool,
      variations: parsedVariations,
      brand: brand || "",
      condition: condition || "",
      warranty: warranty || "",
    };

    // Handle image updates
    const image1 = req.files?.image1?.[0];
    const image2 = req.files?.image2?.[0];
    const image3 = req.files?.image3?.[0];
    const image4 = req.files?.image4?.[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    if (images.length > 0) {
      const imagesUrl = await Promise.all(
        images.map(async (item) => {
          let result = await cloudinary.uploader.upload(item.path, {
            resource_type: "image",
          });
          return result.secure_url;
        })
      );
      // Replace existing images with new ones
      updateData.image = imagesUrl;
    }

    const updatedProduct = await productModel.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    if (!updatedProduct) {
      return res.json({ success: false, message: "Product not found" });
    }

    res.json({
      success: true,
      message: "Product updated",
      product: updatedProduct,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export {
  listProducts,
  addProduct,
  removeProduct,
  singleProduct,
  getAvailableProducts,
  updateProduct,
};
