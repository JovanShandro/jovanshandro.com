import React, { useState, useRef, CSSProperties } from "react";
import { Project } from "../lib/types";
import ReactGa from "react-ga";

type Props = {
  id: number;
  videoId?: string;
} & Project;

const Card: React.FC<Props> = ({
  id,
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
  const [githubHovered, setGithubHovered] = useState(false);
  const [websiteHovered, setWebsiteHovered] = useState(false);

  const githubLinkStyle = useRef<CSSProperties>({ color: linkColor });
  const websiteLinkStyle = useRef<CSSProperties>({ color: linkColor });

  githubLinkStyle.current = {
    color: githubHovered ? hoverLinkColor : linkColor
  };

  websiteLinkStyle.current = {
    color: websiteHovered ? hoverLinkColor : linkColor
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
              onClick={() => {
                ReactGa.event({
                  category: "Projects",
                  action: "Hovered over github link"
                });
              }}
              onMouseEnter={() => {
                setGithubHovered(true);
              }}
              onMouseLeave={() => setGithubHovered(false)}
              style={githubLinkStyle.current as CSSProperties}
              // if blog app
              className={id === 2 ? "align-self-start" : ""}
            >
              <i className="macka fab fa-github"></i>
            </a>
          )}
          {websiteLink ? (
            <a
              href={websiteLink}
              onClick={() => {
                ReactGa.event({
                  category: "Projects",
                  action: "Hovered over website link"
                });
              }}
              onMouseEnter={() => {
                setWebsiteHovered(true);
              }}
              onMouseLeave={() => {
                setWebsiteHovered(false);
              }}
              style={websiteLinkStyle.current as CSSProperties}
            >
              <i className="plane fas fa-paper-plane"></i>
            </a>
          ) : (
            <i
              onClick={() => {
                (document.querySelector(
                  `#${videoId}`
                )! as HTMLDivElement).style.display = "flex";
                ReactGa.event({
                  category: "Projects",
                  action: `Opened video ${videoId}`
                });
              }}
              className={`plane fas fa-film video-${videoId}`}
            ></i>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
