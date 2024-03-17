import React from 'react';

const Cook = ({i,idx}) => {
    const {name,time,calories} = i
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
        </div>
    );
};

export default Cook;