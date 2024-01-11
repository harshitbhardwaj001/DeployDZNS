import React from "react";

const Frames = () => {
  if (typeof window !== "undefined") {
    let zSpacing = -1000,
      lastPos = zSpacing / 5,
      $frames = document.getElementsByClassName("frame"),
      frames = Array.from($frames),
      zVals = [];

    window.onscroll = function () {
      let top = document.documentElement.scrollTop,
        delta = lastPos - top;

      lastPos = top;

      frames.forEach(function (n, i) {
        zVals.push(i * zSpacing + zSpacing);
        zVals[i] += delta * -5.5;
        let frame = frames[i],
          transform = `translateZ(${zVals[i]}px)`,
          opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;
        frame.setAttribute(
          "style",
          `transform: ${transform}; opacity: ${opacity}`
        );
      });
    };

    window.scrollTo(0, 1);
  }

  return (
    <>
      <div className="frame transform-3d">
        <div className="backdrop-blur-[5px]">
          <h2>Our Work</h2>
        </div>
      </div>

      <div className="frame transform-3d">
        <div>
          <div className="bg-1-bg frame-media frame-left" />
        </div>
      </div>

      <div className="frame bg-frame-bg transform-3d">
        {/* <div>
          <video
            src="./video2.mp4"
            autoPlay
            loop
            muted
            className="frame-video frame-video-right"
          />
        </div> */}
        <div>
          <video
            src="./home.mp4"
            autoPlay
            loop
            muted
            className="frame-video frame-video-right"
          />
        </div>
      </div>

      <div className="frame transform-3d" />

      <div className="frame transform-3d">
        <div className="frame-text-right">
          <h3>Graphic Design</h3>
          <p>
            DZNS aims to create graphic designs that express the emotions,
            intentions, and interests of our clients to their intended audience.
            We aim to curate and create various styles, technologies, and ideas
            to create graphics that communicate to the audience and not simply
            catch their attention.
          </p>
        </div>
      </div>

      <div className="frame bg-frame-bg transform-3d">
        <div>
          <div className="bg-2-bg frame-media frame-left" />
        </div>
      </div>

      <div className="frame transform-3d" />

      <div className="frame bg-frame-bg transform-3d">
        <div>
          <div className="bg-3-bg frame-media frame-right left-[38rem] xs:max-md:left-[18rem] 2xl:left-[68rem]" />
        </div>
        <div className="frame transform-3d" />
        <div>
          <div className="bg-4-bg frame-media frame-left left-[-40rem] xs:max-md:left-[-18rem] 2xl:left-[-68rem]" />
        </div>
      </div>
      <div className="frame transform-3d" />

      <div className="frame bg-frame-bg transform-3d">
        <div>
          <div className="bg-5-bg frame-media frame-left left-[38rem] xs:max-md:left-[18rem] 2xl:left-[68rem]" />
        </div>
        <div>
          <div className="bg-6-bg frame-media frame-right left-[-40rem] xs:max-md:left-[-18rem] 2xl:left-[-68rem]" />
        </div>
      </div>

      <div className="frame transform-3d" />

      <div className="frame transform-3d">
        <div className="frame-text-left ">
          <h3>Video Editing</h3>
          <p>
            DZNS helps create impactful videos, audio-visuals, motion graphics,
            as well as 3D videos/motion flyers, VFX, and other motion pictures
            that grasp the audience's attention. The video editing team at DZNS
            stives to create meaningful content that encapsulates the purpose of
            the video in striking new formats with new technologies and ideas.
          </p>
        </div>
      </div>
      <div className="frame transform-3d">
        <div>
          <video
            src="./video1.mp4"
            autoPlay
            loop
            muted
            className="frame-video frame-video-left left-[10rem] xs:max-md:left-[6rem]"
          />
        </div>
      </div>
      <div className="frame transform-3d" />
      <div className="frame transform-3d">
        <div className="frame bg-frame-bg transform-3d">
          <video
            src="./video2.mp4"
            autoPlay
            loop
            muted
            className="frame-video frame-video-right left-[5rem] xs:max-md:left-[12rem]"
          />
          <video
            src="./video4.mp4"
            autoPlay
            loop
            muted
            className="frame-video frame-video-left left-[-13rem] xs:max-md:left-[-12rem]"
          />
        </div>
      </div>

      {/* <div className="frame bg-frame-bg transform-3d">
        <div>
          <div className="bg-5-bg frame-media frame-right" />
        </div>
      </div> */}

      <div className="frame transform-3d" />
      <div className="frame transform-3d" />

      <div className="frame bg-frame-bg transform-3d">
        <div>
          <video
            src="./videoend.mp4"
            autoPlay
            loop
            muted
            className="frame-video"
          />
        </div>
      </div>

      <div className="frame transform-3d" />

      <div className="frame transform-3d">
        <div>&copy;{new Date().getFullYear()} DZNS Studio</div>
      </div>
    </>
  );
};

export default Frames;
