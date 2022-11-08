import React from 'react';
import Shopping_card from '../components/shopping_card';
import '../styles/Shopping_cart.scss';

const Shopping_cart = () => {
    return ( 
        <main className='shopping-cart'>
            <h1>Shopping cart</h1>
            <section>
                <Shopping_card />
            </section>
        </main>
     );
}
 
export default Shopping_cart;