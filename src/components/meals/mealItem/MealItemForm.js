import { useRef, useState } from 'react';
import styles from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = props => {
    const [isAmountValid, setIsAmountValid] = useState(true);
    const amountRef = useRef();

    const submitFormHandler = (event) => {
        event.preventDefault();

        const enteredAmount = +(amountRef.current.value);
        if (enteredAmount < 1 || enteredAmount > 5 || enteredAmount === null) {
            setIsAmountValid(false);
            return;
        }
        props.onAddToCart(enteredAmount);
    }

    return (
        <form className={styles.form} onSubmit={submitFormHandler}>
            <Input label="Amount" ref={amountRef} input={
                {
                    id: 'amount_' + props.id,
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: "1"
                }
            } />
            <button> Add </button>
            {!isAmountValid && <p>Please enter a valid amount.</p>}
        </form>
    )
}

export default MealItemForm;