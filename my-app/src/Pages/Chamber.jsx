import React from "react";

const ChamberList = () => {
  return (
    <div className="flex justify-center items-center">
      <div className=" w-10/12 h-full bg-[#353535] mb-16">
        <div className="md:h-[500px] h-[250px] w-full bg-[#353535]"></div>
        <div className="md:h-[100px] h-[50px] w-full bg-white md:px-5 md:py-4 px-1 py-1">
          <div className="text-xs text-[#747474]">admin</div>
          <div>Lorem ipsum dolor sit amet</div>
        </div>
      </div>
    </div>
  );
};

export const Chamber = () => {
  return (
    <div className="w-screen min-h-screen bg-gray-isag">
      <div className="py-12 w-full">
        <ChamberList />
        <ChamberList />
        <ChamberList />
      </div>
    </div>
  );
};
