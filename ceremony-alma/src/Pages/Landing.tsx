import React, { useState, useEffect } from "react";
import foto1dan2 from "../assets/no1dan2.webp";
import foto3 from "../assets/no3.webp";
import foto4 from "../assets/no4.webp";
import foto5 from "../assets/no5.webp";
import foto6 from "../assets/no6.webp";
import foto7 from "../assets/no7.webp";
import foto8 from "../assets/no8.webp";
import foto9 from "../assets/no9.webp";
import foto10 from "../assets/no10.webp";
import foto11 from "../assets/no11.webp";
import foto12 from "../assets/no12.webp";
import foto13 from "../assets/no13.webp";
import foto14 from "../assets/no14.webp";
import foto15 from "../assets/no15.webp";
import foto16 from "../assets/no16.webp";
import foto17 from "../assets/no17.webp";
import foto18 from "../assets/no18.webp";
import foto19 from "../assets/no19.webp";
import foto20 from "../assets/no20.webp";

const slidesData = [
  {
    id: 1,
    type: "image",
    src: foto1dan2,
    text: "namanya Azizah Salma Ayunisa Purnomo lahir pada tanggal 16 Maret 2004.",
  },
  {
    id: 2,
    type: "image",
    src: foto3,
    text: "menjadi anak perempuan pertama yang dianugrahi oleh tuhan kepada kedua orang tuanya.",
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
    id: 10,
    type: "image",
    src: foto11,
    text: "setelah beberapa lama dia harus berpindah ke jakarta karena mengikuti dinas papahnya",
  },
  {
    id: 11,
    type: "image",
    src: foto12,
    text: "setelah memilih beberapa universitas yang akan dijadikan bekal ilmu, dia ditakdirkan untuk berkuliah di telkom university bandung, dan disini lah dia mendapatkan banyak sekali pengalaman dalam hidupnya.",
  },
  {
    id: 12,
    type: "image",
    src: foto13,
    text: "dia sangat serius dan giat dalam menjalani perkuliahannya, sering kali belajar sampai begadang dan tidak bisa diganggu saat ingin ujian.",
  },
  {
    id: 13,
    type: "image",
    src: foto14,
    text: "cara dia melepas penat dari semua tugas dia adalah dia senang sekali bermain dengan teman2nya seperti jalan ke mall dan main ice skating",
  },
  {
    id: 14,
    type: "image",
    src: foto15,
    text: "seiring berjalannya waktu dia menemukan sesosok pria yang bagi dia pria ini berbeda dari pria pria lain yang biasa di temui olehnya, dan pria itu adalah aku",
  },
  {
    id: 15,
    type: "image",
    src: foto16,
    text: "aku sering kali mengajaknya jalan jalan bersama dan makan bersama",
  },
  {
    id: 16,
    type: "image",
    src: foto17,
    text: "bahkan banyak sekali moment moment menyenangkan seperti ngobrol yang tidak terdengar di motor dan kehujanan bersama",
  },
  {
    id: 17,
    type: "image",
    src: foto18,
    text: "dan seiring berjalannya semester sampai lah dia di semester 7 yang fokus dengan proposalnya",
  },
  {
    id: 18,
    type: "image",
    src: foto19,
    text: "aku sebagai support system senang sekali saat mendapatkan kabar nilai DE dia menjadi yang terbaik dan proposalnya di acc",
  },
  {
    id: 19,
    type: "image",
    src: foto20,
    text: "dia juga sangat berharap dirinya akan menjadi yang dibanggakan oleh kedua orang tuanya dengan meraih predikat kelulusan yang terbaik dan bisa diterima di kampus s2 yang dia inginkan",
  },
  {
    id: 20,
    type: "text_only",
    text: "tepat pada hari ini, dia berulang tahun yang ke 22 tahun",
  },
  {
    id: 21,
    type: "text_only",
    text: "happy birthday ya sayang",
  },
  {
    id: 22,
    type: "text_only",
    text: "semoga kamu senantiasa selalu diberi kemudahan",
  },
  {
    id: 23,
    type: "text_only",
    text: "tugas akhirnya dilancarkan",
  },
  {
    id: 24,
    type: "text_only",
    text: "di acc di publikasi international seperti yang kamu inginkan",
  },
  {
    id: 25,
    type: "text_only",
    text: "bergelar lulusan summa cumlaude",
  },
  {
    id: 26,
    type: "text_only",
    text: "diterima di kampus impian mu untuk s2",
  },
  {
    id: 27,
    type: "text_only",
    text: "dan ketahuilah, di setiap langkah mengejar mimpimu itu, aku akan selalu ada di sampingmu.",
  },
  {
    id: 28,
    type: "text_only",
    text: "menjadi pendengar keluh kesahmu, dan orang pertama yang bertepuk tangan atas keberhasilanmu.",
  },
  {
    id: 29,
    type: "text_only",
    text: "terima kasih sudah lahir ke dunia dan memilih aku sebagai teman perjalananmu.",
  },
  {
    id: 30,
    type: "text_only",
    text: "i love you.",
  },

];

const AnimatedText = ({ text, isActive, textClass }: any) => {
  const words = text.split(" ");
  return (
    <div
      className={`flex flex-wrap justify-center gap-x-3 gap-y-1 sm:gap-y-2 ${textClass}`}
    >
      {words.map((word: any, i: any) => (
        <span
          key={i}
          className={`inline-block transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform ${
            isActive
              ? "opacity-100 translate-y-0 scale-100 blur-0"
              : "opacity-0 translate-y-10 scale-90 blur-sm"
          }`}
          style={{ transitionDelay: isActive ? `${i * 150 + 200}ms` : "0ms" }}
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
    }, 8000);

    return () => clearInterval(interval);
  }, [slidesData]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100 overflow-hidden p-4 sm:p-8 font-sans">
      <div className="relative w-full max-w-5xl h-[75vh] sm:h-[85vh] min-h-[550px] text-center bg-white/80 backdrop-blur-xl rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(236,72,153,0.25)] border border-white/50 p-6 sm:p-12 flex justify-center items-center overflow-hidden">
        
        <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: "2s" }}></div>

        {slidesData.map((slide: any, index: number) => {
          const isActive = index === currentSlideIdx;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full flex flex-col justify-center items-center p-8 sm:p-16 box-border transition-all duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-[1.05]"
              }`}
            >
              {slide.type === "image" && (
                <React.Fragment>
                  <div
                    className={`relative mb-8 transition-all duration-[1200ms] ease-out transform ${
                      isActive
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 -translate-y-12 scale-95"
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-pink-300 to-purple-300 rounded-3xl transform rotate-3 scale-[1.02] opacity-60 blur-sm"></div>
                    <img
                      src={slide.src}
                      alt="Memori Indah"
                      className="relative w-auto max-w-[95%] sm:max-w-[85%] h-auto max-h-[45vh] sm:max-h-[50vh] object-cover rounded-3xl shadow-2xl ring-4 ring-white"
                    />
                  </div>
                  
                  <AnimatedText
                    text={slide.text}
                    isActive={isActive}
                    textClass="text-gray-700 text-lg sm:text-xl md:text-2xl leading-relaxed font-medium tracking-wide drop-shadow-sm"
                  />
                </React.Fragment>
              )}

              {slide.type === "text_only" && (
                <AnimatedText
                  text={slide.text}
                  isActive={isActive}
                  textClass="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 drop-shadow-sm pb-2"
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