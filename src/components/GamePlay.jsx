import React from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import { Button } from "../styled/Button"
import { useState } from "react";
const GamePlay = () => {
    const [score, setScore] = useState(0);
    const [selectNumber, setSelectNumber] = useState();
    const [currentDice, setcurrentDice] = useState(1);
    const [error, seterror] = useState("");


    const Randomgenrator = (min, max) => {
        console.log(Math.floor(Math.random() * (max - min) + min))
        return Math.floor(Math.random() * (max - min) + min);
    }

    const randomNumber = () => {
        const number = Randomgenrator(1, 7);
        setcurrentDice((prev) => number);

        if (!selectNumber) {
            seterror("You have not selected the Number")
            return

        }
        seterror("")

        if (selectNumber == number) {
            setScore((prev) => prev + randomNumber)
        }
        else {
            setScore((prev) => prev - 2);
        }
        setSelectNumber(undefined);
    }

    return (
        <MainContent>
            <div className="topsection">
                <TotalScore score={score} />
                <NumberSelector
                    error={error}
                    seterror={seterror}
                    selectNumber={selectNumber}
                    setSelectNumber={setSelectNumber} />
            </div>
            <RoleDice currentDice={currentDice}
                randomNumber={randomNumber} />
            <div className="btns">
                <Button>Reset</Button>
                <Button>how to play</Button>
            </div>
        </MainContent>
    );
};

export default GamePlay;

const MainContent = styled.main`

    max-width: 1800px;
    justify-content: center;
    margin: auto;
    padding-top: 70px;
  .topsection{
    display: flex;
    justify-content: space-between;
  }
  .btns{
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* max-width: 220px; */
    gap: 10px;
    align-items: center;
  }
`;
