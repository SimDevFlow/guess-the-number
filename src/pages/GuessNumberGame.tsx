import React, { useState, useEffect, ChangeEvent } from "react";
import "../css/GuessNumberGame.css";
import Popup from "../UI/Popup";

const GuessNumberGame: React.FC = () => {
  
  const [answer, setAnswer] = useState<number>(0);
  const [noOfGuesses, setNoOfGuesses] = useState<number>(0);
  const [guessedNumsArr, setGuessedNumsArr] = useState<number[]>([]);
  const [userGuess, setUserGuess] = useState<string>("");
  const [hint, setHint] = useState<string>("");
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  let interval:number = parseInt(localStorage.getItem('invervalValue') || '100')
  let limite:number = Math.ceil(Math.log2(interval)) + 1
  
  
  const play = () => {
    const guess = parseInt(userGuess, 10);
    if (isNaN(guess) || guess < 1 || guess > interval) {
      alert("Entrez un nombre valide dans l'intervalle.");
      return;
    }
    
    const newGuessedNumsArr = [...guessedNumsArr, guess];
    setGuessedNumsArr(newGuessedNumsArr);
    setNoOfGuesses(noOfGuesses + 1);
    if (guess !== answer) {
      if (noOfGuesses === limite) {
        setHint(`Désolé, vous avez perdu ! Le nombre était ${answer}.`);
        setGameOver(true);
      } else {
        if (guess < answer) {
          setHint("Vous êtes en dessous de la réponse");
        } else {
          setHint("Vous êtes au-dessus de la réponse");
        }
        setTimeout(() => {
          setHintClass("error");
        }, 10);
      }
    } else {
      setHint(
        `Bravo ! Le nombre était ${answer}. Vous l'avez trouvé en ${noOfGuesses} essai(s).`
      );
      
      setGameOver(true);
      setHintClass("success");
    }
  };
  
  const handleInputChange = (text: string) => {
    setUserName(text);
  };
  

  const restartGame = () => {
    setAnswer(Math.floor(Math.random() * limite) + 1);
    setNoOfGuesses(0);
    setGuessedNumsArr([]);
    setUserGuess("");
    setHint("");
    setGameOver(false);
  };

  useEffect(() => {
    restartGame();
  }, []);

  const setHintClass = (className: string) => {
    const hintElement = document.getElementById("hint");
    if (hintElement) {
      hintElement.classList.remove("error", "success");
      hintElement.classList.add(className);
    }
  };

  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    setShowPopup(true);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  return showPopup ? (
    <Popup onClose={handleClose} onInputChange={handleInputChange}>
      <p style={{ margin: 0 }}>Entrer votre nom: </p>
    </Popup>
  ) : (
    <div className="container">
      <div id="game">
        <h3>
          Hey {userName}! Peux-tu deviner mon nombre ?<br />
          (1-{interval})
        </h3>
        <div className="input-wrapper">
          <input
            type="number"
            placeholder="00"
            value={userGuess}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUserGuess(e.target.value)
            }
          />
          <button onClick={play}>Guess</button>
        </div>
        <p id="no-of-guesses">Nombre d'essais: {noOfGuesses}</p>
        <p id="guessed-nums">Vos propositions: {guessedNumsArr.join(", ")}</p>
      </div>
      <button
        id="restart"
        onClick={restartGame}
        style={{ display: gameOver ? "block" : "none" }}
      >
        Nouvelle Partie
      </button>
      <div className="result">
        <div id="hint">{hint}</div>
      </div>
    </div>
  );
};

export default GuessNumberGame;
