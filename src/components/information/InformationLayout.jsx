
export const InformationLayout = ({ isDraw, isGameEnded, currentPlayer }) => {

    return (
        <>
            {isDraw ? <h2>Ничья</h2> : null}
            {isDraw === false && isGameEnded ? <h2>Победа: {currentPlayer}</h2> : null}
            {isDraw === false && isGameEnded === false ? <h2>Ходит: {currentPlayer}</h2> : null}
        </>
    );
}