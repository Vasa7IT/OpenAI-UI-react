import React from "react";
import { google, slack, dropbox, shopify } from './import'
import './brand.css'
const Brand = () => {
  return (
    <div className="trapdoor">
      <div className="top door"></div>
      <div className="bottom door"></div>
      <div className="gpt3__brand section__padding">
      <div>
       <img src={google} alt="google" />
      </div>
      <div>
       <img src={slack} alt="slack" />
      </div>
      <div>
       <img src={dropbox} alt="dropbox" />
      </div>
      <div>
       <img src={shopify} alt="shopify" />
      </div>
    </div>
  </div>
  );
};

export default Brand;
