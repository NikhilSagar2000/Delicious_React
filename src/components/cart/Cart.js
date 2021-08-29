import { useContext } from 'react';
import Modal from '../UI/Modal';
import styles from './Cart.module.css';
import CartContext from '../../context/CartContext';
import CartItem from './CartItem';

const Cart = props => {
    const cartCtx = useContext(CartContext);
    // console.log(cartCtx.items.length);
    const cartItemsCountChecker = cartCtx.items.length > 0;

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item,amount: 1});
    }
    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    }

    const cartItems = (
        <ul className={styles['cart-items']}>
            {cartCtx.items.map(item => (
                <CartItem 
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    amount={item.amount}
                    onAdd={cartItemAddHandler.bind(null,item)}
                    onRemove={cartItemRemoveHandler.bind(null,item.id)}
                />
            ))}
        </ul>
    )
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    return (
    <Modal onCloseCart={props.onCloseCart}>
        {cartItems}
        <div className={styles.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={styles.actions}>
          <button className={styles["button--alt"]} onClick={props.onCloseCart}>Close</button>
          {cartItemsCountChecker && <button className={styles.button}>Order</button>}
        </div>
    </Modal>
    );
}

export default Cart;