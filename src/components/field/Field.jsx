import { FieldLayout } from "./FieldLayout"
import PropTypes from 'prop-types';
import styles from './fieldLayout.module.css';

export const Field = ({ field, setField, currentPlayer, setWhoseTurn, whoseTurn, setCurrentPlayer, winPatterns }) => {

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

      const indexO = [];
      const indexX = [];
      let isWinO; //Для совпадений вариантов побед O
      let isWinX; //Для совпадений вариантов побед X
      const isDraw = arr => arr.every(Boolean); //Ничья если все поля true но нет совпадений на победу

      field.map((item, index) => {
        
        if (item === 'X') {
         indexX.push(index);
        } if (item === 'O') {
          indexO.push(index);
        }
        
      });
      
      for (let i = 0; i <= winPatterns.length; i++) {
        isWinO = winPatterns.some(number => number.every(index => indexO.includes(index))); 
        isWinX = winPatterns.some(number => number.every(index => indexX.includes(index))); 
      }

      const onClickButtonStartAgain = () => {
        setField(['', '', '', '', '', '', '', '', '']);
      }


    return (
      <>
        {isWinO ? <h2>Победил O</h2> : isWinX ? <h2>Победил X</h2> : isDraw(field) === true ? <h2>Ничья</h2> :
                          <FieldLayout 
                          field={field}
                          onClickField={onClickField}
                          onClickButtonStartAgain={onClickButtonStartAgain}
                          currentPlayer={currentPlayer}
                          />}
                          
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