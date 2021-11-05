import React, { useState, useEffect } from "react";
import Coin from "./Coin";

const Battle = ({
  coinsInfo,
  chosen,
  setResult,
  setHousePlayed,
  mainScore,
  setMainScore,
}) => {
  const [housePlay, setHousePlay] = useState(coinsInfo[1]);
  const [count, setCount] = useState(0);
  const playerPlay = coinsInfo.filter(
    (info) => info.containerClass === chosen
  )[0];
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function getResult(home, oponent) {
    home = home.split(" ")[0];
    oponent = oponent.split(" ")[0];
    if (home === oponent) {
      setResult("draw");
    } else if (
      (home === "rock" && oponent === "scissors") ||
      (home === "scissors" && oponent === "paper") ||
      (home === "paper" && oponent === "rock")
    ) {
      setResult("win");
      setMainScore(mainScore + 1);
      localStorage.setItem("rps", mainScore + 1);
    } else {
      setResult("loose");
      setMainScore(mainScore - 1);
      localStorage.setItem("rps", mainScore - 1);
    }
  }
  useEffect(() => {
    if (count < 8) {
      const interval = setTimeout(function () {
        setHousePlay(coinsInfo[randomIntFromInterval(0, 2)]);
        setCount((count) => count + 1);
      }, 200);
      return () => clearTimeout(interval);
    } else {
      const houseSelected = coinsInfo[randomIntFromInterval(0, 2)];
      setHousePlay(houseSelected);
      setHousePlayed(houseSelected);
      getResult(playerPlay.containerClass, houseSelected.containerClass);
    }
  }, [count]);
  return (
    <div className="battle">
      <div className="picking">
        <Coin
          containerClass={playerPlay.containerClass}
          width={playerPlay.width}
          height={playerPlay.height}
          d={playerPlay.d}
          key={playerPlay.width}
        />
        <h3>You picked</h3>
      </div>
      <div className="picking">
        <Coin
          containerClass={housePlay.containerClass}
          width={housePlay.width}
          height={housePlay.height}
          d={housePlay.d}
          key={housePlay.width}
        />
        <h3>The House picking</h3>
      </div>
    </div>
  );
};

export default Battle;
