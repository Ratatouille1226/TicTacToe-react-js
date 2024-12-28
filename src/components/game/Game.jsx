import { useState } from "react";
import { GameLayout } from "./GameLayout";

export const Game = () => {
    const [whoseTurn, setWhoseTurn] = useState(true);
    const [currentPlayer, setCurrentPlayer] = useState('O');
    const [field, setField] = useState(['', '', '', '', '', '', '', '', '',]);

    const WIN_PATTERNS = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], //Победы по горизонтали
        [0, 3, 6], [1, 4, 7], [2, 5, 8], //Победы по вертикали
        [0, 4, 8], [2, 4, 6]             //Победы по диагонали
    ]

    return (
        <>
            <GameLayout 
                currentPlayer={currentPlayer}
                setCurrentPlayer={setCurrentPlayer}
                field={field}
                setField={setField}
                setWhoseTurn={setWhoseTurn}
                whoseTurn={whoseTurn}
                winPatterns={WIN_PATTERNS}
            />
        </>
    );
}