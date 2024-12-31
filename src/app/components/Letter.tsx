"use client";

import { useEffect, useRef } from "react";

const Letter = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null); // Reference to the video element
  const audioRef = useRef<HTMLAudioElement | null>(null); // Reference to the first audio element
  const audioRef1 = useRef<HTMLAudioElement | null>(null); // Reference to the second audio element

  useEffect(() => {
    // Select the envelope element
    const envelope = document.querySelector(".envelope-wrapper");

    // Handle the click event to toggle classes and play video/audio
    const handleClick = () => {
      if (
        !envelope ||
        !videoRef.current ||
        !audioRef.current ||
        !audioRef1.current
      )
        return;

      const image = envelope.querySelector<HTMLImageElement>(".letter img");
      if (!image) return;

      image.classList.toggle("big");
      envelope.classList.toggle("flap");

      // Play video and audio when the envelope is opened
      if (envelope.classList.contains("flap")) {
        videoRef.current.play();
        audioRef.current.play();
        audioRef1.current.play();
        videoRef.current.style.opacity = "1"; // Make the video visible
      } else {
        videoRef.current.pause();
        audioRef.current.pause();
        audioRef1.current.pause();
        videoRef.current.style.opacity = "0"; // Hide the video
      }
    };

    // Add the event listener to the envelope
    if (envelope) {
      envelope.addEventListener("click", handleClick);
    }

    // Cleanup the event listener when the component unmounts
    return () => {
      if (envelope) {
        envelope.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <div className="container">
      {/* Background video */}
      <video
        ref={videoRef}
        className="background-video"
        src="vid1.mp4"
        loop
        muted></video>

      {/* Background audio */}
      <audio ref={audioRef} src="music.mp3"></audio>
      <audio ref={audioRef1} src="new-music.mp3" loop></audio>

      <div className="envelope-wrapper">
        <div className="envelope">
          <div className="letter">
            <div className="text">
              <img src="img.png" className="w-full" alt="Letter" />
            </div>
          </div>
        </div>
        <div className="heart"></div>
      </div>
    </div>
  );
};

export default Letter;
