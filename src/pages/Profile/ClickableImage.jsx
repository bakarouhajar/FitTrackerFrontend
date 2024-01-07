import React from "react";
import { Img } from "components"; // Adjust the import based on your project structure

const ClickableImage = ({ onClick, imageSrc, altText, containerClassName, imageClassName }) => (
  <div
    className={containerClassName}
    onClick={onClick}
    style={{ cursor: "pointer" }}
  >
    <Img className={imageClassName} src={imageSrc} alt={altText} />
  </div>
);

export default ClickableImage;