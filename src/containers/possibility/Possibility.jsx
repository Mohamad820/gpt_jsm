import React from "react";

import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => {
  return (
    <div className="gpt3__possibility" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access To Get Started</h4>
        <h1 className="gradient__text">
          The Possibility Are Beyond Your Imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4>Request Early Access To Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
