import React from "react";

export const Image = ({ title, largeImage, smallImage, description }) => {
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        {" "}
        <a href={largeImage} title={title} target="_blank" rel="noopener noreferrer" data-lightbox-gallery="gallery1">
          <div className="hover-text">
            <h4>{title}</h4>
            {description && <p>{description}</p>}
          </div>
          <img src={smallImage} className="img-responsive" alt={title} />{" "}
        </a>{" "}
      </div>
    </div>
  );
};
