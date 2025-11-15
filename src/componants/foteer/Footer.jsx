import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaArrowLeft,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#164e63] text-white">
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-row-reverse flex-wrap justify-evenly text-right">
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold  text-white mb-4">
                شركة العبور للشحن
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                نقدم لكم خدمات شحن سريعة وآمنة بأسعار تنافسية. تواصل معنا الآن!
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-6 pr-3">
                روابط سريعة
              </h4>
              <ul className="space-y-3">
                {["الرئيسية", "نبذه عنا ", "الخدمات", "اتصل بنا"].map(
                  (item, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-cyan-400 transition-all duration-300 flex items-center gap-2 group"
                      >
                        <FaArrowLeft className="text-cyan-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-6  pr-3">
                معلومات التواصل
              </h4>
              <div className="space-y-4">
                <div className="flex flex-row-reverse items-start gap-3">
                  <div className="bg-cyan-500/20 p-2 rounded-lg mt-1">
                    <FaMapMarkerAlt className="text-cyan-400 text-sm" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">القاهرة - مصر</p>
                    <p className="text-gray-400 text-xs">المقر الرئيسي</p>
                  </div>
                </div>

                <div className="flex flex-row-reverse items-start gap-3">
                  <div className="bg-cyan-500/20 p-2 rounded-lg mt-1">
                    <FaPhoneAlt className="text-cyan-400 text-sm" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">+20 102 345 6789</p>
                    <p className="text-gray-400 text-xs">
                      من 9 صباحاً - 10 مساءً
                    </p>
                  </div>
                </div>

                <div className="flex flex-row-reverse items-start gap-3">
                  <div className="bg-cyan-500/20 p-2 rounded-lg mt-1">
                    <FaEnvelope className="text-cyan-400 text-sm" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">el3boor@company.com</p>
                    <p className="text-gray-400 text-xs">الرد خلال 24 ساعة</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg--[#164e63]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2025 شركة العبور للشحن. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
