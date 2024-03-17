import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Cards = ({handleCarts}) => {
    const [cards,setCards]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=>setCards(data))
    },[])
    return (
        <div>
            <h1>Card: {cards.length}</h1>
            <div className='gap-x-10 gap-y-5 grid grid-cols-1 lg:grid-cols-2'>
            {
                cards.map(card=><Card handleCarts={handleCarts} card={card}></Card>)
            }
            </div>
        </div>
    );
};

export default Cards;