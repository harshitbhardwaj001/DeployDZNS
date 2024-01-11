import React, { useEffect, useRef, useState } from "react";

const Sound = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const audioPlayer = useRef();

  const pause = () => {
    setIsPaused(true);
    audioPlayer.current.pause();
    audioPlayer.current.currentTime = 0;
  };

  const play = () => {
    setIsPlaying(true);
    setIsPaused(false);
    audioPlayer.current.play();
  };

  const onPlaying = () => {
    if (audioPlayer.current.paused) setIsPlaying(false);
  };

  useEffect(() => {
    const soundButton = document.getElementById("soundbutton");
    const audio = document.getElementById("myaudio");
    audio.volume = 0.2;

    window.onfocus = function () {
      soundButton.classList.contains("paused")
        ? audioPlayer.current.pause()
        : audioPlayer.current.play();
    };

    window.onblur = function () {
      audioPlayer.current.pause();
    };
    play();

    // Clean up the effect when the component is unmounted
    return () => {
      window.onfocus = null;
      window.onblur = null;
    };
  }, []);

  return (
    <>
      <button
        id="soundbutton"
        className={`soundbutton ${isPaused ? "paused" : null}`}
        onClick={!isPlaying ? play : pause}
      >
        <img src="./sound.gif" alt="Sound Button" />
      </button>
      <audio
        src="./AudioHome.mp3"
        id="myaudio"
        loop
        ref={audioPlayer}
        onTimeUpdate={onPlaying}
        autoPlay
      />
    </>
  );
};

export default Sound;
