import styles from './fieldLayout.module.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { FieldArr } from '../../selectors';

export const FieldLayout = ({ onClickField }) => {
    const field = useSelector(FieldArr);

    return (
        <>
            <div className={styles.fieldLayout}>
                {field.map((fields, index) => (
                    <div 
                        key={index} 
                        className={styles.fields} 
                        onClick={() => onClickField(fields, index)}
                    >
                        {<span className={fields === 'X' ? styles.red : styles.green}>{fields}</span>}
                    </div>
                ))}
            </div>
        </>
    );
}

FieldLayout.propTypes = {
    onClickField: PropTypes.func,
}