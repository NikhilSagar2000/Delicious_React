import { useContext } from 'react';
import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../context/CartContext';

const MealItem = props => {
    const cartCtx = useContext(CartContext);

    const price = `₹${props.price.toFixed(2)}`;

    const addToCartHandler = (enteredAmount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            price: props.price,
            amount: enteredAmount
        })
    };

    return (
        <li className={styles.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
            </div>
        </li>
    )
}

export default MealItem;