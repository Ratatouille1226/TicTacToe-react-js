import { useSelector } from 'react-redux';
import { Current } from '../../selectors';

export const InformationLayout = () => {
    const currentPlayer = useSelector(Current);
    return (
        <>
            <h2>Ходит: {currentPlayer}</h2>
        </>
    );
}
