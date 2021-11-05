import React from "react";
import Coin from "./Coin";

const Choose = ({ coinsInfo, setChosen }) => {
  return (
    <>
      <div className="choose">
        <div className="choose-triangle">
          <div className="triangle">
            <svg xmlns="http://www.w3.org/2000/svg" width="305" height="277">
              <path
                fill="none"
                stroke="#000"
                strokeWidth="15"
                d="M291.5 7.5H4.574c3.119 0 52.416 84.667 147.892 254L291.5 7.5z"
                opacity=".2"
              />
            </svg>
          </div>
          {coinsInfo.map((info) => {
            return (
              <Coin
                containerClass={info.containerClass}
                width={info.width}
                height={info.height}
                d={info.d}
                setChosen={setChosen}
                key={info.width}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Choose;
