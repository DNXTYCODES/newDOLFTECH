import React from "react";

const brands = [
  {
    name: "Alienware",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Alienware_logo.svg"
  },
  {
    name: "Razer",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Razer_logo.svg"
  },
  {
    name: "ASUS ROG",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/ROG_%28Republic_of_Gamers%29_logo.svg"
  },
  {
    name: "MSI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Msi-Logo.svg"
  },
  {
    name: "Acer Predator",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Acer_Predator_logo.svg"
  },
  {
    name: "Lenovo Legion",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Lenovo_Legion_logo.svg"
  },
  {
    name: "HP Omen",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/OMEN_by_HP_logo.svg"
  },
  {
    name: "Dell G Series",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg"
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