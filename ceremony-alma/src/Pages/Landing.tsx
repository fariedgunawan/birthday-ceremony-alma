import React, { useState, useEffect } from "react";
import foto12 from "../assets/no1dan2.webp";
import foto3 from "../assets/no3.webp";
import foto4 from "../assets/no4.webp";
import foto5 from "../assets/no5.webp";
import foto6 from "../assets/no6.webp";
import foto7 from "../assets/no7.webp"
import foto8 from "../assets/no8.webp"
import foto9 from "../assets/no9.webp"
import foto10 from "../assets/no10.webp"

const slidesData = [
  {
    id: 1,
    type: "image",
    src: foto12,
    text: "Namanya Azizah Salma Ayunisa Purnomo Lahir pada tanggal 16 Maret 2004.",
  },
  {
    id: 2,
    type: "image",
    src: foto3,
    text: "Menjadi anak perempuan pertama yang dianugrahi oleh tuhan kepada kedua orang tuanya.",
  },
  {
    id: 3,
    type: "image",
    src: foto4,
    text: "dia merupakan anak yang sangat ceria saat dimasa kecilnya.",
  },
  {
    id: 4,
    type: "image",
    src: foto5,
    text: "pada masa kecilnya dia sering dibonceng papah sama kknya dan rambut lucunya itu selalu saja mengganggu kk nya yang dibelakang",
  },
  {
    id: 5,
    type: "image",
    src: foto6,
    text: "meskipun dia lahir dibatang namun dia besar di semarang",
  },
  {
    id: 6,
    type: "image",
    src: foto7,
    text: "dia anak yang sangat manja dengan mamahnya, bahkan tidur saja harus ditemani oleh mamahnya",
  },
  {
    id: 7,
    type: "image",
    src: foto8,
    text: "saat covid dia sering kali membantu mamahnya untuk membersihkan rumah semarang meskipun sering dimarahin juga karena ga bersih wkwkwkw",
  },
  {
    id: 8,
    type: "image",
    src: foto9,
    text: "tapi ini berbanding terbalik dengan papahnya, dia terkadang badmood jika papahnya usil kepadanya",
  },
  {
    id: 9,
    type: "image",
    src: foto10,
    text: "sejak dulu dia suka dan sayang sekali dengan kucing",
  },

  {
    id: 100,
    type: "text_only",
    text: "I Love You More Than Words Can Say. 🌹",
  },
];

const AnimatedText = ({ text, isActive, textClass }: any) => {
  const words = text.split(" ");
  return (
    <div
      className={`flex flex-wrap justify-center gap-x-2 gap-y-1 ${textClass}`}
    >
      {words.map((word: any, i: any) => (
        <span
          key={i}
          className={`inline-block transition-all duration-1000 ease-out transform ${
            isActive
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-90"
          }`}
          style={{ transitionDelay: isActive ? `${i * 200 + 300}ms` : "0ms" }}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

const Landing = () => {
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIdx((prevIdx) =>
        prevIdx === slidesData.length - 1 ? 0 : prevIdx + 1,
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-50 overflow-hidden p-4 sm:p-8">
      <div className="relative w-full max-w-4xl h-[75vh] sm:h-[85vh] min-h-[500px] text-center bg-white rounded-[2.5rem] shadow-2xl p-6 sm:p-12 flex justify-center items-center overflow-hidden">
        {slidesData.map((slide, index) => {
          const isActive = index === currentSlideIdx;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full flex flex-col justify-center items-center p-6 sm:p-12 box-border transition-all duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {slide.type === "image" && (
                <React.Fragment>
                  <img
                    src={slide.src}
                    alt="Memori Indah"
                    className={`w-auto max-w-[95%] sm:max-w-[85%] h-auto max-h-[45vh] sm:max-h-[55vh] object-contain rounded-2xl mb-6 sm:mb-8 shadow-lg transition-all duration-1000 ease-out transform ${
                      isActive
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 -translate-y-8 scale-95"
                    }`}
                  />
                  <AnimatedText
                    text={slide.text}
                    isActive={isActive}
                    textClass="text-pink-600 text-md sm:text-lg md:text-xl leading-relaxed font-semibold"
                  />
                </React.Fragment>
              )}

              {slide.type === "text_only" && (
                <AnimatedText
                  text={slide.text}
                  isActive={isActive}
                  textClass="text-pink-600 text-xl sm:text-2xl md:text-3xl font-bold leading-tight"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Landing;
