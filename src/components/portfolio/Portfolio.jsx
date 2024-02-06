import React, { useState } from "react";
import "./portfolio.css";
import Menu from "./Menu";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [visibleItems, setVisibleItems] = useState(6);

  const toggleShowAll = () => {
    setShowAll(!showAll);
    if (!showAll) {
      setVisibleItems(items.length);
    } else {
      setVisibleItems(6);
    }
  };

  const filterItem = (categoryItem) => {
    setSelectedCategory(categoryItem);
    if (categoryItem === "All") {
      setItems(Menu);
      setVisibleItems(6);
    } else {
      const updatedItems = Menu.filter((curElem) => {
        return curElem.category === categoryItem;
      });
      setItems(updatedItems);
      setVisibleItems(updatedItems.length);
    }
  };

  return (
    <section className="portfolio container section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>

      <div className="portfolio__filters">
        <span className="portfolio__item" onClick={() => filterItem("All")}>
          All
        </span>
        <span className="portfolio__item" onClick={() => filterItem("PHP")}>
          PHP
        </span>
        <span className="portfolio__item" onClick={() => filterItem("Python")}>
          Python
        </span>
      </div>

      <div className="portfolio__container grid">
        {items.slice(0, visibleItems).map((elem) => {
          const { id, image, title, category, link } = elem;
          return (
            <div className="portfolio__card" key={id}>
              <div className="portfolio__thumbnail">
                <img src={image} alt="" className="portfolio__img" />
                <div className="portfolio__mask"></div>
              </div>
              <span className="portfolio__category">{category}</span>
              <h3 className="portfolio__title">{title}</h3>
              <a href={link} className="portfolio__button" target="_blank">
                <i className="icon-link portfolio__button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>

      <br />

      {!showAll && (
        <button className="show-more-btn btn" onClick={() => toggleShowAll()}>
          Show More
        </button>
      )}
      {showAll && (
        <button className="show-more-btn btn" onClick={() => toggleShowAll()}>
          Show Less
        </button>
      )}
    </section>
  );
};

export default Portfolio;
