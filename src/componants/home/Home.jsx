import React from "react";

const Home = () => {
  return (
    <div id="home" className="flex items-center justify-center h-[70vh]">
      <div className="text-white flex flex-col gap-[2rem] items-center">
        <p className="font-bold text-2xl">العبور للشحن و الخدمات اللوجستية</p>
        <p className="font-bold text-xl">السرعة والأمان في كل شحنة</p>
        <button className="w-fit rounded-full border border-white text-white px-5 py-2 font-semibold hover:bg-[#164e63] hover:border-[#164e63] transition">
          اطلب عرض السعر
        </button>
      </div>
    </div>
  );
};

export default Home;
