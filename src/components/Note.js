import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Note(props) {
    return (
        <div className='border-[1px] rounded-md w-64 sm:m-4 sm:float-left m-auto relativ mt-8'>
            <div className='py-2'>
                <h1 className='text-lg mx-4 text-white'>
                    {props.title}
                </h1>
            </div>

            <div className='py-4'>
                <h2 className='text-md mx-4 text-white'>
                    {props.description}
                </h2>
            </div>
            
            <div className='py-2 flex'>
                <button className='rounded-full hover:backdrop-brightness-50 h-[36px] w-[36px] ml-4'>
                    <FontAwesomeIcon icon={faPencil} className='text-gray-200 mb-[2px] m-auto h-[0.75rem] w-auto' />
                </button>
                <button className='rounded-full hover:backdrop-brightness-50 h-[36px] w-[36px] ml-2' onClick={() => { props.onDelete(props.id) }}>
                    <FontAwesomeIcon icon={faTrash} className='text-gray-200 mb-[2px] h-[0.75rem] w-auto' />
                </button>
            </div>
        </div>
    );
}
