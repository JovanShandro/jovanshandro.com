import React, { useState, useRef, CSSProperties } from "react";
import { Project } from "../lib/types";

type Props = {
  id: number;
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
  backgroundImage
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
        <div
          className={
            // if blog
            id === 2
              ? "card-btns"
              : // If sorting visualiser
              id === 3
              ? "card-btns mt-xs align-start"
              : "card-btns align-start"
          }
        >
          {githubLink && (
            <a
              href={githubLink}
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
              //TODO add real function
              onClick={() => "showVideo()"}
              className="plane fas fa-film"
            ></i>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
