import { useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";

import bgMusic from "../src/assets/song.mp3";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((err) => console.log("Autoplay dicegah", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* File Audio Global */}
      <audio ref={audioRef} src={bgMusic} loop preload="auto" />

      <button
        onClick={toggleMusic}
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[9999] w-12 h-12 flex items-center justify-center bg-white/40 backdrop-blur-md border border-white/50 rounded-full shadow-lg hover:bg-white/60 hover:scale-105 transition-all duration-300 group"
        aria-label="Toggle Music"
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600 drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M15.536 8.464L12 5H9v14h3l3.536-3.464z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 group-hover:text-pink-500 drop-shadow-sm transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        )}
      </button>

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