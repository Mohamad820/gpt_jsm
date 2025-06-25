import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
const Header = () => {
  return (
    <div className="gpt3__header section-padding" id="home">
      <div className="gpt3__header-content ">
        <h1 className="gradient__text">
          Let's build Something Amazing With GPT-3 Open AI
        </h1>
        <p>
          Yet Bed Any For Traveling Assisstance Indulicing Unplaceing All
          Exercise Blessing. Indulgance Way To Enjoy Alteration The Attachment.
          Party To Order Allow Asked Of.{" "}
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1600 People Requested Access A Visit In Last 24 Hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="AI" />
      </div>
    </div>
  );
};

export default Header;
