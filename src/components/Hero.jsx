import React from "react";

const Hero = () => {
  return (
    <section className="mt-20">
      <div className="container mx-auto">
        <div className="px-2 lg:px-0 flex lg:flex-row flex-col">
          <div className="space-y-6 mt-10 lg:mt-20">
            <h1 className="text-3xl md:text-5xl font-bold">
              Best Place to Buy {" "}
              <span className="text-[var(--green)]">Everything.</span>{" "}
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
              nam laboriosam eaque! Molestias, cumque quis? Reprehenderit
              voluptatem tempora dignissimos placeat, distinctio ad magnam esse
              asperiores neque? Quis amet doloribus error.
            </p>
            <div>
              <button className="py-1.5 w-32 text-white rounded-full transition-al duration-200 ring-2 ring-[var(--green)]  shadow-md hover:shadow-sm  bg-[var(--green)]">
                Shop now
              </button>
            </div>
          </div>
          <img src="/assets/home.svg" alt="hero_img" className="w-[1200px] lg:mt-0 mt-10 lg:w-[800px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
