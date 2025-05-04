import React from 'react';
import './HeroCard.css'; // Import external CSS

const HeroCard = () => {
  return (
    <div className="cards">
      <div className="card red">
        <p className="tip">Hover Me</p>
        <p className="second-text">Lorem Ipsum</p>
      </div>
      <div className="card blue">
        <p className="tip">Hover Me</p>
        <p className="second-text">Lorem Ipsum</p>
      </div>
      <div className="card green">
        <p className="tip">Hover Me</p>
        <p className="second-text">Lorem Ipsum</p>
      </div>
    </div>
  );
};

export default HeroCard;
