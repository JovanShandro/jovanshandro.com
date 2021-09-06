import React, { useState, useRef } from "react";
import styles from "./Card.module.css";

const Card = ({
  title,
  description,
  githubLink,
  websiteLink,
  backgroundColor,
  paragraphColor,
  linkColor,
  hoverLinkColor,
  backgroundImage,
  videoId,
}) => {
  const [leftLinkHovered, setLeftLinkHovered] = useState(false);
  const [rightLinkHovered, setRightLinkHovered] = useState(false);

  const leftLinkStyle = useRef({ color: linkColor });
  const rightLinkStyle = useRef({ color: linkColor });

  leftLinkStyle.current = {
    color: leftLinkHovered ? hoverLinkColor : linkColor,
  };

  rightLinkStyle.current = {
    color: rightLinkHovered ? hoverLinkColor : linkColor,
  };

  const showVideo = () => {
    document.querySelector(`#${videoId}`).style.display = "flex";
  };

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card} style={{ backgroundColor }}>
        <div className={styles.cardImage} style={{ backgroundImage }}></div>
        <div className={styles.cardText}>
          <h2>{title}</h2>
          <p style={{ color: paragraphColor }}>{description} </p>
        </div>
        <div className={`${styles.cardBtns} align-start`}>
          {githubLink && (
            <a
              href={githubLink}
              onMouseEnter={() => {
                setLeftLinkHovered(true);
              }}
              onMouseLeave={() => setLeftLinkHovered(false)}
              style={leftLinkStyle.current}
            >
              <i className={` ${styles.leftIcon} fab fa-github`}></i>
            </a>
          )}
          {websiteLink ? (
            <a
              href={websiteLink}
              onMouseEnter={() => {
                setRightLinkHovered(true);
              }}
              onMouseLeave={() => {
                setRightLinkHovered(false);
              }}
              style={rightLinkStyle.current}
            >
              <i className={`${styles.rightIcon} fas fa-paper-plane `}></i>
            </a>
          ) : (
            <i
              onMouseEnter={() => {
                setRightLinkHovered(true);
              }}
              onMouseLeave={() => {
                setRightLinkHovered(false);
              }}
              style={rightLinkStyle.current}
              onClick={showVideo}
              className={`${styles.rightIcon} fas fa-film ${styles.videoIcon} `}
            ></i>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
