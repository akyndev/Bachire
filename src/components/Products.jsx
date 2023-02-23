import React from "react";


const products = [
  {
    name: "Nike Air Force",
    img: "/image/nike_shoe.png",
    price: 132
  },
  {
    name: "White sweater",
    img: "/image/hoody.png",
    price: 132
  },
  {
    name: "Android Smartwatch",
    img: "/image/wrist_watch.png",
    price: 132
  },
  {
    name: "Apple Airpods",
    img: "/image/earpod.png",
    price: 132
  },
  {
    name: "Female White T-Shirt",
    img: "/image/teddy.png",
    price: 132
  },
  
]


const Products = () => {
  return (
    <section className="mt-20">
      <div className="container mx-auto">
        <div className="px-2 lg:px-0">
          <h2 className="lg:w-4/12 text-xl text-left lg:text-3xl">
            Populer Products From <br/> All Brands
          </h2>
          <div className="flex flex-wrap lg:space-x-6">
            {
              products.map(({ name, img, price }) => (
                <div key={name} className="bg-slate-100 m-4 w-64 shadow-md hover:shadow-xl rounded-2xl transition-all duration-200">
                  <img src={img} alt="" loading="lazy" className="w-64 h-72 object-cover rounded-2xl " />
                  <div className="space-y-1.5 my-2 px-2">
                    <h3 className="font-semibold">{name}</h3>
                    <p>Rp: {price}</p>
                  </div>
                 </div> 
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
