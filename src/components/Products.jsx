import React from "react";
import wedo_auto from "../assets/wedo_auto.png";

const Products = () => {
  return (
    <div>
      {/* about text  */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img className="h-30" src={wedo_auto} alt="" />
          </div>
          <div>
            <h2 className="text-4xl text-neutralDGrey  font-semibold mb-4 md:w-4/5">
              The unseen of spending three years at Pixelgrade
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              Manage your entrie community in single systeme Manage your entrie
              community in single systeme Manage your entrie community in single
              systeme Manage your entrie community in single systeme Manage your
              entrie community in single systeme Manage your entrie community in
              single systeme Manage your entrie community in single systeme
              Manage your entrie community in single systeme Manage your entrie
              community in single systeme Manage your entrie community in single
              systeme Manage your entrie community in single systeme Manage your
              entrie community in single systeme
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      {/* company stats  */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/3"></div>
          {/* stats  */}
          <div className="md:w-2/3 mx-auto">
            <div>
              <p className="md:w-4/5 text-sm text-neutralGrey mb-8 leading-7">
                Manage your entrie community in single systeme Manage your
                entrie community in single systeme Manage your entrie community
                in single systeme Manage your entrie community in single systeme
                Manage your entrie community in single systeme Manage your
                entrie community in single systeme Manage your entrie community
                in single systeme Manage your entrie community in single systeme
                Manage your entrie community in single systeme Manage your
                entrie community in single systeme Manage your entrie community
                in single systeme Manage your entrie community in single systeme
              </p>
              <h5 className="text-brandPrimary text-1 font-semibold mb-2">
                Tim Smith
              </h5>
              <p>British Dragon Boat Racing Association</p>
              <div>
                <div className="flex items-center gap-8 flex-wrap">
                  <img
                    className="h-10"
                    src="/src/assets/icons/accident.png"
                    alt=""
                  />
                  <img
                    className="h-10"
                    src="/src/assets/icons/cotedivoire.png"
                    alt=""
                  />
                  <img
                    className="h-10"
                    src="/src/assets/icons/cadenas-verrouille.png"
                    alt=""
                  />
                  <img
                    className="h-10"
                    src="/src/assets/icons/accident.png"
                    alt=""
                  />
                  <img
                    className="h-10"
                    src="/src/assets/icons/cotedivoire.png"
                    alt=""
                  />
                  <img
                    className="h-10"
                    src="/src/assets/icons/accident.png"
                    alt=""
                  />
                  <img
                    className="h-10"
                    src="/src/assets/icons/cotedivoire.png"
                    alt=""
                  />
                  <div>
                    <a
                      href="/"
                      className="font-bold text-brandPrimary hover-text-neutral-700"
                    >
                      My all customers
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
