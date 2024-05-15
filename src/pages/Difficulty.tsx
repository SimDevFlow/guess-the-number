import React, { useState } from "react";
import skull from "../assets/skull.svg";
import "../css/Dpage.css";
import SliderComponent from "../UI/Slider";
const DifficultyPage: React.FC = () => {
    const [difficulty,setDifficulty] = useState(0);
    localStorage.setItem("difficulty", difficulty.toString());
    
    const onChangeDifficulty = (value:number) => {
        setDifficulty(value);
        localStorage.setItem("difficulty", difficulty.toString());
    }
  return (
    <div className="DPage">
      <div className="DPage__container">
        <h3>Difficulté</h3>
        <button className="DPage__DSelector" onClick={()=> onChangeDifficulty(0)}>
          <img src={skull} alt="" className="DPage__img" />
        </button>
        <button className="DPage__DSelector"  onClick={()=> onChangeDifficulty(1)}>
          <img src={skull} alt="" className="DPage__img" />
          <img src={skull} alt="" className="DPage__img" />
        </button>
        <button className="DPage__DSelector"  onClick={()=> onChangeDifficulty(2)}>
          <img src={skull} alt="" className="DPage__img" />
          <img src={skull} alt="" className="DPage__img" />
          <img src={skull} alt="" className="DPage__img" />
        </button>
        <SliderComponent/>
      </div>
    </div>
  );
};

export default DifficultyPage;
