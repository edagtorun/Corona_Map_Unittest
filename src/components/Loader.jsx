import React from "react";

const Loader = ({ type }) => {
  //header icin loader
  if (type === "header")
    return (
      <div
        data-testid="header-loader"
        className="flex items-center space-x-2 animate-pulse"
      >
        <div className="w-24 h-[64px] rounded-md bg-gray-400"></div>
        <div className="w-[180px] h-[36px] bg-gray-400 rounded-md" />
      </div>
    );

  //alt kisim icin
  // 16 elemana sahip bir dizi olustur
  const arr = new Array(16).fill();
  return arr.map(() => (
    <div
      data-testid="card-loader"
      className="bg-gray-200 rounded-lg shadow-md p-4 text-transparent select-none animate-pulse min-w-[206px]"
    >
      <p className=" bg-gray-300  w-2/5 text-sm font-semibold mb-2 capitalize rounded-md">
        &nbsp;
      </p>
      <h2 className=" bg-gray-400  w-3/4 text-lg font-bold rounded-md">
        &nbsp;
      </h2>
    </div>
  ));
};

export default Loader;
