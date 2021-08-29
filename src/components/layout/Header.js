import React from 'react';
import HeaderCart from './HearderCart';
import FoodImage from '../../assets/meals.jpg';
import styles from './header.module.css';

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={styles.header}>
                <h2>Delicious React</h2>
                <HeaderCart onOpenCart={props.onOpenCart}/>
            </header>
            <div className={styles['main-image']}>
                <img src={FoodImage} alt="Delicious food." /> 
            </div>
     </React.Fragment>
    )
}

export default Header;