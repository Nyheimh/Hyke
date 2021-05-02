import "./About.css";
import hyker from "../../assets/nyheim-hiker.jpeg"
import React from "react";

export default function About() {
  return (
    <div>
      {/* <Layout currentUser={currentUser}> */}
        <div className="about-form">
        <img className="about-image" src={hyker} alt="about-hyker" />
          <div className="about-detail">
            <div className="info-container">
              <div className="about-title">About Hyke</div>
            <div className="about-me"> Hyke was derived from the passion of hiking. The ability to be apart of nature and without the use of technology allows my mind to relax and learn more about myself and surroundings.
              Nature is essential and allows one to be relieved from the everyday life that we are accustomed to. Join me in going on hikes when the weather is beautiful and enjoy the time away from the daily life. </div>
            </div>
            </div>
          </div>
        </div>
      // </Layout>
  );
}
