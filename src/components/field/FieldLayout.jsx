import styles from './fieldLayout.module.css';
import PropTypes from 'prop-types';

export const FieldLayout = ({ field, onClickField }) => {

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
    field: PropTypes.array,
    onClickField: PropTypes.func,
}