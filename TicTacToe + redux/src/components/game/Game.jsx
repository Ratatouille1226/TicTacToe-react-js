
import { GameLayout } from "./GameLayout";

export const Game = () => {

    const WIN_PATTERNS = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], //Победы по горизонтали
        [0, 3, 6], [1, 4, 7], [2, 5, 8], //Победы по вертикали
        [0, 4, 8], [2, 4, 6]             //Победы по диагонали
    ]

    return (
        <>
            <GameLayout 
                winPatterns={WIN_PATTERNS}
            />
        </>
    );
}