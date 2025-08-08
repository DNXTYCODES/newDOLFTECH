import React from "react";

const brands = [
  {
    name: "Alienware",
    logo: "https://res.cloudinary.com/dolftechn/image/upload/v1716379241/alienware-logo_uwbqnx.svg"
  },
  {
    name: "Razer",
    logo: "https://res.cloudinary.com/dolftechn/image/upload/v1716379241/razer-logo_zrsb0r.svg"
  },
  {
    name: "ASUS ROG",
    logo: "https://res.cloudinary.com/dolftechn/image/upload/v1716379241/rog-logo_tykqo5.svg"
  },
  {
    name: "MSI",
    logo: "https://res.cloudinary.com/dolftechn/image/upload/v1716379241/msi-logo_zzb7jq.svg"
  },
  {
    name: "Acer Predator",
    logo: "https://res.cloudinary.com/dolftechn/image/upload/v1716379241/predator-logo_ivk5nl.svg"
  },
  {
    name: "Lenovo Legion",
    logo: "https://res.cloudinary.com/dolftechn/image/upload/v1716379241/legion-logo_d0wqpk.svg"
  }
];

const BrandsShowcase = () => (
  <section className="py-8 bg-white dark:bg-gray-900">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 opacity-80 dark:opacity-60">
        {brands.map((brand) => (
          <div key={brand.name} className="flex items-center justify-center">
            <img src={brand.logo} alt={brand.name} className="h-10 dark:invert" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BrandsShowcase;