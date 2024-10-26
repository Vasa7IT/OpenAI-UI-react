import React from "react";
import "./blog.css"
import {Article} from '../../components';
import { blog1,blog2,blog3,blog4,blog5 } from '../../containers/blog/import'
const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id='blog'>
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening, We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container-groupA">
          <Article articleImg={blog1} articleTitle="GPT-3 and Open  AI is the future. Let us exlore how it is?" articleDate="Sep 26, 2021" />
        </div>
        <div className="gpt3__blog-container-groupB">
          <Article articleImg={blog2} articleTitle="GPT-3 and Open  AI is the future. Let us exlore how it is?" articleDate="Sep 26, 2021" />
          <Article articleImg={blog3} articleTitle="GPT-3 and Open  AI is the future. Let us exlore how it is?" articleDate="Sep 26, 2021" />
          <Article articleImg={blog4} articleTitle="GPT-3 and Open  AI is the future. Let us exlore how it is?" articleDate="Sep 26, 2021" />
          <Article articleImg={blog5} articleTitle="GPT-3 and Open  AI is the future. Let us exlore how it is?" articleDate="Sep 26, 2021" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
