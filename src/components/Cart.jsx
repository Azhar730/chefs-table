import React from 'react';

const Cart = ({cart,idx,handleDelete}) => {
    const {name,time,calories,id} = cart
    return (
        <div className='flex items-center bg-[#FFF] p-4 rounded-xl mt-5'>
                <p>{idx+1}</p>
                <table className='w-64 ml-4'>
                    <tbody>
                        <tr>
                            <td className='w-28'>{name}</td>
                            <td>{time}<br/>minutes</td>
                            <td className='ml-8 flex'>{calories}<br/>calories</td>
                        </tr>
                    </tbody>
                </table>
                <div className='ml-12'>
                    <button onClick={()=>handleDelete(id,cart,time,calories)} className='btn btn-error'>Preparing</button>
                </div>
        </div>
    );
};

export default Cart;