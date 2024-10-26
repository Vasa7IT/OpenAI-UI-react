import React from "react";
import './article.css'
const Article = ({articleImg ,articleTitle,articleDate}) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={articleImg} alt="articleImg" />
      </div>
      <div className="gpt3__blog-container_article-content">
       <div className="gpt3__blog-container_article-content_heading">
        <p>{articleDate}</p>
        <h4>{articleTitle}</h4>
        </div>
        <p>Read Full Article</p>
      </div>
      
    </div>
  )
};

export default Article;
