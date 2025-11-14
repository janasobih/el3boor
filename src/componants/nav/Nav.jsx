import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "#home", label: "الرئيسية" },
    { href: "#about", label: "من نحن" },
    { href: "#services", label: "خدماتنا" },
    { href: "#whyus", label: "لماذا نحن" },
    { href: "#contact", label: "اتصل بنا" },
  ];
  return (
    <div className="bg-[#f8fafc54] w-full shadow-md  flex flex-row-reverse sm:flex-row  justify-between items-center">
      <div className="hidden md:block">
        <button className="hidden sm:block ml-5 rounded-full border border-white text-white px-5 py-2 font-semibold hover:bg-[#164e63] hover:border-[#164e63] hover:text-white transition">
          اطلب عرض السعر
        </button>
      </div>

      <div className="hidden sm:flex flex-row-reverse sm:ml-5 gap-8 items-center text-white font-medium">
        <a href="#" className="hover:text-[#164e63] transition">
          الرئيسية
        </a>
        <a href="#" className="hover:text-[#164e63] transition">
          نبذه عنا
        </a>
        <a href="#" className="hover:text-[#164e63] transition">
          الخدمات
        </a>
        <a href="#" className="hover:text-[#164e63] transition">
          تواصل معانا
        </a>
      </div>

      <div className="flex-shrink-0">
        <img
          src="./logo2.png"
          alt="Logo"
          className="w-[10rem] h-[7rem] object-contain"
        />
      </div>

      <div className="sm:hidden p-3">
        <button
          onClick={toggleMenu}
          className="text-white hover:text-[#164e63] transition-all duration-300 p-2"
          aria-label="قائمة التنقل"
        >
          {isMenuOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-[50%] bg-white/10 backdrop-blur-sm shadow-2xl border-t rounded-b-3xl">
          <div className="flex flex-col p-4 space-y-4">
            <a
              href="#home"
              onClick={closeMenu}
              className="text-white hover:text-[#164e63] transition-all duration-300 transform hover:scale-105 hover:font-bold text-xl font-semibold py-3 px-4 text-center border-b border-white/20 last:border-b-0 hover:bg-white/10 rounded-lg backdrop-blur-sm"
            >
              الرئيسية
            </a>
            <a
              href="#about"
              onClick={closeMenu}
              className="text-white hover:text-[#164e63] transition-all duration-300 transform hover:scale-105 hover:font-bold text-xl font-semibold py-3 px-4 text-center border-b border-white/20 last:border-b-0 hover:bg-white/10 rounded-lg backdrop-blur-sm"
            >
              من نحن
            </a>
            <a
              href="#services"
              onClick={closeMenu}
              className="text-white hover:text-[#164e63] transition-all duration-300 transform hover:scale-105 hover:font-bold text-xl font-semibold py-3 px-4 text-center border-b border-white/20 last:border-b-0 hover:bg-white/10 rounded-lg backdrop-blur-sm"
            >
              خدماتنا
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="text-white hover:text-[#164e63] transition-all duration-300 transform hover:scale-105 hover:font-bold text-xl font-semibold py-3 px-4 text-center border-b border-white/20 last:border-b-0 hover:bg-white/10 rounded-lg backdrop-blur-sm"
            >
              اتصل بنا
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
