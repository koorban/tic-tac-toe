import React, { useState, createContext } from 'react';
import { score } from './score';

export const TicTacContext = createContext();

export default function ContextTicTacToe({ children }) {

    const [scoreBoard, setScoreBoard] = useState(score)

    const updateScore = (boxId, inputValue) => {
        const newScore = [...scoreBoard]
        newScore[boxId].value = inputValue;
        setScoreBoard(newScore);
    };

    return (
        <TicTacContext.Provider value={{scoreBoard, updateScore }}>
            {children}
        </TicTacContext.Provider>
    )
};
