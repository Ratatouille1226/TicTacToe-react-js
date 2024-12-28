import PropTypes from 'prop-types';

export const InformationLayout = ({ currentPlayer }) => {

    return (
        <>
            <h2>Ходит: {currentPlayer}</h2>
        </>
    );
}

InformationLayout.propTypes = {
    currentPlayer: PropTypes.string
}