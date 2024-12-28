import { InformationLayout } from "./InformationLayout"
import PropTypes from 'prop-types';

export const Information = ({ currentPlayer }) => {

    return  <InformationLayout 
                currentPlayer={currentPlayer}
            />
}

Information.propTypes = {
    currentPlayer: PropTypes.string
}