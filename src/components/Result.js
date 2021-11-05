import React from "react";
import Coin from "./Coin";

const Result = ({
  coinsInfo,
  chosen,
  housePlayed,
  result,
  setChosen,
  setHousePlayed,
  setResult,
}) => {
  console.log(result);
  const playerPlay = coinsInfo.filter(
    (info) => info.containerClass === chosen
  )[0];
  return (
    <>
      <div className="result">
        <div className="picking player">
          <div className={result === "win" ? "winner active" : "winner"}></div>
          <Coin
            containerClass={playerPlay.containerClass}
            width={playerPlay.width}
            height={playerPlay.height}
            d={playerPlay.d}
            key={playerPlay.width}
          />
          <h3>You picked</h3>
        </div>
        <div className="picking house">
          <div
            className={result === "loose" ? "winner active" : "winner"}
          ></div>
          <Coin
            containerClass={housePlayed.containerClass}
            width={housePlayed.width}
            height={housePlayed.height}
            d={housePlayed.d}
            key={housePlayed.width}
          />
          <h3>The House picking</h3>
        </div>
        <div className="show-container">
          <div className="show-score">
            <h1>{result === "draw" ? "draw" : `You ${result}`}</h1>
          </div>
          <div className="btn-again">
            <button
              onClick={() => {
                setChosen("");
                setHousePlayed("");
                setResult("");
              }}
            >
              Play Again
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
