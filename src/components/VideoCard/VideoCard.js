import React, { useRef } from "react";
import styles from "./VideoCard.module.css";

const VideoCard = ({ src, id }) => {
  const modal = useRef(null);
  const video = useRef(null);

  return (
    <div id={id} className={styles.videoCardContainer} ref={modal}>
      <div className={styles.videoCard}>
        <div
          className={styles.closeContainer}
          onClick={() => {
            modal.current.style.display = "none";
            video.current.pause();
            video.current.currentTime = 0;
          }}
        >
          <span className={styles.close}>&times;</span>
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
