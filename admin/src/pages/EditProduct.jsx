import React, { useState, useEffect } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const EditProduct = ({ token }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Form state
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [bestseller, setBestseller] = useState(false);
  const [inStock, setInStock] = useState(true);
  const [brand, setBrand] = useState("");
  const [condition, setCondition] = useState("");
  const [warranty, setWarranty] = useState("");
  // Variations: array of { ram: '', storage: '', cpu: '', gpu: '', price: '' }
  const [variations, setVariations] = useState([
    { ram: "", storage: "", cpu: "", gpu: "", price: "" },
  ]);

  // Validate decimal input
  const validateDecimal = (value) => {
    if (value === "") return true;
    return /^\d*\.?\d*$/.test(value);
  };

  // Format price on blur (updated for laptop variations)
  // Handles empty, trailing/leading decimal, and normalizes to string
  // Only define if not already defined
  // (Remove duplicate definition if present elsewhere in the file)

  // Format price on blur
  // Format price on blur (updated for laptop variations)
  // Handles empty, trailing/leading decimal, and normalizes to string
  const formatPriceOnBlur = (value) => {
    if (value === "") return value;
    if (value.endsWith(".")) {
      return value + "0";
    } else if (value.startsWith(".")) {
      return "0" + value;
    } else {
      const num = parseFloat(value);
      if (!isNaN(num)) {
        // Always show two decimals for price
        return num.toFixed(2);
      }
    }
    return value;
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.post(backendUrl + "/api/product/single", {
          productId: id,
        });
        if (response.data.success) {
          const product = response.data.product;
          setProduct(product);
          setName(product.name || "");
          setDescription(product.description || "");
          setCategory(product.category || "");
          setBestseller(product.bestseller || false);
          setInStock(product.inStock !== false);
          setBrand(product.brand || "");
          setCondition(product.condition || "");
          setWarranty(product.warranty || "");
          if (
            Array.isArray(product.variations) &&
            product.variations.length > 0
          ) {
            setVariations(
              product.variations.map((v) => ({
                ram: v.ram || "",
                storage: v.storage || "",
                cpu: v.cpu || "",
                gpu: v.gpu || "",
                price: v.price ? v.price.toString() : "",
              }))
            );
          } else {
            setVariations([
              { ram: "", storage: "", cpu: "", gpu: "", price: "" },
            ]);
          }
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  // Handle variation changes
  const handleVariationChange = (index, field, value) => {
    setVariations((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const addVariation = () => {
    setVariations((prev) => [
      ...prev,
      { ram: "", storage: "", cpu: "", gpu: "", price: "" },
    ]);
  };

  const removeVariation = (index) => {
    setVariations((prev) =>
      prev.length > 1 ? prev.filter((_, i) => i !== index) : prev
    );
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // Validate at least one variation and all fields
    if (
      !variations.length ||
      variations.some((v) => !v.ram || !v.storage || !v.cpu || !v.price)
    ) {
      toast.error(
        "Please fill all variation fields (RAM, Storage, CPU, Price) for each spec."
      );
      return;
    }
    for (const v of variations) {
      if (isNaN(parseFloat(v.price))) {
        toast.error("Please enter valid price for all variations.");
        return;
      }
    }
    try {
      const formData = new FormData();
      formData.append("id", id);
      formData.append("name", name);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("bestseller", bestseller);
      formData.append("inStock", inStock);
      formData.append("brand", brand);
      formData.append("condition", condition);
      formData.append("warranty", warranty);
      // Convert prices to numbers
      const variationsToSend = variations.map((v) => ({
        ram: v.ram,
        storage: v.storage,
        cpu: v.cpu,
        gpu: v.gpu,
        price: parseFloat(v.price) || 0,
      }));
      formData.append("variations", JSON.stringify(variationsToSend));

      const response = await axios.post(
        backendUrl + "/api/product/update",
        formData,
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/edit-products");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#008753]"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500">Product not found</p>
        <button
          onClick={() => navigate("/edit-products")}
          className="mt-4 px-4 py-2 bg-[#008753] text-white rounded-lg hover:bg-[#006641] transition-colors"
        >
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate("/edit-products")}
          className="flex items-center text-[#008753] hover:text-[#006641]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Products
        </button>
        <h2 className="text-2xl font-bold ml-4 text-[#008753]">
          Edit Laptop Product
        </h2>
      </div>

      <form
        onSubmit={onSubmitHandler}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block mb-2 font-medium">Laptop Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008753] focus:border-transparent"
              type="text"
              placeholder="Laptop name"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Brand</label>
            <input
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008753] focus:border-transparent"
              type="text"
              placeholder="e.g. ASUS, MSI, Alienware"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Condition</label>
            <select
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008753] focus:border-transparent"
              required
            >
              <option value="">Select condition</option>
              <option value="New">New</option>
              <option value="Used">Used</option>
              <option value="Refurbished">Refurbished</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 font-medium">Warranty</label>
            <input
              value={warranty}
              onChange={(e) => setWarranty(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008753] focus:border-transparent"
              type="text"
              placeholder="e.g. 1 year, 6 months, No warranty"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Category</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008753] focus:border-transparent"
              type="text"
              placeholder="e.g. Gaming, Ultrabook, Workstation"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008753] focus:border-transparent min-h-[120px]"
            placeholder="Describe the laptop, features, etc."
            required
          />
        </div>

        <div className="mb-6 flex items-center gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={inStock}
              onChange={(e) => setInStock(e.target.checked)}
              className="w-5 h-5 text-[#008753] rounded focus:ring-[#008753]"
            />
            <span className="font-medium">In Stock</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={bestseller}
              onChange={(e) => setBestseller(e.target.checked)}
              className="w-5 h-5 text-[#008753] rounded focus:ring-[#008753]"
            />
            <span className="font-medium">Bestseller</span>
          </label>
        </div>

        {/* Variations Section */}
        <div className="mb-6 border-t pt-4">
          <h3 className="text-lg font-medium mb-4">
            Laptop Variations / Specs
          </h3>
          {variations.map((variation, idx) => (
            <div key={idx} className="flex flex-wrap gap-2 mb-2 items-center">
              <input
                value={variation.ram}
                onChange={(e) =>
                  handleVariationChange(idx, "ram", e.target.value)
                }
                className="w-32 px-3 py-2 border border-gray-300 rounded-lg"
                placeholder="RAM (e.g. 16GB)"
                required
              />
              <input
                value={variation.storage}
                onChange={(e) =>
                  handleVariationChange(idx, "storage", e.target.value)
                }
                className="w-32 px-3 py-2 border border-gray-300 rounded-lg"
                placeholder="Storage (e.g. 512GB NVMe)"
                required
              />
              <input
                value={variation.cpu}
                onChange={(e) =>
                  handleVariationChange(idx, "cpu", e.target.value)
                }
                className="w-40 px-3 py-2 border border-gray-300 rounded-lg"
                placeholder="CPU (e.g. i7-12700H)"
                required
              />
              <input
                value={variation.gpu}
                onChange={(e) =>
                  handleVariationChange(idx, "gpu", e.target.value)
                }
                className="w-40 px-3 py-2 border border-gray-300 rounded-lg"
                placeholder="GPU (optional)"
              />
              <input
                value={variation.price}
                onChange={(e) => {
                  if (validateDecimal(e.target.value)) {
                    handleVariationChange(idx, "price", e.target.value);
                  }
                }}
                onBlur={(e) =>
                  handleVariationChange(
                    idx,
                    "price",
                    formatPriceOnBlur(e.target.value)
                  )
                }
                className="w-32 px-3 py-2 border border-gray-300 rounded-lg"
                placeholder="Price (₦)"
                type="text"
                inputMode="decimal"
                required
              />
              {variations.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeVariation(idx)}
                  className="px-3 py-2 bg-red-500 text-white rounded-lg"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addVariation}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Add Variation
          </button>
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() => navigate("/edit-products")}
            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-[#008753] text-white rounded-lg hover:bg-[#006641] transition-colors"
          >
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { backendUrl } from '../App';
// import { toast } from 'react-toastify';
// import { useParams, useNavigate } from 'react-router-dom';

// const EditProduct = ({ token }) => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Form state
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [category, setCategory] = useState('');
//   const [bestseller, setBestseller] = useState(false);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.post(backendUrl + '/api/product/single', { productId: id });
//         if (response.data.success) {
//           const product = response.data.product;
//           setProduct(product);
//           setName(product.name);
//           setDescription(product.description);
//           setPrice(product.price);
//           setCategory(product.category);
//           setBestseller(product.bestseller);
//         } else {
//           toast.error(response.data.message);
//         }
//       } catch (error) {
//         console.log(error);
//         toast.error(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         backendUrl + "/api/product/update",
//         {
//           id,
//           name,
//           description,
//           price,
//           category,
//           bestseller
//         },
//         { headers: { token } }
//       );

//       if (response.data.success) {
//         toast.success(response.data.message);
//         navigate('/edit-products');
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
//       </div>
//     );
//   }

//   if (!product) {
//     return (
//       <div className="text-center py-10">
//         <p className="text-red-500">Product not found</p>
//         <button
//           onClick={() => navigate('/edit-products')}
//           className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
//         >
//           Back to Products
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full max-w-4xl mx-auto p-4">
//       <div className="flex items-center mb-6">
//         <button
//           onClick={() => navigate('/edit-products')}
//           className="flex items-center text-purple-600 hover:text-purple-800"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
//             <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
//           </svg>
//           Back to Products
//         </button>
//         <h2 className="prata-regular text-2xl ml-4 text-purple-900">Edit Fragrance</h2>
//       </div>

//       <form onSubmit={onSubmitHandler} className="bg-purple-50 p-6 rounded-xl shadow-lg">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//           <div>
//             <label className="block mb-2 font-medium">Fragrance Name</label>
//             <input
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:outline-none"
//               type="text"
//               placeholder="e.g., Mon Parfum"
//               required
//             />
//           </div>

//           <div>
//             <label className="block mb-2 font-medium">Price (₦)</label>
//             <input
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//               className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:outline-none"
//               type="number"
//               placeholder="e.g., 15000"
//               min="0"
//               required
//             />
//           </div>

//           <div>
//             <label className="block mb-2 font-medium">Category</label>
//             <select
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:outline-none"
//               required
//             >
//               <option value="">Select category</option>
//               <option value="Eau de Parfum">Eau de Parfum</option>
//               <option value="Eau de Toilette">Eau de Toilette</option>
//               <option value="Perfume Oil">Perfume Oil</option>
//               <option value="Bespoke Fragrance">Bespoke Fragrance</option>
//               <option value="Gift Sets">Gift Sets</option>
//               <option value="Miniatures">Miniatures</option>
//             </select>
//           </div>
//         </div>

//         <div className="mb-6">
//           <label className="block mb-2 font-medium">Description</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:outline-none min-h-[120px]"
//             placeholder="Add Size and every other important details to description"
//             required
//           />
//         </div>

//         <div className="mb-6">
//           <label className="flex items-center gap-2 cursor-pointer">
//             <input
//               type="checkbox"
//               checked={bestseller}
//               onChange={(e) => setBestseller(e.target.checked)}
//               className="w-5 h-5 accent-purple-600 rounded focus:ring-purple-600"
//             />
//             <span className="font-medium">Mark as bestseller</span>
//           </label>
//         </div>

//         <div className="flex justify-end gap-4">
//           <button
//             type="button"
//             onClick={() => navigate('/edit-products')}
//             className="px-6 py-2 border border-purple-300 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors"
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
//           >
//             Update Fragrance
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default EditProduct;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { backendUrl } from '../App';
// import { toast } from 'react-toastify';
// import { useParams, useNavigate } from 'react-router-dom';

// const EditProduct = ({ token }) => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Form state
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [category, setCategory] = useState('');
//   const [bestseller, setBestseller] = useState(false);
//   const [availableDays, setAvailableDays] = useState(['everyday']);

//   // Days of week
//   const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.post(backendUrl + '/api/product/single', { productId: id });
//         if (response.data.success) {
//           const product = response.data.product;
//           setProduct(product);
//           setName(product.name);
//           setDescription(product.description);
//           setPrice(product.price);
//           setCategory(product.category);
//           setBestseller(product.bestseller);
//           setAvailableDays(product.availableDays || ['everyday']);
//         } else {
//           toast.error(response.data.message);
//         }
//       } catch (error) {
//         console.log(error);
//         toast.error(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   const handleDayChange = (day) => {
//     if (day === 'everyday') {
//       setAvailableDays(['everyday']);
//       return;
//     }

//     if (availableDays.includes(day)) {
//       setAvailableDays(availableDays.filter(d => d !== day));
//     } else {
//       setAvailableDays([...availableDays.filter(d => d !== 'everyday'), day]);
//     }
//   };

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         backendUrl + "/api/product/update",
//         {
//           id,
//           name,
//           description,
//           price,
//           category,
//           bestseller,
//           availableDays
//         },
//         { headers: { token } }
//       );

//       if (response.data.success) {
//         toast.success(response.data.message);
//         navigate('/edit-products');
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#008753]"></div>
//       </div>
//     );
//   }

//   if (!product) {
//     return (
//       <div className="text-center py-10">
//         <p className="text-red-500">Product not found</p>
//         <button
//           onClick={() => navigate('/edit-products')}
//           className="mt-4 px-4 py-2 bg-[#008753] text-white rounded-lg hover:bg-[#006641] transition-colors"
//         >
//           Back to Products
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full max-w-4xl mx-auto p-4">
//       <div className="flex items-center mb-6">
//         <button
//           onClick={() => navigate('/edit-products')}
//           className="flex items-center text-[#008753] hover:text-[#006641]"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
//             <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
//           </svg>
//           Back to Products
//         </button>
//         <h2 className="text-2xl font-bold ml-4 text-[#008753]">Edit Product</h2>
//       </div>

//       <form onSubmit={onSubmitHandler} className="bg-white p-6 rounded-lg shadow-md">
//         {/* Product Info */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//           <div>
//             <label className="block mb-2 font-medium">Product name</label>
//             <input
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008753] focus:border-transparent"
//               type="text"
//               placeholder="Product name"
//               required
//             />
//           </div>

//           <div>
//             <label className="block mb-2 font-medium">Price</label>
//             <input
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008753] focus:border-transparent"
//               type="number"
//               placeholder="Price"
//               min="0"
//               step="0.01"
//               required
//             />
//           </div>

//           <div>
//             <label className="block mb-2 font-medium">Category</label>
//             <select
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008753] focus:border-transparent"
//               required
//             >
//               <option value="">Select category</option>
//               <option value="Main Dishes">Main Dishes</option>
//               <option value="Soups">Soups & Stews</option>
//               <option value="Appetizers">Appetizers</option>
//               <option value="Desserts">Desserts</option>
//               <option value="Drinks">Beverages</option>
//             </select>
//           </div>

//           <div>
//             <label className="block mb-2 font-medium">Availability</label>
//             <div className="flex flex-wrap gap-2">
//               <button
//                 type="button"
//                 onClick={() => setAvailableDays(['everyday'])}
//                 className={`px-3 py-1 text-sm rounded-full ${
//                   availableDays.includes('everyday')
//                     ? 'bg-[#008753] text-white'
//                     : 'bg-gray-200 text-gray-700'
//                 }`}
//               >
//                 Everyday
//               </button>
//               {days.map(day => (
//                 <button
//                   key={day}
//                   type="button"
//                   onClick={() => handleDayChange(day)}
//                   className={`px-3 py-1 text-sm rounded-full ${
//                     availableDays.includes(day)
//                       ? 'bg-[#008753] text-white'
//                       : 'bg-gray-200 text-gray-700'
//                   }`}
//                 >
//                   {day.substring(0, 3)}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Description */}
//         <div className="mb-6">
//           <label className="block mb-2 font-medium">Description</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008753] focus:border-transparent min-h-[120px]"
//             placeholder="Product description"
//             required
//           />
//         </div>

//         {/* Bestseller */}
//         <div className="mb-6">
//           <label className="flex items-center gap-2 cursor-pointer">
//             <input
//               type="checkbox"
//               checked={bestseller}
//               onChange={(e) => setBestseller(e.target.checked)}
//               className="w-5 h-5 text-[#008753] rounded focus:ring-[#008753]"
//             />
//             <span className="font-medium">Mark as bestseller</span>
//           </label>
//         </div>

//         {/* Submit Button */}
//         <div className="flex justify-end gap-4">
//           <button
//             type="button"
//             onClick={() => navigate('/edit-products')}
//             className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className="px-6 py-2 bg-[#008753] text-white rounded-lg hover:bg-[#006641] transition-colors"
//           >
//             Update Product
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default EditProduct;
