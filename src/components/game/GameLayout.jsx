import { Field } from "../field/Field";
import { Information } from "../information/Information";
import PropTypes from 'prop-types';

  export const GameLayout = ({ currentPlayer, field, setField, setWhoseTurn, whoseTurn, setCurrentPlayer, winPatterns }) => {

    return (
        <>
          <Information 
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
          />
        </>
    );
  }

  GameLayout.propTypes = {
    currentPlayer: PropTypes.string,
    field: PropTypes.array,
    setField: PropTypes.func,
    setWhoseTurn: PropTypes.func,
    whoseTurn: PropTypes.bool,
    setCurrentPlayer: PropTypes.func,
    winPatterns: PropTypes.array,
  }