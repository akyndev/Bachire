import React from "react";

const feature = [
  [
    "Free Delivery",
    "/assets/speed.svg",
    "Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempor",
  ],
  [
    "Trusted platform",
    "/assets/trust.svg",
    "Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempor",
  ],
  [
    "Here for you",
    "/assets/support.svg",
    "Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempor",
  ],
];

const Why_choose_us = () => {
  return (
    <section className="mt-20">
      <div className="container mx-auto">
        <div className="px-2 lg:px-0">
          <div className="w-full ">
            <h2 className="lg:w-6/12 text-xl lg:text-3xl mx-auto">
              Why Choose Ba<span className="text-[var(--green)]">chira</span>?
            </h2>
          </div>
          <div className="lg:grid grid-cols-3 mt-10 space-y-10 lg:space-y-0 justify-center flex flex-wrap">
            {feature.map(([title, icon, text]) => (
              <div key={title} className="flex space-y-2  items-center flex-col">
                <img src={icon} alt={title} />
                <h4>{title}</h4>
                <p className="w-9/12 text-center">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why_choose_us;
