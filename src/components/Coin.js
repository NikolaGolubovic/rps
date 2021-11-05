import React from "react";

const Coin = ({ containerClass, width, height, d, setChosen }) => {
  return (
    <>
      <div
        className={containerClass}
        onClick={(e) => setChosen && setChosen(e.currentTarget.className)}
      >
        <div className="coin-inner">
          <div className="coin-background">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={width}
              height={height}
            >
              <path fill="#3B4262" d={d} />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coin;
