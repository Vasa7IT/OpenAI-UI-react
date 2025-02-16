import React from "react";
import "./possiblity.css";
import possibilityImg from "../../asserts/Feature Image.png";
const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image tilting-card-content">
        <img src={possibilityImg} alt="possiblityImg" />
        <div class="mouse-position-tracker">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4 style={{ color: "var(--color-subtext)" }}>
          Request Early Access to Get Started
        </h4>
      </div>
    </div>
  );
};

export default Possibility;
