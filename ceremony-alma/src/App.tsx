import { useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";

import audio from "../src/assets/song2.mp3";

function App() {
  const audioRef = useRef(new Audio(audio));

  useEffect(() => {
    audioRef.current.loop = true;
    audioRef.current.play();
  }, []);

  // Fungsi untuk mengembalikan state menjadi false saat lagu selesai
  const handlePlayAudio = () => {
    audioRef.current.play();
  };

  return (
    <div className="relative min-h-screen">
      {/* Tambahkan z-50 agar tombol selalu di depan background Login/Landing */}
      <div style={{ position: "fixed", top: 20, left: 20, zIndex: 9999 }}>
        <button 
          onClick={handlePlayAudio}
          className="p-3 bg-white/50 backdrop-blur-md rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-pink-600">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z"
            />
          </svg>
        </button>
      </div>

      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;