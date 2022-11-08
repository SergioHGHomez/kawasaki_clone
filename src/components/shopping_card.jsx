import React from 'react';
import remove_icon from '../assets/icons/close.png';
import '../styles/Shopping_card.scss'

const Shopping_card = () => {
    return (
        <article className='shopping-card'>
            <img src="https://www.kawasaki.com/content/uploads/accessories/K0094070BKNS/K0094070BKNS-131965331024806589.jpg?w=800&404=~/content/images/404.jpg" alt="hat" />
            <h2>kawasaki Racing hat</h2>
            <p>item# k003-4107-844s</p>
            <label htmlFor="">QTY:</label>
            <div className='quantitiContainer'>
                <select name="" id="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button>UPDATE</button>
            </div>
            <p className='shopping-card_price'>
                $38.95
            </p>
            <button className='shopping-card_remove'>
                <img src={remove_icon} alt="remove icon" />
                <p>REMOVE</p>
            </button>
        </article>
    );
}

export default Shopping_card;