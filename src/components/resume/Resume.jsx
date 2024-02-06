import React, { useState } from "react";
import "./resume.css";
import Data from "./Data";
import Card from "./Card";

const Resume = () => {
  const [showAll, setShowAll] = useState(false);
  const experienceToShow = showAll
    ? Data.filter((item) => item.category === "experience")
    : Data.filter((item) => item.category === "experience").slice(0, 2);

  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Education & Experience</h2>

      <div className="resume__container">
        <div className="timeline grid">
          {Data.filter((item) => item.category === "education").map((val) => (
            <Card
              key={val.id}
              icon={val.icon}
              title={val.title}
              year={val.year}
              desc={val.desc}
            />
          ))}
        </div>

        <div className="timeline grid">
          {experienceToShow.map((val) => (
            <Card
              key={val.id}
              icon={val.icon}
              title={val.title}
              year={val.year}
              desc={val.desc}
            />
          ))}
        </div>
      </div>
      <br />
      {!showAll && (
        <button className="show-more-btn btn" onClick={() => setShowAll(true)}>
          Show More
        </button>
      )}
      {showAll && (
        <button className="show-more-btn btn" onClick={() => setShowAll(false)}>
          Show Less
        </button>
      )}
    </section>
  );
};

export default Resume;
