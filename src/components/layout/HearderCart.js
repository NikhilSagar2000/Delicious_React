import React,{ useContext, useState, useEffect} from 'react';
import CartIcon from '../cart/CartIcon';
import styles from './headerCart.module.css';
import CartContext from '../../context/CartContext';

const HeaderCart = (props) => {
    const cartCtx = useContext(CartContext);
    const [isItemAdded, setIsItemAdded] = useState(false);

    const totalCartItems = cartCtx.items.reduce((curValue, item) => {
        return curValue + item.amount;
    },0)

    const badgeStyles = `${styles.badge} ${isItemAdded && styles.bump}`;
    const buttonStyles = `${styles.button} ${isItemAdded && styles['button-bump']}`;

    useEffect(() => {
        if (cartCtx.items.length === 0) {
            return;
        }
        setIsItemAdded(true);

        setTimeout(() => {
            setIsItemAdded(false);
        }, 300)
        
        return () => {
            setIsItemAdded(false);
        }
    },[cartCtx.items,cartCtx.totalAmount])

    return (
        <button className={buttonStyles} onClick={props.onOpenCart}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Cart</span>
            <span className={badgeStyles}>{totalCartItems}</span>
        </button>
    )
}

export default HeaderCart;