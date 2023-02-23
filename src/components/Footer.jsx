import React from "react";

const Footer = () => {
  return (
    <section className="mt-20">
      <div className="container mx-auto">
        <div className="px-2 lg:px-0">
          <div className="my-10 flex flex-col lg:flex-row justify-between">
            <div className=" w-full lg:w-4/12">
              <img src="/assets/logo.svg" alt="" />
              <p className="py-4">
                Bachira is an online store dealing with all product 
                Bachira provide cheap, high quality, products to 
                customers
              </p>
            </div>
            <table className="w-8/12 lg:block hidden text-left">
              <thead>
                <tr>
                  <th>For beginner</th>
                  <th>Overview</th>
                  <th>Explore Us</th>
                  <th>Contact Us</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>About</td>
                  <td>Products</td>
                  <td>Our Career</td>
                  <td>support@gmail.com</td>
                </tr>
                <tr>
                  <td>Career</td>
                  <td>Categories</td>
                  <td>Privacy</td>
                  <td>021 - 555 -456</td>
                </tr>
                <tr>
                  <td>Promotion</td>
                  <td>Pricing</td>
                  <td>Terms & Condition</td>
                  <td>Sudirman, South Jakarta</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="lg:w-[max-content] w-64 text-center mx-auto pb-6">
            Copyright {new Date().getFullYear()} • All Rights
            Reserved Bachira by <b>Osla</b>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
