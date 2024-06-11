import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const BookModel = ({ items, onClose }) => {
    return (
        <div className='fixed bg-black bg-opacity-60 top-0 bottom-0 left-0 right-0 z-50 flrx justify-center items-center'
            onClick={onClose}>BookModel
            <div onClick={(event) => event.stopPropagation()}
                className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'>

                <AiOutlineClose className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
                    onClick={onClose}
                ></AiOutlineClose>
                <h2 className='w-fit top-1 right-2 px-1 py-1 bg-red-300 rounded-lg'>
                    {items.publishYear}
                </h2>
                <h4 className='my-2 text-grey-500'>
                    {items._id}
                </h4>
                <div className='flex justify-start items-center gap-x-2'>
                    <PiBookOpenTextLight className='text-red-300 text-2xl'></PiBookOpenTextLight>

                    <h2 className='my-1'>{items.title}</h2>
                </div>
                <div className='flex justify-start items-center gap-x-2'>
                    <BiUserCircle className='text-red-300 text-2xl'></BiUserCircle>
                    <h2 className='my-1'>{items.author}</h2>
                </div>
            </div>
        </div>
    )
}

export default BookModel