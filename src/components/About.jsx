import React from "react";
import wedo_auto from "../assets/wedo_auto.png";

const About = () => {
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
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralDGrey  font-semibold mb-4 md:w-2/3">
              Helping a local <br/><span className="text-brandPrimary">business reinvent itself</span></h2>
            <p>
              Manage your entrie community in single systeme Manage your entrie
            </p>
          </div>
          {/* stats  */}
          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <img className="h-20" src="/src/assets/icons/accident.png"  alt="" />
                    <div>
                        <h4 className="text-2xl text-neutralDGrey font-semibold">2,245,341</h4>
                        <p>Members</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <img className="h-20" src="/src/assets/icons/accident.png"  alt="" />
                    <div>
                        <h4 className="text-2xl text-neutralDGrey font-semibold">2,245,341</h4>
                        <p>Members</p>
                    </div>
                </div>
            </div>
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <img className="h-20" src="/src/assets/icons/accident.png"  alt="" />
                    <div>
                        <h4 className="text-2xl text-neutralDGrey font-semibold">2,245,341</h4>
                        <p>Members</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <img className="h-20" src="/src/assets/icons/accident.png"  alt="" />
                    <div>
                        <h4 className="text-2xl text-neutralDGrey font-semibold">2,245,341</h4>
                        <p>Members</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
