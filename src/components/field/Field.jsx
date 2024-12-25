import { FieldLayout } from "./FieldLayout"

export const Field = ({ field, setField, currentPlayer, setWhoseTurn, whoseTurn, setCurrentPlayer }) => {

    const onClickField = (item, index) => {
        if (item === '') {
            let copy = Object.assign(field);
            let arrIndex = index;
            copy[arrIndex] = currentPlayer;
            setField(copy);
            setWhoseTurn(!whoseTurn)

            if (whoseTurn === false) {
              setCurrentPlayer('O');
            } else if (whoseTurn === true) {
              setCurrentPlayer('X')
            }
        }
      }

      const onClickButtonStartAgain = () => {
        setField(['', '', '', '', '', '', '', '', '']);
      }

    return <FieldLayout 
                field={field}
                onClickField={onClickField}
                onClickButtonStartAgain={onClickButtonStartAgain}
           />
}