import React, { useState, useRef, CSSProperties } from "react";
import { Project } from "../lib/types";

type Props = {
  videoId?: string;
} & Project;

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
  videoId
}) => {
  const [leftLinkHovered, setGithubHovered] = useState(false);
  const [rightLinkHovered, setWebsiteHovered] = useState(false);

  const leftLinkStyle = useRef<CSSProperties>({ color: linkColor });
  const rightLinkStyle = useRef<CSSProperties>({ color: linkColor });

  leftLinkStyle.current = {
    color: leftLinkHovered ? hoverLinkColor : linkColor
  };

  rightLinkStyle.current = {
    color: rightLinkHovered ? hoverLinkColor : linkColor
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
                setGithubHovered(true);
              }}
              onMouseLeave={() => setGithubHovered(false)}
              style={leftLinkStyle.current as CSSProperties}
            >
              <i className="macka fab fa-github"></i>
            </a>
          )}
          {websiteLink ? (
            <a
              href={websiteLink}
              onMouseEnter={() => {
                setWebsiteHovered(true);
              }}
              onMouseLeave={() => {
                setWebsiteHovered(false);
              }}
              style={rightLinkStyle.current as CSSProperties}
            >
              <i className="plane fas fa-paper-plane"></i>
            </a>
          ) : (
            <i
              onMouseEnter={() => {
                setWebsiteHovered(true);
              }}
              onMouseLeave={() => {
                setWebsiteHovered(false);
              }}
              style={rightLinkStyle.current as CSSProperties}
              onClick={() => {
                (document.querySelector(
                  `#${videoId}`
                )! as HTMLDivElement).style.display = "flex";
              }}
              className={`plane fas fa-film video`}
            ></i>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
