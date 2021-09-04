import React, { useRef } from "react";

const VideoCard = ({ src, id }) => {
  const modal = useRef(null);
  const video = useRef(null);

  return (
    <div id={id} className="video-card-container" ref={modal}>
      <div className="video-card">
        <div
          className="closeContainer"
          onClick={() => {
            modal.current.style.display = "none";
            video.current.pause();
            video.current.currentTime = 0;
          }}
        >
          <span className="close">&times;</span>
        </div>
        <video
          width="100%"
          height="100%"
          src={src}
          ref={video}
          controls
        ></video>
      </div>
    </div>
  );
};

export default VideoCard;
