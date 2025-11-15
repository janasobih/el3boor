import React from "react";
import { FaEye, FaBullseye, FaLightbulb, FaHandshake } from "react-icons/fa";
const About = () => {
  const cards = [
    {
      title: "رؤيتنا",
      text: "أن نكون الشريك اللوجستي الأكثر ثقة عبر تقديم خدمات شحن سريعة، آمنة، وموثوقة على مستوى محلي ودولي.",
      icon: <FaEye />,
    },
    {
      title: "مهمتنا",
      text: "توفير حلول شحن متكاملة تضمن وصول الشحنات في الوقت المحدد وبأعلى معايير الجودة وتتبّع لحظي لتحسين تجربة عملائنا.",
      icon: <FaBullseye />,
    },
    {
      title: "قيمنا",
      text: "الدقة، الأمان، الالتزام بالمواعيد، وخدمة عملاء مميزة لضمان رضا العملاء في كل عملية شحن.",
      icon: <FaLightbulb />,
    },
    {
      title: "لماذا نحن",
      text: "نقدّم تغطية واسعة، أسعار تنافسية، دعم متواصل، وسرعة في التوصيل تجعلنا الخيار الأفضل لشركتك.",
      icon: <FaHandshake />,
    },
  ];

  return (
    <div id="about" className="flex flex-col gap-20 items-center">
      <div className="flex flex-col gap-10 justify-center items-center text-[#164e63]  text-center p-10 pb-0">
        <p className=" w-fit text-4xl font-bold border-b-2 border-solid border-[#a7a9aa]">
          شركتنا
        </p>
        <p className=" md:w-[70%] text-xl font-bold ">
          منذ بدايه الشركه تهدف إلى تطوير خدمات الشحن والتخليص الجمركي و كافة
          الخدمات المساعدة وتقديم خدمات الدعم والمشورة لشركائنا والعمل المستمر
          على رفع كفاءة الخدمة وتزويدها بأحدث الأساليب وتطوير وتحسين الخدمة
          وتقوية أداء الفريق من خلال التدريب المستمر وتقديم خدمة الشحن الدولي
          بأسعار تنافسيةوتحسين قدرتها على المنافسة
        </p>
      </div>
      <div className="flex gap-5 justify-center flex-wrap flex-row-reverse">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#164e63] text-white rounded-full w-[16rem] h-[16rem] shadow-xl flex flex-col items-center  gap-3 text-center p-5"
          >
            <div className="text-white text-5xl mb-4">{card.icon}</div>
            <h3 className="font-bold">{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
      {/* <button className="w-fit rounded-full bg-[#164e63] border border-[#164e63] text-white px-5 py-2 font-semibold">
        اطلب عرض السعر
      </button> */}
    </div>
  );
};

export default About;
