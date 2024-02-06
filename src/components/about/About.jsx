import React from "react";
import "./about.css";
import AboutMe from "../../assets/wibi.png";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container">
        <img src={AboutMe} alt="" className="about__img" />

        <div className="about__data">
          <div className="about__info">
            <p className="about__description">
              Hello, I am Wibiati Sekar Kinasih, a web developer from Madiun,
              Indonesia, with extensive experience in designing and building
              websites. My passion for creating innovative and user-friendly web
              solutions drives me to continuously learn and adapt to the latest
              technologies in the field.{" "}
            </p>
            <a href="" className="btn">
              Download CV
            </a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Analysis</h3>
                <span className="skills__numbers ">85%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage analysis"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__numbers ">85%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX Design</h3>
                <span className="skills__numbers">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
