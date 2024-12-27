import { Field } from "../field/Field";
import { Information } from "../information/Information";
import PropTypes from 'prop-types';

  export const GameLayout = ({ isDraw, isGameEnded, currentPlayer, field, setField, setWhoseTurn, whoseTurn, setCurrentPlayer, winPatterns, setIsGameEnded, setIsDraw }) => {

    return (
        <>
          <Information 
              isDraw={isDraw} 
              isGameEnded={isGameEnded} 
              currentPlayer={currentPlayer} 
          />
          <Field 
              field={field} 
              setField={setField}
              currentPlayer={currentPlayer} 
              setCurrentPlayer={setCurrentPlayer}
              setWhoseTurn={setWhoseTurn}
              whoseTurn={whoseTurn}
              winPatterns={winPatterns}
              setIsGameEnded={setIsGameEnded}
              setIsDraw={setIsDraw}
          />
        </>
    );
  }

  GameLayout.propTypes = {
    isDraw: PropTypes.bool,
    isGameEnded: PropTypes.bool,
    currentPlayer: PropTypes.string,
    field: PropTypes.array,
    setField: PropTypes.func,
    setWhoseTurn: PropTypes.func,
    whoseTurn: PropTypes.bool,
    setCurrentPlayer: PropTypes.func,
    winPatterns: PropTypes.array,
  }