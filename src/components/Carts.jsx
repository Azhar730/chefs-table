import React from 'react';
import Cart from './Cart';
import Cook from './Cook';

const Carts = ({handleDelete,carts,cook,totalTime,totalCalories}) => {
    return (
        <div className='bg-gray-200 ml-16 w-[480px] lg:w-[514px] mt-6 rounded-2xl p-6'>
            <div>
                <div>
                    <h1 className="border-b-2 border-gray-400 text-center text-xl font-bold">Want to cook: {carts.length}</h1>
                    <table className='w-[350px] mt-6'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                    </table>
                    {
                        carts.map((cart,idx)=><Cart handleDelete={handleDelete} idx={idx} cart={cart}></Cart>)
                    }
                </div>
            </div>
            <div className='mt-12'>
                <div>
                    <h1 className="border-b-2 border-gray-400 text-center text-xl font-bold">Currently cooking: {cook.length}</h1>
                    <table className='w-[350px] mt-6'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                    </table>
                    {
                        cook.map((i,idx)=><Cook idx={idx} i={i}></Cook>)
                    }
                </div>
            </div>
            <div className='flex mt-6 ml-32'>
                <h3 className='font-medium'>Total Time =<br /> <span className='text-[#e71e28]'>{totalTime}</span> minutes </h3>
                <h3 className='ml-6 font-medium'>Total Calories =<br /><span className='text-[#e71e28]'>{totalCalories}</span> calories </h3>      
            </div>
        </div>
    );
};

export default Carts;