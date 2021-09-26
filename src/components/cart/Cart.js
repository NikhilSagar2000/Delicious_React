import React,{ useContext,useState } from 'react';
import Modal from '../UI/Modal';
import styles from './Cart.module.css';
import CartContext from '../../context/CartContext';
import CartItem from './CartItem';
import Checkout from '../checkout/Checkout';

const Cart = props => {
    const [isCheckingOut, setIsCheckingOut] = useState(false);
    const [isConfirmingOrder, setIsConfirmingOrder] = useState(false);
    const [hasSuccessfullyordered, setHasSuccessfullyOrdered] = useState(false);

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
    const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;

    const orderHandler = () => {
        setIsCheckingOut(true);
  }
  
    const formSubmissionHandler = async (userData) => {
        setIsConfirmingOrder(true);
        await fetch(
          "https://delicious-react-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",
          {
            method: "POST",
            body: JSON.stringify({
              user: userData,
              items: cartCtx.items,
              total: totalAmount,
            }),
          }
        );
        setIsConfirmingOrder(false);
        setHasSuccessfullyOrdered(true);
        cartCtx.clearCart();
    }
    const modalContent = (
      <React.Fragment>
        {!isCheckingOut && cartItems}
        <div className={styles.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        {!isCheckingOut && (
          <div className={styles.actions}>
            <button
              className={styles["button--alt"]}
              onClick={props.onCloseCart}
            >
              Close
            </button>
            {cartItemsCountChecker && (
              <button className={styles.button} onClick={orderHandler}>
                Order
              </button>
            )}
          </div>
        )}
        {isCheckingOut && (
          <Checkout
            onConfirm={formSubmissionHandler}
            onCancel={props.onCloseCart}
          />
        )}
      </React.Fragment>
    );

    const orderingContent = <p>Sending Order Request...</p>;

    const successfulOrderContent = (
        <React.Fragment>
            <p>Order Successful</p>
            <div className={styles.actions}>
                <button
                    className={styles["button--alt"]}
                    onClick={props.onCloseCart}
                >Close</button>
            </div>
        </React.Fragment>
    )

    return (
    <Modal onCloseCart={props.onCloseCart}>
        {!isConfirmingOrder && !hasSuccessfullyordered && modalContent}
        {isConfirmingOrder && orderingContent}
        {hasSuccessfullyordered && successfulOrderContent}
    </Modal>
    );
}

export default Cart;