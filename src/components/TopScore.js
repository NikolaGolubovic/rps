import React from "react";

const TopScore = ({ mainScore }) => {
  return (
    <div className="score">
      <div className="logo">
        <h1>Rock</h1>
        <h1>Paper</h1>
        <h1>Scissors</h1>
      </div>
      <div className="score-table">
        <p>score</p>
        <h1 className="score-result">{mainScore}</h1>
      </div>
    </div>
  );
};

export default TopScore;
