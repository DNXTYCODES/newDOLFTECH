import { createContext, useContext, useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopContext = createContext();

// Create the custom hook for accessing context
export const useShopContext = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShopContext must be used within a ShopContextProvider");
  }
  return context;
};

const ShopContextProvider = (props) => {
  const currency = "₦";
  const delivery_fee = 1.5;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  // Payment status tracking
  const [paymentStatus, setPaymentStatus] = useState(null);

  // Popup state
  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const popupMessageRef = useRef("");

  // Keep ref updated
  useEffect(() => {
    popupMessageRef.current = popupMessage;
  }, [popupMessage]);

  // Fetch popup message
  const fetchPopup = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/popup");
      if (response.data.popup) {
        setPopupMessage(response.data.popup);

        // Check if user has dismissed this message
        const dismissedPopup = localStorage.getItem("dismissedPopup");
        if (dismissedPopup !== response.data.popup) {
          setShowPopup(true);
        }
      }
    } catch (error) {
      console.log("Error fetching popup:", error);
    }
  };

  const dismissPopup = () => {
    setShowPopup(false);
    localStorage.setItem("dismissedPopup", popupMessageRef.current);
  };

  // Updated addToCart function with variations and stock check
  const addToCart = async (itemId, quantity = 1, variations = {}) => {
    const product = products.find((item) => item._id === itemId);

    if (!product || !product.inStock) {
      toast.error("This product is out of stock");
      return null;
    }

    // Validate variation price for laptops
    if (
      product.variations &&
      Array.isArray(product.variations) &&
      product.variations.length > 0
    ) {
      if (!variations || typeof variations.price !== "number" || variations.price <= 0) {
        toast.error("Please select a valid laptop variation with price.");
        return null;
      }
    }

    // Create a unique key for this combination of variations
    const variationKey = JSON.stringify(variations);
    const cartItemKey = `${itemId}-${variationKey}`;

    let cartData = structuredClone(cartItems);

    if (cartData[cartItemKey]) {
      const newQuantity = cartData[cartItemKey].quantity + quantity;

      // Check stock availability
      if (product.stock && newQuantity > product.stock) {
        toast.error(`Only ${product.stock} available in stock`);
        return null;
      }

      cartData[cartItemKey] = {
        ...cartData[cartItemKey],
        quantity: newQuantity,
      };
    } else {
      // Check stock availability
      if (product.stock && quantity > product.stock) {
        toast.error(`Only ${product.stock} available in stock`);
        return null;
      }

      cartData[cartItemKey] = {
        productId: itemId,
        quantity,
        variations,
      };
    }

    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(
          backendUrl + "/api/cart/add",
          {
            itemId,
            quantity,
            variations,
          },
          { headers: { token } }
        );
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }

    return product;
  };

  const getCartCount = () => {
    return Object.values(cartItems).reduce(
      (total, item) => total + item.quantity,
      0
    );
  };

  const updateQuantity = async (cartItemKey, quantity) => {
    let cartData = structuredClone(cartItems);

    if (!cartData[cartItemKey]) return;

    // Get product for stock check
    const item = cartData[cartItemKey];
    const product = products.find((p) => p._id === item.productId);

    if (product?.stock && quantity > product.stock) {
      toast.error(`Only ${product.stock} available in stock`);
      return;
    }

    if (quantity > 0) {
      cartData[cartItemKey] = {
        ...cartData[cartItemKey],
        quantity,
      };
    } else {
      delete cartData[cartItemKey];
    }

    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(
          backendUrl + "/api/cart/update",
          {
            cartItemKey,
            quantity,
          },
          { headers: { token } }
        );
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };

  // Robust cart amount calculation with variation handling
  const getCartAmount = () => {
    return Object.entries(cartItems).reduce((total, [cartItemKey, item]) => {
      const product = products.find((p) => p._id === item.productId);
      if (!product || !product.inStock) return total;

      // Always use variation price if variations exist
      let price = 0;
      if (
        item.variations &&
        typeof item.variations === "object" &&
        Object.keys(item.variations).length > 0
      ) {
        if (typeof item.variations.price === "number") {
          price = item.variations.price;
        } else {
          // Variation exists but no price: data error, fallback to 0 and warn
          console.warn("Variation missing price for product:", product, item);
          price = 0;
        }
      } else {
        // No variations: use basePrice
        price = product.basePrice;
      }

      return total + price * item.quantity;
    }, 0);
  };

  const getProductsData = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setProducts(response.data.products.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const getUserCart = async (token) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/cart/get",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setCartItems(response.data.cartData);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getProductsData();
    fetchPopup();
  }, []);

  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      getUserCart(localStorage.getItem("token"));
    }
    if (token) {
      getUserCart(token);
    }
  }, [token]);

  // Add product review
  const addReview = async (productId, rating, comment) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/review",
        { productId, rating, comment },
        { headers: { token } }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || error.message);
      return { success: false };
    }
  };

  // Get product reviews
  const getReviews = async (productId) => {
    try {
      const response = await axios.get(
        backendUrl + `/api/review/product/${productId}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return { success: false, reviews: [] };
    }
  };

  // Get user's product review
  const getUserReview = async (productId) => {
    try {
      const response = await axios.get(
        backendUrl + `/api/review/user/${productId}`,
        { headers: { token } }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return { success: false, review: null };
    }
  };

  const getAvailableProducts = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/available");
      if (response.data.success) {
        return response.data.products;
      }
      return [];
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  // Add restaurant review
  const addRestaurantReview = async (rating, comment) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/restaurant-review",
        { rating, comment },
        { headers: { token } }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || error.message);
      return { success: false };
    }
  };

  // Get restaurant reviews
  const getRestaurantReviews = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/restaurant-review");
      return response.data;
    } catch (error) {
      console.log(error);
      return { success: false, reviews: [] };
    }
  };

  // Get user's restaurant review
  const getUserRestaurantReview = async () => {
    try {
      const response = await axios.get(
        backendUrl + "/api/restaurant-review/user",
        { headers: { token } }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return { success: false, review: null };
    }
  };

  // Clear cart after successful payment
  const clearCart = async () => {
    setCartItems({});
    if (token) {
      try {
        await axios.post(
          backendUrl + "/api/cart/clear",
          {},
          { headers: { token } }
        );
      } catch (error) {
        console.log("Error clearing cart:", error);
      }
    }
  };

  // Notifications state and fetch
  const [notifications, setNotifications] = useState([]);
  const fetchNotifications = async () => {
    try {
      const res = await axios.get(backendUrl + "/api/notification");
      setNotifications(res.data.filter((n) => n.isActive));
    } catch (err) {
      // Optionally handle error
    }
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    setCartItems,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    backendUrl,
    setToken,
    token,
    popupMessage,
    showPopup,
    setShowPopup,
    dismissPopup,
    fetchPopup,
    notifications,
    fetchNotifications,
    addReview,
    getReviews,
    getUserReview,
    getAvailableProducts,
    addRestaurantReview,
    getRestaurantReviews,
    getUserRestaurantReview,
    getStoreReviews: getRestaurantReviews, // Alias for store reviews
    getUserStoreReview: getUserRestaurantReview, // Alias for user's store review
    addStoreReview: addRestaurantReview, // Alias for adding a store review
    paymentStatus,
    setPaymentStatus,
    clearCart,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
