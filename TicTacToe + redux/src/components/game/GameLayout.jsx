import { Field } from "../field/Field";
import { Information } from "../information/Information";
import PropTypes from 'prop-types';

  export const GameLayout = ({ winPatterns }) => {

    return (
        <>
          <Information />
          <Field 
              winPatterns={winPatterns}
          />
        </>
    );
  }

  GameLayout.propTypes = {
    winPatterns: PropTypes.array,
  }