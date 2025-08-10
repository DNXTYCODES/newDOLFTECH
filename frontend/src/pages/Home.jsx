import React from "react";
import Hero from "../components/Hero";
import BuildLaptopBanner from "../components/BuildLaptopBanner";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import Testimonials from "../components/Testimonials";
import CustomerReviews from "../components/CustomerReviews";
import DeliveryInfo from "../components/DeliveryInfo";
import AboutUs from "../components/AboutUs";
import WarrantyBanner from "../components/WarrantyBanner";
import BrandsShowcase from "../components/BrandsShowcase";
import NewsletterBox from "../components/NewsletterBox";
import Contact from "../components/Contact";
import Chatbot from "../components/Chatbot";

const Home = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 theme-transition">
      {/* <Chatbot /> */}
      <Hero />
      <WarrantyBanner />
      <LatestCollection />
      <BestSeller />
      <Testimonials />
      <BuildLaptopBanner />
      <BrandsShowcase />
      <CustomerReviews />
      <DeliveryInfo />
      <AboutUs />
      <Contact />
      <NewsletterBox />
    </div>
  );
};

export default Home;

// import React from "react";
// import Hero from "../components/Hero";
// import LatestCollection from "../components/LatestCollection";
// import BestSeller from "../components/BestSeller";
// import OurPolicy from "../components/OurPolicy";
// import NewsletterBox from "../components/NewsletterBox";
// import FeaturedSection from "../components/Featured";
// import FlyboyBanner from "../components/FlyboyBanner";
// import FeaturedMeals from "../components/FeaturedMeals";
// import AboutUs from "../components/AboutUs";
// import TrainingPrograms from "../components/TrainingPrograms";
// import NigerianHeritage from "../components/NigerianHeritage";
// import LocalIngredients from "../components/LocalIngredients";
// import WholesaleProgram from "../components/WholesaleProgram";
// import Workshops from "../components/Workshops";
// import Testimonials from "../components/Testimonials";
// import Sustainability from "../components/Sustainability";
// import Contact from "../components/Contact";
// import Chatbot from "../components/Chatbot";
// import DeliveryInfo from "../components/DeliveryInfo";
// import CustomerReviews from "../components/CustomerReviews";

// const Home = () => {
//   return (
//     <div className="bg-white">
//       <Chatbot />
//       <Hero />
//       <LatestCollection />
//       <BestSeller />
//       <Testimonials />
//       <CustomerReviews />
//       <DeliveryInfo />
//       <AboutUs />
//       <TrainingPrograms />
//       <NigerianHeritage />
//       {/* <LocalIngredients /> */}
//       <WholesaleProgram />
//       <Workshops />
//       {/* <Sustainability /> */}
//       <OurPolicy />
//       <Contact />
//       <NewsletterBox />
//     </div>
//   );
// };

// export default Home;
