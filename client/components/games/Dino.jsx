import React, { useEffect, useState } from "react";

const Dino = () => {
  const [gameStart, setGameStart] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [cactusPos, setCactusPos] = useState("1250px");
  const [dinoPos, setDinoPos] = useState("330px");
  const [pressed, setPressed] = useState(false);
  const [inAir, setInAir] = useState();
  const [score, setScore] = useState(0);
  const [running, setRunning] = useState(false);
  const [highscore, setHighscore] = useState(0);
  let pos = "left-[" + cactusPos + "]";
  let posDino = "top-[" + dinoPos + "]";
  //   useEffect(() => {
  //     const dino = document.getElementById("dino");

  //   }, []);
  const [jumpMobile, setJumpMobile] = useState(false);
  useEffect(() => {
    const dino = document.getElementById("dino");
    const cactus = document.getElementById("cactus");
    // if (dino) {
    //   const handleKeyDown = (event) => {
    //     if (event.key === " ") {
    //       setGameStart(true);
    //     }
    //   };

    //   document.addEventListener("keydown", handleKeyDown);
    // }
    let intervalId;

    const jump = () => {
      if (dino && dino.classList != "jump" && gameStart) {
        dino.classList.add("jump");
        setPressed(true);
      }
      setTimeout(function () {
        dino.classList.remove("jump");
        setPressed(false);
      }, 600);
    };
    const handleKeyDown = (event) => {
      if (event.key === " ") {
        setGameStart(true);
        cactus.classList.add("cactus");
        setGameOver(false);
        console.log(gameOver);
        jump();
      }
    };

    const mobileJump = () => {
      if (dino && dino.classList != "jump" && gameStart) {
        dino.classList.add("jump");
        setPressed(true);
      }
      setTimeout(function () {
        dino.classList.remove("jump");
        setPressed(false);
      }, 600);
    };
    if (jumpMobile) {
      setGameStart(true);
      setGameOver(false);
      cactus.classList.add("cactus");
      mobileJump();
      setJumpMobile(false);
    }

    document.addEventListener("keydown", handleKeyDown);

    let isAlive = setInterval(function () {
      let dinoTop = parseInt(
        window.getComputedStyle(dino).getPropertyValue("top")
      );
      let cactusLeft = parseInt(
        window.getComputedStyle(cactus).getPropertyValue("left")
      );

      // detect collision
      if (cactusLeft < -50 && cactusLeft > -100 && dinoTop >= 240) {
        // collision
        setCactusPos(window.getComputedStyle(cactus).getPropertyValue("left"));
        setDinoPos(window.getComputedStyle(dino).getPropertyValue("top"));
        cactus.classList.remove("cactus");
        setGameOver(true);
        alert(`Oops! Game Over`);
        setScore(0);
      }
    }, 10);

    if (!gameOver) {
      if (gameStart) {
        intervalId = setInterval(() => {
          setScore((prevScore) => prevScore + 10);
          if (score >= highscore) {
            setHighscore(score + 10);
          }
        }, 100);
      }
    }

    return () => clearInterval(intervalId);
  }, [gameStart, gameOver, score, highscore, jumpMobile]);

  // useEffect(() => {
  //   const dino = document.getElementById("dino");
  //   const cactus = document.getElementById("cactus");
  //   const mobileJump = () => {
  //     if (dino && dino.classList != "jump" && gameStart) {
  //       dino.classList.add("jump");
  //       setPressed(true);
  //     }
  //     setTimeout(function () {
  //       dino.classList.remove("jump");
  //       setPressed(false);
  //     }, 600);
  //   };
  //   if (jump) {
  //     setGameStart(true);
  //     cactus.classList.add("cactus");
  //     mobileJump();
  //     setJump(false);
  //   }
  // }, [jump]);

  return (
    <>
      <div className="game w-[1500px] xs:max-md:w-[550px] xs:max-md:bg-cover h-[450px] border-[1px] border-[#F4FF00] bg-game-bg bg-contain xs:max-md:bg-no-repeat m-auto relative my-10 mt-[-1.25rem] top-[10rem] px-32 overflow-hidden">
        <h1 className="w-full absolute left-[1280px] top-[30px] text-[2.1rem] xs:max-md:left-[400px] xs:max-md:text-[1.5rem] xs:max-md:top-[13px]">
          Dino Game
        </h1>
        <h1
          className={`w-full absolute left-[445px] top-[200px] text-[2.1rem] ${
            gameStart ? "invisible" : "visible"
          } xs:max-md:hidden`}
        >
          Press Spacebar to start the game
        </h1>
        <h1 className="w-full absolute text-2xl left-[20px] top-[10px] xs:max-md:top-[40px] xs:max-md:text-lg">
          Score: {score}
        </h1>
        <h1 className="w-full absolute text-2xl left-[250px] top-[10px] xs:max-md:left-[20px] xs:max-md:text-lg">
          High Score: {highscore}
        </h1>
        <h1
          className={`w-full absolute left-[650px] top-[200px] text-[2.1rem] font-bold ${
            gameOver ? "visible" : "invisible"
          } xs:max-md:hidden`}
        >
          Game Over.
        </h1>
        <div
          id="dino"
          className={`w-[120px] h-[120px] bg-dino-bg bg-contain relative top-[330px] left-[-110px]`}
        ></div>
        {pressed && (
          <div className="w-[300px] absolute top-[270px] jump1 ml-[20px]">
            "Phew!"
          </div>
        )}
        <div
          id="cactus"
          className={`w-[80px] h-[120px] relative top-[209px] ${pos} bg-no-repeat bg-cactus-bg bg-contain`}
        ></div>
      </div>
      <div className="hidden xs:max-md:block">
        <div className="absolute z-[100] top-[45rem] left-[7.5rem]">
          <button
            className="border items-center border-[#F4FF00] bg-[#F4FF00] px-5 text-black py-3 font-bold text-lg mt-5 rounded-md w-full xs:max-md:w-[300px]"
            onClick={() => setJumpMobile(true)}
          >
            Jump
          </button>
        </div>
      </div>
    </>
  );
};

export default Dino;
