import React, { useRef } from "react";

interface Props {
  src: string;
}

const VideoCard: React.FC<Props> = ({ src }) => {
  const modal = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);

  return (
    <div className="video-card-container" ref={modal}>
      <div
        className="closeContainer"
        onClick={() => {
          modal.current!.style.display = "none";
          video.current!.pause();
          video.current!.currentTime = 0;
        }}
      >
        <span className="close">&times;</span>
      </div>
      <div className="video-card">
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
