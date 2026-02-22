import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState<string[]>(new Array(6).fill(""));
  const [error, setError] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isCounting, setIsCounting] = useState(false);
  const [countdown, setCountdown] = useState(10);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const navigate = useNavigate();

  // Fokus ke input pertama saat load
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  // Logika Hitung Mundur
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isCounting && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (isCounting && countdown === 0) {
      navigate("/landing");
    }
    return () => clearTimeout(timer);
  }, [isCounting, countdown, navigate]);

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.target.value;
    setError(false);

    const newPassword = [...password];
    newPassword[index] = value.substring(value.length - 1);
    setPassword(newPassword);

    if (value && index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (
      e.key === "Backspace" &&
      !password[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalPassword = password.join("");

    if (finalPassword === "160304") {
      setShowConfirm(true);
      // Mainkan musik saat konfirmasi muncul
      if (audioRef.current) {
        audioRef.current
          .play()
          .catch((err) => console.log("Autoplay dicegah browser", err));
      }
    } else {
      setError(true);
      setPassword(new Array(6).fill(""));
      if (inputRefs.current[0]) {
        inputRefs.current[0].focus();
      }
    }
  };

  const handleConfirm = () => {
    setIsCounting(true);
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-100 p-4 font-sans overflow-hidden">
      {/* File audio backsound (pastikan path file musik kamu benar) */}
      <audio ref={audioRef} src="/backsound.mp3" loop preload="auto" />

      {/* Main Login Card */}
      <div
        className={`w-full max-w-md bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(236,72,153,0.2)] border border-white/60 p-8 sm:p-12 transition-all duration-700 ${showConfirm ? "blur-sm scale-95 opacity-50 pointer-events-none" : ""}`}
      >
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-gradient-to-tr from-pink-500 to-purple-500 rounded-2xl mx-auto mb-6 shadow-lg flex items-center justify-center transform rotate-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white transform -rotate-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-800 mb-2">
            Private Access
          </h2>
          <p className="text-gray-500 font-medium">
            Masukkan kode rahasia kamu
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div
            className={`flex gap-2 sm:gap-3 justify-center mb-6 w-full ${error ? "animate-pulse" : ""}`}
            dir="ltr"
          >
            {password.map((digit, index) => (
              <input
                key={index}
                type="password"
                maxLength={1}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                value={digit}
                onChange={(e) => handleChange(index, e)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className={`w-12 h-14 sm:w-14 sm:h-16 text-center text-2xl sm:text-3xl font-bold bg-white/50 border-2 rounded-xl focus:ring-4 focus:outline-none transition-all outline-none text-gray-800 shadow-inner ${
                  error
                    ? "border-red-400 focus:border-red-500 focus:ring-red-500/20 text-red-500"
                    : "border-pink-100 focus:border-pink-500 focus:ring-pink-500/20"
                }`}
              />
            ))}
          </div>

          {error && (
            <p className="text-red-500 text-sm font-medium mb-6 animate-bounce">
              Kode salah, coba lagi!
            </p>
          )}

          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-lg font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
          >
            Buka Memori
          </button>
        </form>
      </div>

      {/* Modal Konfirmasi & Hitung Mundur */}
      {showConfirm && (
        <div className="absolute inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-pink-100/30 backdrop-blur-md"></div>

          <div className="relative w-full max-w-sm bg-white rounded-[2.5rem] shadow-2xl p-8 sm:p-10 text-center transform transition-all duration-500 scale-100 animate-[fadeIn_0.5s_ease-out]">
            {!isCounting ? (
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mb-6 animate-pulse">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Akses Terbuka!
                </h3>
                <p className="text-gray-500 mb-8">
                  Apakah kamu sudah siap membaca memori ini?
                </p>
                <button
                  onClick={handleConfirm}
                  className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg transition-transform transform hover:scale-105"
                >
                  Aku Siap!
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-48">
                <p className="text-gray-500 font-medium mb-4">
                  Bersiap ya ...
                </p>
                <div className="relative flex items-center justify-center w-32 h-32">
                  <div className="absolute inset-0 border-8 border-pink-100 rounded-full"></div>
                  <div className="absolute inset-0 border-8 border-pink-500 rounded-full border-t-transparent animate-spin"></div>
                  <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-purple-600 drop-shadow-sm">
                    {countdown}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
