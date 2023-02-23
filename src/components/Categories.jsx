import React from "react";

const Categories = () => {
  return (
    <section className="mt-20">
      <div className="container mx-auto">
        <div className="px-2 lg:px-0">
          <h2 className="lg:w-3/12 text-xl text-left lg:text-3xl">
            Browse Categories of The Store
          </h2>
          <div className=" flex  mt-10 gap-10">
            <div className=" w-full space-y-10">
              <div>
                <img className="rounded-2xl w-full " src="/image/clothes.png" alt="" />
              </div>
              <div>
                <img className="rounded-2xl w-full h-52" src="/image/clothes.png" alt="" />
              </div>
            </div>
            <div className=" w-full  h-[inherit]">
              <img className="rounded-2xl" src="/image/clothes.png" alt="" />
            </div>
            <div className=" w-full  ">
              <img className="rounded-2xl" src="/image/clothes.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
