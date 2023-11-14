import React from "react";

const TopNav = () => {
  return (
    <div className="sm:flex flex-col hidden ">
      <div
        className="relative bg-cover bg-center bg-no-repeat h-[43px] flex items-center w-full "
        style={{
          backgroundImage: `url("/skew.PNG")`,
        }}
      >
        {/* <div className="w-[100%] h-[100%] grid grid-cols-8">
          <div className="col-span-2"></div>
          <div className="col-span-2">ffff</div>
          <div className="col-span-4">ffff</div>
        </div> */}
        <div className="flex w-full">
          <div className="w-[25%]"></div>
          <div className="w-[30%] font-medium font-poppins text-sm">
            <h5>info@contractingplus.com</h5>
          </div>
          <div className="w-[45%] text-[#FFF] font-medium font-poppins text-sm">
            <h5>
              Address: 12 Igbodo Street, Old GRA, Port Harcourt, River State,
              Nigeria
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
