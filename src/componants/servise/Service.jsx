import React from "react";

const Service = () => {
  const service = [
    {
      image: "./ser2.png",
      title: "الشحن البحري",
      text: " شحن بحري اقتصادي مع ضمان وصول البضائع بسلام. نقدم حلول شحن بحري متكاملة مع توفير خدمات التخزين والتوزيع. نتعامل مع أكبر الموانئ العالمية",
    },
    {
      image: "./ser3.png",
      title: "الشحن الجوي",
      text: "شحن جوي سريع وموثوق به لأي مكان في العالم. نضمن وصول البضائع بأمان وسرعة مع تتبع دقيق للشحنات. نتعامل مع أكبر شركات الطيران لتقديم أفضل الخدمات",
    },
    {
      image: "./ser1.png",
      title: "الشحن البري",
      text: "نقدم خدمات شحن بري سريعة وآمنة داخل وخارج البلاد. نضمن وصول البضائع في الوقت المحدد وبأعلى معايير الجودة. فريقنا المدرب جيدًا يعمل على توفير أفضل الحلول اللوجستية",
    },
    {
      image: "./ser4.png",
      title: " تخليص جمركي",
      text: "خدمات تخليص جمركي سريعة ودقيقة بأسعار تنافسية. نضمن إتمام الإجراءات الجمركية في أسرع وقت ممكن. فريقنا المتخصص يعمل على توفير أفضل الحلول الجمركية",
    },
    {
      image: "./ser5.png",
      title: "التصدير لحساب الغير",
      text: "خدمات تصدير متكاملة مع توفير الدعم اللوجستي الكامل. نضمن وصول البضائع إلى وجهتها النهائية بأمان وسرعة. نقدم حلول تصدير مخصصة تناسب احتياجاتك",
    },
  ];

  return (
    <div id="services" className="flex flex-col gap-20 p-20 items-center">
      <div className="flex flex-col gap-10 justify-center items-center text-[#164e63]  text-center p-10 pb-0">
        <p className=" w-fit text-4xl font-bold border-b-2 border-solid border-[#a7a9aa]">
          خدماتنا
        </p>
        <p className="w-[100%] md:w-[70%] text-xl font-bold ">
          نقدم لكم مجموعة واسعة من خدمات الشحن والتخليص الجمركي بأسعار تنافسية
          وجودة عالية
        </p>
      </div>
      <div className="flex flex-wrap gap-10 justify-center w-full">
        {service.map((item, index) => (
          <div
            key={index}
            className="w-[350px] bg-white shadow-lg rounded-2xl  flex flex-col gap-3 border border-gray-200 text-right"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[15rem] rounded-xl rounded-b-none object-cover bg-gray-200"
            />
            <div className="px-5 py-7 flex flex-col gap-5">
              <p className="text-2xl font-bold text-[#164e63]">{item.title}</p>
              <p className="text-gray-700 leading-7">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
