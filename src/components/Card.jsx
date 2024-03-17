import React from 'react';
import { ToastContainer } from 'react-toastify';

const Card = ({card,handleCarts}) => {
    const {image,name,description,ingredients,time,calories} = card
    return (
            <div class="card h-[760px] w-96 bg-gray-200 shadow-xl">
                <figure className='p-6'><img className=' rounded-xl' src={image} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p className='border-b-2 border-gray-400'>{description}</p>
                    <h3 className="text-lg font-medium">Ingredients: {ingredients.length}</h3>
                    <div className='border-b-2 border-gray-400'>
                    {
                        ingredients.map(item=><li>{item}</li>)
                    }
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <img src="../../images/watch.png" alt="" />
                            <p>{time} minutes</p>
                        </div>
                        <div className='flex'>
                            <img src="../../images/energy.png" alt="" />
                            <p>{calories} calories</p>
                        </div>
                    </div>
                    <div class="card-actions justify-end">
                        <button onClick={()=>handleCarts(card)} class="btn btn-error text-[#FFF] font-medium">Want to Cook</button>
                        <ToastContainer />
                    </div>
                </div>
            </div>
    );
};

export default Card