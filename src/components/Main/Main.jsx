import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello,Dev</span>
          </p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Briefly summarize this concept: urban planning</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Brainstone team bonding activiies for our wirk retreat </p>
            <img src={assets.message_icon} alt="" />
          </div>{" "}
          <div className="card">
            <p>Impove the readabilty of the following code</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a prompt here" />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate information, including details about
            people, so it is important to double-check facts from reliable
            sources before relying on them.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
