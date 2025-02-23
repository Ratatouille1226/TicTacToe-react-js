import { FieldLayout } from "./FieldLayout"
import PropTypes from 'prop-types';
import styles from './fieldLayout.module.css';

import { ResetGame, CurrentPlayer, WhoseTurn } from "../../actions";
import { Turn, Current, FieldArr } from '../../selectors';

import { useDispatch, useSelector } from "react-redux";


export const Field = ({ winPatterns }) => {

  const dispatch = useDispatch();

  const whose = useSelector(Turn);
  const currentPlayer = useSelector(Current);
  const field = useSelector(FieldArr);
  //Для установки состояния
  let turn = true;
  let player = null;

    const onClickField = (item, index) => {

        if (item === '') {
            let copy = Object.assign(field);
            let arrIndex = index;
            copy[arrIndex] = currentPlayer;
            turn = !whose;
            // console.log(turn);

            if (turn === false) {
              player = 'O';
            } else if (turn === true) {
              player = 'X'
            }
            // console.log(player)
            dispatch(WhoseTurn(turn));
            dispatch(CurrentPlayer(player));
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
        dispatch(ResetGame(['', '', '', '', '', '', '', '', '']));
      }


    return (
      <>
        {isWinO ? <h2>Победил O</h2> : isWinX ? <h2>Победил X</h2> : isDraw(field) === true ? <h2>Ничья</h2> :
                          <FieldLayout 
                          onClickField={onClickField}
                          />}
                          
             <div className={styles.buttons}>
                <button className={styles.button} onClick={onClickButtonStartAgain}>Начать заново</button>
            </div>
      </>
          )
}

Field.propTypes = {
  winPatterns: PropTypes.array,
}