import React from "react";
import Article from "../../components/article/Article";
import "./blog.css";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Blog = () => {
  return (
    <div className="gpt3__blog" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A Lot Is Happening, We Are Blogging About It
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={blog01}
            date="Sep 26, 2021"
            title="GPT-3 & Open AI Is The Future. Let Us Explore How It Us?"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="Oct 20, 2022"
            title="GPT-3 & Open AI Is The Future. Let Us Explore How It Us?"
          />
          <Article
            imgUrl={blog03}
            date="Aug 28, 2020"
            title="GPT-3 & Open AI Is The Future. Let Us Explore How It Us?"
          />
          <Article
            imgUrl={blog04}
            date="Nov 10, 2019"
            title="GPT-3 & Open AI Is The Future. Let Us Explore How It Us?"
          />
          <Article
            imgUrl={blog05}
            date="Feb 18, 2024"
            title="GPT-3 & Open AI Is The Future. Let Us Explore How It Us?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
