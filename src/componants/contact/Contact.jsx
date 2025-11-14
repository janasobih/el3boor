import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-[#164e63]  mb-6">
            تواصل معنا
          </h1>
          <p className="text-xl text-[#164e63] max-w-2xl mx-auto leading-relaxed">
            نحن هنا لمساعدتك! تواصل معنا عبر أي من الوسائل التالية وسنرد عليك في
            أسرع وقت
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className=" backdrop-blur-lg rounded-3xl p-8 border shadow-2xl">
            <h2 className="text-3xl font-bold text-[#164e63] mb-8 text-center">
              أرسل رسالة
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group text-right">
                <label className="block text-[#164e63] mb-3 text-lg font-medium">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="text-right w-full bg-white/5 border-2 border-[#164e63] rounded-2xl px-6 py-4 text-[#164e63] text-lg  "
                  placeholder="أدخل اسمك الكامل"
                />
              </div>

              <div className="group text-right">
                <label className="block text-[#164e63] mb-3 text-lg font-medium">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="text-right w-full bg-white/5 border-2 border-gray-600 rounded-2xl px-6 py-4 "
                  placeholder="example@email.com"
                />
              </div>

              <div className="group">
                <label className="text-right block text-[#164e63] mb-3 text-lg font-medium">
                  الرسالة
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="text-right w-full bg-white/5 border-2 border-gray-600 rounded-2xl px-6 py-4 text-lg "
                  placeholder="اكتب رسالتك هنا..."
                />
              </div>

              <button
                type="submit"
                className="w-full border-[#164e63] bg-[#164e63] text-white text-xl font-bold py-4 px-8 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-3"
              >
                <FaPaperPlane className="text-lg" />
                إرسال الرسالة
              </button>
            </form>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="shadow-lg bg-white p-7 rounded-2xl w-[300px] flex flex-col gap-4 border border-gray-200">
              <FaPhoneAlt size={35} className="text-[#164e63] mx-auto" />
              <p className="text-xl text-center font-bold text-[#164e63]">
                الهاتف
              </p>
              <p className="text-center text-gray-700">01023456789</p>
            </div>

            <div className="shadow-lg bg-white p-7 rounded-2xl w-[300px] flex flex-col gap-4 border border-gray-200">
              <FaEnvelope size={35} className="text-[#164e63] mx-auto" />
              <p className="text-xl text-center font-bold text-[#164e63]">
                البريد الإلكتروني
              </p>
              <p className="text-center text-gray-700">info@company.com</p>
            </div>

            <div className="shadow-lg bg-white p-7 rounded-2xl w-[300px] flex flex-col gap-4 border border-gray-200">
              <FaMapMarkerAlt size={35} className="text-[#164e63] mx-auto" />
              <p className="text-xl text-center font-bold text-[#164e63]">
                العنوان
              </p>
              <p className="text-center text-gray-700">القاهرة – مصر</p>
            </div>

            <a
              href="https://wa.me/201023447878"
              target="_blank"
              rel="noreferrer"
              className="shadow-lg bg-white p-7 rounded-2xl w-[300px] flex flex-col gap-4 border border-gray-200 hover:scale-105 transition"
            >
              <FaWhatsapp size={35} className="text-green-600 mx-auto" />
              <p className="text-xl text-center font-bold text-[#164e63]">
                واتساب
              </p>
              <p className="text-center text-gray-700">
                تواصل معنا مباشرة عبر الواتساب
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
