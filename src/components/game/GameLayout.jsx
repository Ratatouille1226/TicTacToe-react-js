import { Field } from "../field/Field";
import { Information } from "../information/Information";

  export const GameLayout = ({ isDraw, isGameEnded, currentPlayer, field, setField, setWhoseTurn, whoseTurn, setCurrentPlayer }) => {

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
          />
        </>
    );
  }