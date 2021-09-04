import React, { useState, useRef, CSSProperties } from "react";

type Props = {
  videoId?: string;
} & any;

const Card: React.FC<Props> = ({
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

  const leftLinkStyle = useRef<CSSProperties>({ color: linkColor });
  const rightLinkStyle = useRef<CSSProperties>({ color: linkColor });

  leftLinkStyle.current = {
    color: leftLinkHovered ? hoverLinkColor : linkColor,
  };

  rightLinkStyle.current = {
    color: rightLinkHovered ? hoverLinkColor : linkColor,
  };

  const showVideo = () => {
    (document.querySelector(`#${videoId}`)! as HTMLDivElement).style.display =
      "flex";
  };

  return (
    <div className="card-wrapper">
      <div className="card" style={{ backgroundColor }}>
        <div className="card-image" style={{ backgroundImage }}></div>
        <div className="card-text">
          <h2>{title}</h2>
          <p style={{ color: paragraphColor }}>{description} </p>
        </div>
        <div className="card-btns align-start">
          {githubLink && (
            <a
              href={githubLink}
              onMouseEnter={() => {
                setLeftLinkHovered(true);
              }}
              onMouseLeave={() => setLeftLinkHovered(false)}
              style={leftLinkStyle.current as CSSProperties}
            >
              <i className="left-icon fab fa-github"></i>
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
              style={rightLinkStyle.current as CSSProperties}
            >
              <i className="right-icon fas fa-paper-plane"></i>
            </a>
          ) : (
            <i
              onMouseEnter={() => {
                setRightLinkHovered(true);
              }}
              onMouseLeave={() => {
                setRightLinkHovered(false);
              }}
              style={rightLinkStyle.current as CSSProperties}
              onClick={showVideo}
              className={`right-icon fas fa-film video`}
            ></i>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
