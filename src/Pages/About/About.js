import React from "react";
import "./About.css";
import image from "../../Assets/photos.jpg";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src={image}
                alt="profile_pi"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>I am Y.Maheswari currently in my final year at KITS College, with a strong interest in Data Structures and Algorithms (DSA) as well
                 as web development projects using the MERN (MongoDB, Express.js, React.js, Node.js) stack. I am passionate about building
                  efficient solutions and continuously working to improve my problem-solving skills through DSA practice. Alongside, I am also
                   exploring real-world 
                applications by working on MERN stack projects to strengthen my development experience.
                I am also very intrested to collaboate with Tech Experts and learn the skills to evaluate my self strong at Tech .
            
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;