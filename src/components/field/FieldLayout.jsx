import styles from './fieldLayout.module.css';

export const FieldLayout = ({ field, onClickField, onClickButtonStartAgain }) => {

    return (
        <>
            <div className={styles.fieldLayout}>
                {field.map((fields, index) => (
                    <div key={index} className={styles.fields} onClick={() => onClickField(fields, index)}>{fields}</div>
                ))}
            </div>
            <div className={styles.buttons}>
            <button className={styles.button} onClick={onClickButtonStartAgain}>Начать заново</button>
            </div>
        </>
    );
}