import { FieldLayout } from "./FieldLayout"
import PropTypes from 'prop-types';
import styles from './fieldLayout.module.css';

export const Field = ({ field, setField, currentPlayer, setWhoseTurn, whoseTurn, setCurrentPlayer, winPatterns, setIsGameEnded, setIsDraw }) => {

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

      const arrO = [];
      const arrX = [];
      let isElementO;
      let isElementX;

      field.map((item, index) => {
        
        if (item === 'X') {
         arrX.push(index);
        } if (item === 'O') {
          arrO.push(index);
        }
        
      });
      
      for (let i = 0; i <= winPatterns.length; i++) {
        isElementO = winPatterns.some(number => number.every(index => arrO.includes(index))); 
        isElementX = winPatterns.some(number => number.every(index => arrX.includes(index))); 
      }

      if (isElementO || isElementX) {
        setIsGameEnded(true);
      }

      const onClickButtonStartAgain = () => {
        setField(['', '', '', '', '', '', '', '', '']);
      }

    return (
      <>
        {isElementO ? 'Победил O' : null}
        {isElementX ? 'Победил X' : null}
          <FieldLayout 
                field={field}
                onClickField={onClickField}
                onClickButtonStartAgain={onClickButtonStartAgain}
                currentPlayer={currentPlayer}
           />
             <div className={styles.buttons}>
                <button className={styles.button} onClick={onClickButtonStartAgain}>Начать заново</button>
            </div>
      </>
          )
}

Field.propTypes = {
  field: PropTypes.array,
  setField: PropTypes.func,
  currentPlayer: PropTypes.string,
  setWhoseTurn: PropTypes.func,
  whoseTurn: PropTypes.bool,
  setCurrentPlayer: PropTypes.func,
  winPatterns: PropTypes.array,
}