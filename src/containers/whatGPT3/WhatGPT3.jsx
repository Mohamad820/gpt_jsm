import React from "react";
import "./whatGPT3.css";
import { Feature } from "../../components";

const WhatGPT3 = () => {
  let array = [
    {
      title: "Chatbot",
      text: "We so opinion friends me message as delight. Whole front do of plate heard oh ought.",
    },
    {
      title: "Knowledgebase",
      text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b ",
    },
    {
      title: "Education",
      text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
    },
  ];
  return (
    <div className="gpt3__whatgpt3" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What Is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The Possibilities Are Beyond Your Imagination.
        </h1>
        <p>Explore The Library.</p>
      </div>
      <div className="gpt__whatgpt3-container">
        {array.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default WhatGPT3;
