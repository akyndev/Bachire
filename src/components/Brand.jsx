import React from "react";

const brand = [
  "/assets/tokopedia.svg",
  "/assets/balenciaga.svg",
  "/assets/adidas.svg",
  "/assets/gucci.svg",
  "/assets/bukalaka.svg",
];

const Brand = () => {
  return (
    <section className="mt-20">
      <div className="container mx-auto">
        <div className="px-2 lg:px-0">
          <div className="w-full ">
          <h2 className="lg:w-6/12 text-xl lg:text-3xl mx-auto">We Collaborate With 250++ Leading Top E Commerce and Brands</h2>
          </div>
          <div className="flex flex-wrap  justify-between mt-8">
            {brand.map((item) => (
              <img className="w-28 mx-auto lg:mx-0 my-4 lg:w-32" src={item} alt="" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
