import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FiSearch,
  FiUser,
  FiShoppingCart,
  FiMenu,
  FiSun,
  FiMoon,
} from "react-icons/fi";
import { ShopContext } from "../context/ShopContext";

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  const [visible, setVisible] = useState(false);
  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  const handleSearchClick = () => {
    setShowSearch(true);
    navigate("/products");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between py-5 font-medium bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 sm:px-6 lg:px-8 shadow-lg backdrop-blur bg-opacity-90 dark:bg-opacity-90">
      {/* Logo */}
      <Link to="/" className="flex items-center" aria-label="Dolftech Home">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 mr-3 flex items-center justify-center">
            <span className="text-white font-bold text-lg">DT</span>
          </div>
          <h1 className="gamer-font text-2xl text-gray-900 dark:text-white">
            DOLF<span className="text-cyan-500">TECH</span>
          </h1>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav aria-label="Main navigation">
        <ul className="hidden md:flex gap-8 text-base">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex flex-col items-center ${
                  isActive
                    ? "text-cyan-500 font-semibold"
                    : "text-gray-700 dark:text-gray-300 hover:text-cyan-500"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>HOME</span>
                  <hr
                    className={`w-2/4 h-[2px] mt-1 ${
                      isActive ? "bg-cyan-500" : "bg-transparent"
                    }`}
                  />
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `flex flex-col items-center ${
                  isActive
                    ? "text-cyan-500 font-semibold"
                    : "text-gray-700 dark:text-gray-300 hover:text-cyan-500"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>SHOP</span>
                  <hr
                    className={`w-2/4 h-[2px] mt-1 ${
                      isActive ? "bg-cyan-500" : "bg-transparent"
                    }`}
                  />
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/laptop-finder"
              className={({ isActive }) =>
                `flex flex-col items-center ${
                  isActive
                    ? "text-cyan-500 font-semibold"
                    : "text-gray-700 dark:text-gray-300 hover:text-cyan-500"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="flex items-center gap-1">
                    FIND YOUR LAPTOP
                    <span className="px-2 py-1 ml-2 text-xs bg-gradient-to-r from-purple-600 to-red-500 text-white rounded-full">
                      AI
                    </span>
                  </span>
                  <hr
                    className={`w-2/4 h-[2px] mt-1 ${
                      isActive ? "bg-cyan-500" : "bg-transparent"
                    }`}
                  />
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `flex flex-col items-center ${
                  isActive
                    ? "text-cyan-500 font-semibold"
                    : "text-gray-700 dark:text-gray-300 hover:text-cyan-500"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>CONTACT</span>
                  <hr
                    className={`w-2/4 h-[2px] mt-1 ${
                      isActive ? "bg-cyan-500" : "bg-transparent"
                    }`}
                  />
                </>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Navigation Icons */}
      <div className="flex items-center gap-5">
        <button
          onClick={handleSearchClick}
          className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-cyan-500 transition-colors"
          aria-label="Search products"
        >
          <FiSearch className="text-xl" />
        </button>

        <div className="group relative hidden sm:block">
          <button
            onClick={() => (token ? null : navigate("/login"))}
            className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-cyan-500 transition-colors"
            aria-label="User account"
          >
            <FiUser className="text-xl" />
          </button>
          {/* Dropdown Menu */}
          {token && (
            <div className="group-hover:block hidden absolute right-0 pt-4 z-20">
              <div className="flex flex-col gap-3 w-36 py-3 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
                <button
                  className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-cyan-500 text-left"
                  aria-label="View my profile"
                >
                  My Profile
                </button>
                <button
                  onClick={() => navigate("/orders")}
                  className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-cyan-500 text-left"
                  aria-label="View my orders"
                >
                  Orders
                </button>
                <button
                  onClick={logout}
                  className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-cyan-500 text-left"
                  aria-label="Logout"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>

        <Link
          to="/cart"
          className="relative text-gray-700 dark:text-gray-300 hover:text-cyan-500 transition-colors"
          aria-label="Shopping cart"
        >
          <FiShoppingCart className="text-xl" />
          <span className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-cyan-500 text-white aspect-square rounded-full text-[9px]">
            {getCartCount()}
          </span>
        </Link>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label={
            isDarkMode ? "Switch to light mode" : "Switch to dark mode"
          }
        >
          {isDarkMode ? (
            <FiSun className="text-xl" />
          ) : (
            <FiMoon className="text-xl" />
          )}
        </button>

        <button
          onClick={() => setVisible(true)}
          className="cursor-pointer md:hidden text-gray-700 dark:text-gray-300 hover:text-cyan-500 transition-colors ml-2"
          aria-label="Open menu"
        >
          <FiMenu className="text-xl" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 bg-white dark:bg-gray-900 w-full max-w-xs transition-transform duration-300 ease-in-out z-[100] ${
          visible ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!visible}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-5 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 mr-3 flex items-center justify-center">
                <span className="text-white font-bold text-sm">DT</span>
              </div>
              <h1 className="gamer-font text-xl text-gray-900 dark:text-white">
                DOLF<span className="text-cyan-500">TECH</span>
              </h1>
            </div>
            <button
              onClick={() => setVisible(false)}
              className="flex items-center gap-2 cursor-pointer"
              aria-label="Close menu"
            >
              <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
                Close
              </span>
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                <span className="text-xl">×</span>
              </div>
            </button>
          </div>
          <nav
            className="flex-1 flex flex-col py-4"
            aria-label="Mobile navigation"
          >
            <NavLink
              onClick={() => setVisible(false)}
              className={({ isActive }) =>
                `py-4 px-6 text-lg ${
                  isActive
                    ? "text-cyan-500 font-semibold bg-cyan-50 dark:bg-cyan-900/20"
                    : "text-gray-700 dark:text-gray-300"
                }`
              }
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className={({ isActive }) =>
                `py-4 px-6 text-lg ${
                  isActive
                    ? "text-cyan-500 font-semibold bg-cyan-50 dark:bg-cyan-900/20"
                    : "text-gray-700 dark:text-gray-300"
                }`
              }
              to="/products"
            >
              SHOP
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className={({ isActive }) =>
                `py-4 px-6 text-lg ${
                  isActive
                    ? "text-cyan-500 font-semibold bg-cyan-50 dark:bg-cyan-900/20"
                    : "text-gray-700 dark:text-gray-300"
                }`
              }
              to="/laptop-finder"
            >
              <div className="flex items-center gap-2">
                <span>FIND YOUR LAPTOP</span>
                <span className="px-2 py-1 text-xs bg-gradient-to-r from-purple-600 to-red-500 text-white rounded-full">
                  AI
                </span>
              </div>
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className={({ isActive }) =>
                `py-4 px-6 text-lg ${
                  isActive
                    ? "text-cyan-500 font-semibold bg-cyan-50 dark:bg-cyan-900/20"
                    : "text-gray-700 dark:text-gray-300"
                }`
              }
              to="/contact"
            >
              CONTACT
            </NavLink>

            <div className="px-6 mt-6 pt-4 border-t border-gray-200 dark:border-gray-800">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-400">
                  Dark Mode
                </span>
                <button
                  onClick={() => {
                    toggleDarkMode();
                    setVisible(false);
                  }}
                  className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300 dark:bg-gray-600 transition-colors"
                  aria-label={
                    isDarkMode ? "Switch to light mode" : "Switch to dark mode"
                  }
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      isDarkMode ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>

            {token && (
              <div className="mt-8 px-6 border-t border-gray-200 dark:border-gray-800 pt-4">
                <h3 className="text-cyan-500 font-semibold mb-3">Account</h3>
                <button
                  onClick={() => {
                    navigate("/orders");
                    setVisible(false);
                  }}
                  className="py-3 cursor-pointer text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 w-full text-left"
                  aria-label="View my orders"
                >
                  My Orders
                </button>
                <button
                  onClick={() => {
                    logout();
                    setVisible(false);
                  }}
                  className="py-3 cursor-pointer text-gray-700 dark:text-gray-300 border-t border-b border-gray-200 dark:border-gray-700 w-full text-left"
                  aria-label="Logout"
                >
                  Logout
                </button>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

// import React, { useContext, useState } from 'react'
// import { assets } from '../assets/assets'
// import { Link, NavLink } from 'react-router-dom'
// import { ShopContext } from '../context/ShopContext';
// import { FiSearch, FiUser, FiShoppingCart, FiMenu } from 'react-icons/fi';

// const Navbar = () => {
//     const [visible, setVisible] = useState(false);
//     const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

//     const logout = () => {
//         navigate('/login')
//         localStorage.removeItem('token')
//         setToken('')
//         setCartItems({})
//     }

//     const handleSearchClick = () => {
//         setShowSearch(true);
//         navigate('/products');
//     }

//     return (
//         <header className="flex items-center justify-between py-5 font-medium">
//             {/* Logo */}
//             <Link to="/" className="flex items-center" aria-label="Scent Design Home">
//                 <h1 className="prata-regular text-3xl text-purple-800">
//                     SCENT <span className="text-amber-600">DESIGN</span>
//                 </h1>
//             </Link>

//             {/* Desktop Navigation */}
//             <nav aria-label="Main navigation">
//                 <ul className='hidden sm:flex gap-8 text-base'>
//                     <li>
//                         <NavLink
//                             to='/'
//                             className={({isActive}) =>
//                                 `flex flex-col items-center ${isActive ? 'text-purple-800 font-semibold' : 'text-gray-700 hover:text-purple-800'}`
//                             }
//                         >
//                             {({isActive}) => (
//                                 <>
//                                     <span>HOME</span>
//                                     <hr className={`w-2/4 h-[2px] mt-1 ${isActive ? 'bg-purple-800' : 'bg-transparent'}`} />
//                                 </>
//                             )}
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink
//                             to='/about'
//                             className={({isActive}) =>
//                                 `flex flex-col items-center ${isActive ? 'text-purple-800 font-semibold' : 'text-gray-700 hover:text-purple-800'}`
//                             }
//                         >
//                             {({isActive}) => (
//                                 <>
//                                     <span>ABOUT</span>
//                                     <hr className={`w-2/4 h-[2px] mt-1 ${isActive ? 'bg-purple-800' : 'bg-transparent'}`} />
//                                 </>
//                             )}
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink
//                             to='/products'
//                             className={({isActive}) =>
//                                 `flex flex-col items-center ${isActive ? 'text-purple-800 font-semibold' : 'text-gray-700 hover:text-purple-800'}`
//                             }
//                         >
//                             {({isActive}) => (
//                                 <>
//                                     <span>PERFUMES</span>
//                                     <hr className={`w-2/4 h-[2px] mt-1 ${isActive ? 'bg-purple-800' : 'bg-transparent'}`} />
//                                 </>
//                             )}
//                         </NavLink>
//                     </li>
//                     {/* <li>
//                         <NavLink
//                             to='/training'
//                             className={({isActive}) =>
//                                 `flex flex-col items-center ${isActive ? 'text-purple-800 font-semibold' : 'text-gray-700 hover:text-purple-800'}`
//                             }
//                         >
//                             {({isActive}) => (
//                                 <>
//                                     <span>TRAINING</span>
//                                     <hr className={`w-2/4 h-[2px] mt-1 ${isActive ? 'bg-purple-800' : 'bg-transparent'}`} />
//                                 </>
//                             )}
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink
//                             to='/workshops'
//                             className={({isActive}) =>
//                                 `flex flex-col items-center ${isActive ? 'text-purple-800 font-semibold' : 'text-gray-700 hover:text-purple-800'}`
//                             }
//                         >
//                             {({isActive}) => (
//                                 <>
//                                     <span>WORKSHOPS</span>
//                                     <hr className={`w-2/4 h-[2px] mt-1 ${isActive ? 'bg-purple-800' : 'bg-transparent'}`} />
//                                 </>
//                             )}
//                         </NavLink>
//                     </li> */}
//                     <li>
//                         <NavLink
//                             to='/contact'
//                             className={({isActive}) =>
//                                 `flex flex-col items-center ${isActive ? 'text-purple-800 font-semibold' : 'text-gray-700 hover:text-purple-800'}`
//                             }
//                         >
//                             {({isActive}) => (
//                                 <>
//                                     <span>CONTACT</span>
//                                     <hr className={`w-2/4 h-[2px] mt-1 ${isActive ? 'bg-purple-800' : 'bg-transparent'}`} />
//                                 </>
//                             )}
//                         </NavLink>
//                     </li>
//                 </ul>
//             </nav>

//             {/* Navigation Icons */}
//             <div className='flex items-center gap-6'>
//                 <button
//                     onClick={handleSearchClick}
//                     className="cursor-pointer hover:text-purple-800 transition-colors"
//                     aria-label="Search products"
//                 >
//                     <FiSearch className='text-xl' />
//                 </button>

//                 <div className='group relative'>
//                     <button
//                         onClick={() => token ? null : navigate('/login')}
//                         className="cursor-pointer hover:text-purple-800 transition-colors"
//                         aria-label="User account"
//                     >
//                         <FiUser className='text-xl' />
//                     </button>
//                     {/* Dropdown Menu */}
//                     {token &&
//                     <div className='group-hover:block hidden absolute right-0 pt-4 z-20'>
//                         <div className='flex flex-col gap-3 w-36 py-3 px-4 bg-white border border-purple-200 rounded-lg shadow-lg'>
//                             <button
//                                 className='cursor-pointer text-gray-700 hover:text-purple-800 text-left'
//                                 aria-label="View my profile"
//                             >
//                                 My Profile
//                             </button>
//                             <button
//                                 onClick={() => navigate('/orders')}
//                                 className='cursor-pointer text-gray-700 hover:text-purple-800 text-left'
//                                 aria-label="View my orders"
//                             >
//                                 Orders
//                             </button>
//                             <button
//                                 onClick={logout}
//                                 className='cursor-pointer text-gray-700 hover:text-purple-800 text-left'
//                                 aria-label="Logout"
//                             >
//                                 Logout
//                             </button>
//                         </div>
//                     </div>}
//                 </div>

//                 <Link to='/cart' className='relative hover:text-purple-800 transition-colors' aria-label="Shopping cart">
//                     <FiShoppingCart className='text-xl' />
//                     <span className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-purple-800 text-white aspect-square rounded-full text-[9px]'>
//                         {getCartCount()}
//                     </span>
//                 </Link>

//                 <button
//                     onClick={() => setVisible(true)}
//                     className='cursor-pointer sm:hidden hover:text-purple-800 transition-colors'
//                     aria-label="Open menu"
//                 >
//                     <FiMenu className='text-xl' />
//                 </button>
//             </div>

//             {/* Mobile Menu */}
//             <div
//                 className={`fixed top-0 right-0 bottom-0 bg-white w-full max-w-xs transition-transform duration-300 ease-in-out z-[100] ${visible ? 'translate-x-0' : 'translate-x-full'}`}
//                 aria-hidden={!visible}
//             >
//                 <div className='flex flex-col h-full'>
//                     <button
//                         onClick={() => setVisible(false)}
//                         className='flex items-center gap-4 p-5 cursor-pointer border-b border-gray-200'
//                         aria-label="Close menu"
//                     >
//                         <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
//                         <span className='text-lg font-medium'>Close Menu</span>
//                     </button>
//                     <nav className='flex-1 flex flex-col py-4' aria-label="Mobile navigation">
//                         <NavLink
//                             onClick={() => setVisible(false)}
//                             className={({isActive}) =>
//                                 `py-4 px-6 text-lg ${isActive ? 'text-purple-800 font-semibold bg-purple-50' : 'text-gray-700'}`
//                             }
//                             to='/'
//                         >
//                             HOME
//                         </NavLink>
//                         <NavLink
//                             onClick={() => setVisible(false)}
//                             className={({isActive}) =>
//                                 `py-4 px-6 text-lg ${isActive ? 'text-purple-800 font-semibold bg-purple-50' : 'text-gray-700'}`
//                             }
//                             to='/about'
//                         >
//                             ABOUT
//                         </NavLink>
//                         <NavLink
//                             onClick={() => setVisible(false)}
//                             className={({isActive}) =>
//                                 `py-4 px-6 text-lg ${isActive ? 'text-purple-800 font-semibold bg-purple-50' : 'text-gray-700'}`
//                             }
//                             to='/products'
//                         >
//                             PERFUMES
//                         </NavLink>
//                         {/* <NavLink
//                             onClick={() => setVisible(false)}
//                             className={({isActive}) =>
//                                 `py-4 px-6 text-lg ${isActive ? 'text-purple-800 font-semibold bg-purple-50' : 'text-gray-700'}`
//                             }
//                             to='/training'
//                         >
//                             TRAINING
//                         </NavLink>
//                         <NavLink
//                             onClick={() => setVisible(false)}
//                             className={({isActive}) =>
//                                 `py-4 px-6 text-lg ${isActive ? 'text-purple-800 font-semibold bg-purple-50' : 'text-gray-700'}`
//                             }
//                             to='/workshops'
//                         >
//                             WORKSHOPS
//                         </NavLink> */}
//                         <NavLink
//                             onClick={() => setVisible(false)}
//                             className={({isActive}) =>
//                                 `py-4 px-6 text-lg ${isActive ? 'text-purple-800 font-semibold bg-purple-50' : 'text-gray-700'}`
//                             }
//                             to='/contact'
//                         >
//                             CONTACT
//                         </NavLink>

//                         {token && (
//                             <div className="mt-8 px-6">
//                                 <h3 className="text-purple-800 font-semibold mb-3">Account</h3>
//                                 <button
//                                     onClick={() => { navigate('/orders'); setVisible(false); }}
//                                     className='py-3 cursor-pointer text-gray-700 border-t border-gray-200 w-full text-left'
//                                     aria-label="View my orders"
//                                 >
//                                     My Orders
//                                 </button>
//                                 <button
//                                     onClick={logout}
//                                     className='py-3 cursor-pointer text-gray-700 border-t border-b border-gray-200 w-full text-left'
//                                     aria-label="Logout"
//                                 >
//                                     Logout
//                                 </button>
//                             </div>
//                         )}
//                     </nav>
//                 </div>
//             </div>
//         </header>
//     )
// }

// export default Navbar;

// import React, { useContext, useState } from 'react'
// import { assets } from '../assets/assets'
// import { Link, NavLink } from 'react-router-dom'
// import { ShopContext } from '../context/ShopContext';

// const Navbar = () => {
//     const [visible, setVisible] = useState(false);
//     const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

//     const logout = () => {
//         navigate('/login')
//         localStorage.removeItem('token')
//         setToken('')
//         setCartItems({})
//     }

//     const handleSearchClick = () => {
//         setShowSearch(true);
//         navigate('/menu');
//     }

//     return (
//         <header className="flex items-center justify-between py-5 font-medium">
//             {/* Logo */}
//             <Link to="/" className="flex items-center" aria-label="Ediere Chops Home">
//                 <h1 className="prata-regular text-3xl text-[#008753]">
//                     Ediere <span className="text-amber-600">Chops</span>
//                 </h1>
//             </Link>

//             {/* Desktop Navigation */}
//             <nav aria-label="Main navigation">
//                 <ul className='hidden sm:flex gap-8 text-base'>
//                     <li>
//                         <NavLink
//                             to='/'
//                             className={({isActive}) =>
//                                 `flex flex-col items-center ${isActive ? 'text-[#008753] font-semibold' : 'text-gray-700 hover:text-[#008753]'}`
//                             }
//                         >
//                             {({isActive}) => (
//                                 <>
//                                     <span>HOME</span>
//                                     <hr className={`w-2/4 h-[2px] mt-1 ${isActive ? 'bg-[#008753]' : 'bg-transparent'}`} />
//                                 </>
//                             )}
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink
//                             to='/menu'
//                             className={({isActive}) =>
//                                 `flex flex-col items-center ${isActive ? 'text-[#008753] font-semibold' : 'text-gray-700 hover:text-[#008753]'}`
//                             }
//                         >
//                             {({isActive}) => (
//                                 <>
//                                     <span>MENU</span>
//                                     <hr className={`w-2/4 h-[2px] mt-1 ${isActive ? 'bg-[#008753]' : 'bg-transparent'}`} />
//                                 </>
//                             )}
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink
//                             to='/about'
//                             className={({isActive}) =>
//                                 `flex flex-col items-center ${isActive ? 'text-[#008753] font-semibold' : 'text-gray-700 hover:text-[#008753]'}`
//                             }
//                         >
//                             {({isActive}) => (
//                                 <>
//                                     <span>ABOUT</span>
//                                     <hr className={`w-2/4 h-[2px] mt-1 ${isActive ? 'bg-[#008753]' : 'bg-transparent'}`} />
//                                 </>
//                             )}
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink
//                             to='/contact'
//                             className={({isActive}) =>
//                                 `flex flex-col items-center ${isActive ? 'text-[#008753] font-semibold' : 'text-gray-700 hover:text-[#008753]'}`
//                             }
//                         >
//                             {({isActive}) => (
//                                 <>
//                                     <span>CONTACT</span>
//                                     <hr className={`w-2/4 h-[2px] mt-1 ${isActive ? 'bg-[#008753]' : 'bg-transparent'}`} />
//                                 </>
//                             )}
//                         </NavLink>
//                     </li>
//                 </ul>
//             </nav>

//             {/* Navigation Icons */}
//             <div className='flex items-center gap-6'>
//                 <button
//                     onClick={handleSearchClick}
//                     className="cursor-pointer hover:opacity-70 transition-opacity"
//                     aria-label="Search Nigerian dishes"
//                 >
//                     <img
//                         src={assets.search_icon}
//                         className='w-5'
//                         alt="Search icon"
//                     />
//                 </button>

//                 <div className='group relative'>
//                     <button
//                         onClick={() => token ? null : navigate('/login')}
//                         className="cursor-pointer hover:opacity-70 transition-opacity"
//                         aria-label="User account"
//                     >
//                         <img
//                             className='w-5'
//                             src={assets.profile_icon}
//                             alt="User profile"
//                         />
//                     </button>
//                     {/* Dropdown Menu */}
//                     {token &&
//                     <div className='group-hover:block hidden absolute right-0 pt-4 z-20'>
//                         <div className='flex flex-col gap-3 w-36 py-3 px-4 bg-white border border-[#008753]/20 rounded-lg shadow-lg'>
//                             <button
//                                 className='cursor-pointer text-gray-700 hover:text-[#008753] text-left'
//                                 aria-label="View my profile"
//                             >
//                                 My Profile
//                             </button>
//                             <button
//                                 onClick={() => navigate('/orders')}
//                                 className='cursor-pointer text-gray-700 hover:text-[#008753] text-left'
//                                 aria-label="View my orders"
//                             >
//                                 Orders
//                             </button>
//                             <button
//                                 onClick={logout}
//                                 className='cursor-pointer text-gray-700 hover:text-[#008753] text-left'
//                                 aria-label="Logout"
//                             >
//                                 Logout
//                             </button>
//                         </div>
//                     </div>}
//                 </div>

//                 <Link to='/cart' className='relative' aria-label="Shopping cart">
//                     <img
//                         src={assets.cart_icon}
//                         className='w-5 min-w-5 hover:opacity-70 transition-opacity'
//                         alt="Shopping cart"
//                     />
//                     <span className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-[#008753] text-white aspect-square rounded-full text-[9px]'>
//                         {getCartCount()}
//                     </span>
//                 </Link>

//                 <button
//                     onClick={() => setVisible(true)}
//                     className='cursor-pointer sm:hidden hover:opacity-70 transition-opacity'
//                     aria-label="Open menu"
//                 >
//                     <img
//                         src={assets.menu_icon}
//                         className='w-5'
//                         alt="Mobile menu"
//                     />
//                 </button>
//             </div>

//             {/* Mobile Menu */}
//             <div
//                 className={`fixed top-0 right-0 bottom-0 bg-white w-full max-w-xs transition-transform duration-300 ease-in-out z-[100] ${visible ? 'translate-x-0' : 'translate-x-full'}`}
//                 aria-hidden={!visible}
//             >
//                 <div className='flex flex-col h-full'>
//                     <button
//                         onClick={() => setVisible(false)}
//                         className='flex items-center gap-4 p-5 cursor-pointer border-b border-gray-200'
//                         aria-label="Close menu"
//                     >
//                         <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
//                         <span className='text-lg font-medium'>Close Menu</span>
//                     </button>
//                     <nav className='flex-1 flex flex-col py-4' aria-label="Mobile navigation">
//                         <NavLink
//                             onClick={() => setVisible(false)}
//                             className={({isActive}) =>
//                                 `py-4 px-6 text-lg ${isActive ? 'text-[#008753] font-semibold bg-[#008753]/10' : 'text-gray-700'}`
//                             }
//                             to='/'
//                         >
//                             HOME
//                         </NavLink>
//                         <NavLink
//                             onClick={() => setVisible(false)}
//                             className={({isActive}) =>
//                                 `py-4 px-6 text-lg ${isActive ? 'text-[#008753] font-semibold bg-[#008753]/10' : 'text-gray-700'}`
//                             }
//                             to='/menu'
//                         >
//                             MENU
//                         </NavLink>
//                         <NavLink
//                             onClick={() => setVisible(false)}
//                             className={({isActive}) =>
//                                 `py-4 px-6 text-lg ${isActive ? 'text-[#008753] font-semibold bg-[#008753]/10' : 'text-gray-700'}`
//                             }
//                             to='/about'
//                         >
//                             ABOUT
//                         </NavLink>
//                         <NavLink
//                             onClick={() => setVisible(false)}
//                             className={({isActive}) =>
//                                 `py-4 px-6 text-lg ${isActive ? 'text-[#008753] font-semibold bg-[#008753]/10' : 'text-gray-700'}`
//                             }
//                             to='/contact'
//                         >
//                             CONTACT
//                         </NavLink>

//                         {token && (
//                             <div className="mt-8 px-6">
//                                 <h3 className="text-[#008753] font-semibold mb-3">Account</h3>
//                                 <button
//                                     onClick={() => { navigate('/orders'); setVisible(false); }}
//                                     className='py-3 cursor-pointer text-gray-700 border-t border-gray-200 w-full text-left'
//                                     aria-label="View my orders"
//                                 >
//                                     My Orders
//                                 </button>
//                                 <button
//                                     onClick={logout}
//                                     className='py-3 cursor-pointer text-gray-700 border-t border-b border-gray-200 w-full text-left'
//                                     aria-label="Logout"
//                                 >
//                                     Logout
//                                 </button>
//                             </div>
//                         )}
//                     </nav>
//                 </div>
//             </div>
//         </header>
//     )
// }

// export default Navbar;

// import React, { useContext, useState } from 'react'
// import { assets } from '../assets/assets'
// import { Link, NavLink } from 'react-router-dom'
// import { ShopContext } from '../context/ShopContext';

// const Navbar = () => {
//     const [visible, setVisible] = useState(false);
//     const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

//     const logout = () => {
//         navigate('/login')
//         localStorage.removeItem('token')
//         setToken('')
//         setCartItems({})
//     }

//     const handleSearchClick = () => {
//         setShowSearch(true);
//         navigate('/menu'); // Changed from '/collection' to '/menu'
//     }

//     return (
//         <header className="flex items-center justify-between py-5 font-medium">
//             {/* Logo */}
//             <Link to="/" className="flex items-center" aria-label="Ediere Chops Home">
//                 <h1 className="prata-regular text-3xl text-[#008753]">
//                     Ediere <span className="text-amber-600">Chops</span>
//                 </h1>
//             </Link>

//             {/* Desktop Navigation */}
//             <nav aria-label="Main navigation">
//                 <ul className='hidden sm:flex gap-8 text-base'>
//                     <li>
//                         <NavLink
//                             to='/'
//                             className={({isActive}) =>
//                                 `flex flex-col items-center ${isActive ? 'text-[#008753] font-semibold' : 'text-gray-700 hover:text-[#008753]'}`
//                             }
//                             aria-current="page"
//                         >
//                             <span>HOME</span>
//                             <hr className={`w-2/4 h-[2px] mt-1 ${visible ? 'bg-[#008753]' : 'bg-transparent'}`} />
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink
//                             to='/menu'
//                             className={({isActive}) =>
//                                 `flex flex-col items-center ${isActive ? 'text-[#008753] font-semibold' : 'text-gray-700 hover:text-[#008753]'}`
//                             }
//                         >
//                             <span>MENU</span>
//                             <hr className={`w-2/4 h-[2px] mt-1 ${visible ? 'bg-[#008753]' : 'bg-transparent'}`} />
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink
//                             to='/about'
//                             className={({isActive}) =>
//                                 `flex flex-col items-center ${isActive ? 'text-[#008753] font-semibold' : 'text-gray-700 hover:text-[#008753]'}`
//                             }
//                         >
//                             <span>ABOUT</span>
//                             <hr className={`w-2/4 h-[2px] mt-1 ${visible ? 'bg-[#008753]' : 'bg-transparent'}`} />
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink
//                             to='/contact'
//                             className={({isActive}) =>
//                                 `flex flex-col items-center ${isActive ? 'text-[#008753] font-semibold' : 'text-gray-700 hover:text-[#008753]'}`
//                             }
//                         >
//                             <span>CONTACT</span>
//                             <hr className={`w-2/4 h-[2px] mt-1 ${visible ? 'bg-[#008753]' : 'bg-transparent'}`} />
//                         </NavLink>
//                     </li>
//                 </ul>
//             </nav>

//             {/* Navigation Icons */}
//             <div className='flex items-center gap-6'>
//                 <button
//                     onClick={handleSearchClick}
//                     className="cursor-pointer hover:opacity-70 transition-opacity"
//                     aria-label="Search Nigerian dishes"
//                 >
//                     <img
//                         src={assets.search_icon}
//                         className='w-5'
//                         alt="Search icon"
//                     />
//                 </button>

//                 <div className='group relative'>
//                     <button
//                         onClick={() => token ? null : navigate('/login')}
//                         className="cursor-pointer hover:opacity-70 transition-opacity"
//                         aria-label="User account"
//                     >
//                         <img
//                             className='w-5'
//                             src={assets.profile_icon}
//                             alt="User profile"
//                         />
//                     </button>
//                     {/* Dropdown Menu */}
//                     {token &&
//                     <div className='group-hover:block hidden absolute right-0 pt-4 z-20'>
//                         <div className='flex flex-col gap-3 w-36 py-3 px-4 bg-white border border-[#008753]/20 rounded-lg shadow-lg'>
//                             <button
//                                 className='cursor-pointer text-gray-700 hover:text-[#008753] text-left'
//                                 aria-label="View my profile"
//                             >
//                                 My Profile
//                             </button>
//                             <button
//                                 onClick={() => navigate('/orders')}
//                                 className='cursor-pointer text-gray-700 hover:text-[#008753] text-left'
//                                 aria-label="View my orders"
//                             >
//                                 Orders
//                             </button>
//                             <button
//                                 onClick={logout}
//                                 className='cursor-pointer text-gray-700 hover:text-[#008753] text-left'
//                                 aria-label="Logout"
//                             >
//                                 Logout
//                             </button>
//                         </div>
//                     </div>}
//                 </div>

//                 <Link to='/cart' className='relative' aria-label="Shopping cart">
//                     <img
//                         src={assets.cart_icon}
//                         className='w-5 min-w-5 hover:opacity-70 transition-opacity'
//                         alt="Shopping cart"
//                     />
//                     <span className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-[#008753] text-white aspect-square rounded-full text-[9px]'>
//                         {getCartCount()}
//                     </span>
//                 </Link>

//                 <button
//                     onClick={() => setVisible(true)}
//                     className='cursor-pointer sm:hidden hover:opacity-70 transition-opacity'
//                     aria-label="Open menu"
//                 >
//                     <img
//                         src={assets.menu_icon}
//                         className='w-5'
//                         alt="Mobile menu"
//                     />
//                 </button>
//             </div>

//             {/* Mobile Menu */}
//             <div
//                 className={`fixed top-0 right-0 bottom-0 bg-white w-full max-w-xs transition-transform duration-300 ease-in-out z-[100] ${visible ? 'translate-x-0' : 'translate-x-full'}`}
//                 aria-hidden={!visible}
//             >
//                 <div className='flex flex-col h-full'>
//                     <button
//                         onClick={() => setVisible(false)}
//                         className='flex items-center gap-4 p-5 cursor-pointer border-b border-gray-200'
//                         aria-label="Close menu"
//                     >
//                         <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
//                         <span className='text-lg font-medium'>Close Menu</span>
//                     </button>
//                     <nav className='flex-1 flex flex-col py-4' aria-label="Mobile navigation">
//                         <NavLink
//                             onClick={() => setVisible(false)}
//                             className={({isActive}) =>
//                                 `py-4 px-6 text-lg ${isActive ? 'text-[#008753] font-semibold bg-[#008753]/10' : 'text-gray-700'}`
//                             }
//                             to='/'
//                             aria-current="page"
//                         >
//                             HOME
//                         </NavLink>
//                         <NavLink
//                             onClick={() => setVisible(false)}
//                             className={({isActive}) =>
//                                 `py-4 px-6 text-lg ${isActive ? 'text-[#008753] font-semibold bg-[#008753]/10' : 'text-gray-700'}`
//                             }
//                             to='/menu'
//                         >
//                             MENU
//                         </NavLink>
//                         <NavLink
//                             onClick={() => setVisible(false)}
//                             className={({isActive}) =>
//                                 `py-4 px-6 text-lg ${isActive ? 'text-[#008753] font-semibold bg-[#008753]/10' : 'text-gray-700'}`
//                             }
//                             to='/about'
//                         >
//                             ABOUT
//                         </NavLink>
//                         <NavLink
//                             onClick={() => setVisible(false)}
//                             className={({isActive}) =>
//                                 `py-4 px-6 text-lg ${isActive ? 'text-[#008753] font-semibold bg-[#008753]/10' : 'text-gray-700'}`
//                             }
//                             to='/contact'
//                         >
//                             CONTACT
//                         </NavLink>

//                         {token && (
//                             <div className="mt-8 px-6">
//                                 <h3 className="text-[#008753] font-semibold mb-3">Account</h3>
//                                 <button
//                                     onClick={() => { navigate('/orders'); setVisible(false); }}
//                                     className='py-3 cursor-pointer text-gray-700 border-t border-gray-200 w-full text-left'
//                                     aria-label="View my orders"
//                                 >
//                                     My Orders
//                                 </button>
//                                 <button
//                                     onClick={logout}
//                                     className='py-3 cursor-pointer text-gray-700 border-t border-b border-gray-200 w-full text-left'
//                                     aria-label="Logout"
//                                 >
//                                     Logout
//                                 </button>
//                             </div>
//                         )}
//                     </nav>
//                 </div>
//             </div>
//         </header>
//     )
// }

// export default Navbar;

// import React, { useContext, useState } from 'react'
// import {assets} from '../assets/assets'
// import { Link, NavLink } from 'react-router-dom'
// import { ShopContext } from '../context/ShopContext';

// const Navbar = () => {

//     const [visible,setVisible] = useState(false);

//     const {setShowSearch , getCartCount , navigate, token, setToken, setCartItems} = useContext(ShopContext);

//     const logout = () => {
//         navigate('/login')
//         localStorage.removeItem('token')
//         setToken('')
//         setCartItems({})
//     }

//   return (
//     <div className='flex items-center justify-between py-5 font-medium'>

//       <Link to='/'>

//       <h2 className="text-2xl font-bold text-center bg-golden-brown bg-clip-text text-transparent bg-to-b">
//         FLYBOY
//       </h2>
//       {/* <img src={assets.flyboylogo} className='h-9' alt="FLYBOY LUXURY WATCHES WITH TIMELESS ELEGANCE" /> */}
//       </Link>

//       <ul className='hidden sm:flex gap-5 text-sm text-[white]'>

//         <NavLink to='/' className='flex flex-col items-center gap-1'>
//             <p>HOME</p>
//             <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//         </NavLink>
//         <NavLink to='/collection' className='flex flex-col items-center gap-1'>
//             <p>COLLECTION</p>
//             <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//         </NavLink>
//         <NavLink to='/about' className='flex flex-col items-center gap-1'>
//             <p>ABOUT</p>
//             <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//         </NavLink>
//         <NavLink to='/contact' className='flex flex-col items-center gap-1'>
//             <p>CONTACT</p>
//             <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//         </NavLink>

//       </ul>

//       <div className='flex items-center gap-6'>
//             <img onClick={()=> { setShowSearch(true); navigate('/menu') }} src={assets.search_icon} className='w-5 cursor-pointer' alt="search luxury watches" />

//             <div className='group relative'>
//                 <img onClick={()=> token ? null : navigate('/login') } className='w-5 cursor-pointer' src={assets.profile_icon} alt="wristwatch enthusiast profile" />
//                 {/* Dropdown Menu */}
//                 {token &&
//                 <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
//                     <div className='flex flex-col gap-2 w-36 py-3 px-5  bg-slate-100 text-gray-500 rounded z-[20]'>
//                         <p className='cursor-pointer hover:text-white'>My Profile</p>
//                         <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
//                         <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
//                     </div>
//                 </div>}
//             </div>
//             <Link to='/cart' className='relative'>
//                 <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
//                 <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
//             </Link>
//             <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
//       </div>

//         {/* Sidebar menu for small screens */}
//         <div className={`z-[3] absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
//                 <div className='flex flex-col text-gray-600'>
//                     <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
//                         <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
//                         <p>Back</p>
//                     </div>
//                     <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
//                     <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
//                     <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
//                     <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
//                 </div>
//         </div>

//     </div>
//   )
// }

// export default Navbar
