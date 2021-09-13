import { useReducer } from 'react';
import CartContext from './CartContext';

const defaultState = {
    items: [],
    totalAmount: 0
};

const cartItemsHandler = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + (action.item.amount * action.item.price);
        let updatedItems = state.items;
        
        const indexOfExistingItem = state.items.findIndex(item => item.id === action.item.id);
        const existingItem = state.items[indexOfExistingItem];
        
        if (existingItem) {
            const updateExistingItem = {
                ...existingItem,
                amount: existingItem.amount + action.item.amount
            };
            updatedItems[indexOfExistingItem] = updateExistingItem;
        }
        else {
            updatedItems = state.items.concat(action.item);
        }
        
        return { items: updatedItems, totalAmount: updatedTotalAmount };
    }

    if (action.type === 'REMOVE') {
        const removedItemIndex = state.items.findIndex(item => item.id === action.id);
        const removedItem = state.items[removedItemIndex];
        let updatedItems;
        const updatedTotalAmount = state.totalAmount - (removedItem.price);

        if (removedItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== removedItem.id);
            return { items: updatedItems, totalAmount: updatedTotalAmount };
        }
        else {
            const updatedRemovedItem = {...removedItem,amount: removedItem.amount - 1}
            updatedItems = state.items;
            updatedItems[removedItemIndex] = updatedRemovedItem;
            return {items: updatedItems, totalAmount: updatedTotalAmount};
        }
    }
    if (action.type === 'CLEAR') {
        return defaultState;
    }
        
    return defaultState;
};


const CartContextProvider = props => {

    const clearCartItems = () => {
        dispatchCartState({ type: 'CLEAR' });
    }

    const addItemHandler = (item) => { 
        dispatchCartState({ type: 'ADD', item: item });
    };
    
    const removeItemHandler = (id) => { 
        dispatchCartState({ type: 'REMOVE', id: id });
    };

    const [cartState, dispatchCartState] = useReducer(cartItemsHandler,defaultState);

    const cartContext = {
      items: cartState.items,
      totalAmount: cartState.totalAmount,
      addItem: addItemHandler,
      removeItem: removeItemHandler,
      clearCart: clearCartItems
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartContextProvider;