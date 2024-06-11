import React from 'react'
import { Link } from 'react-router-dom'
import { PiBookOpenTextLight } from 'react-icons/pi'
import { BiUserCircle } from 'react-icons/bi'
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete,MdOutlineEdit } from 'react-icons/md';
import { BsInfoCircle } from 'react-icons/bs';
import BookSingleCard from './BookSingleCard';



const BooksCard = ({ books }) => {
    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {
                books.map((item) => (
                    <BookSingleCard key={item._id} items={item}></BookSingleCard>
                    // {/* <h2 className='text-lg font-bold'>{book.title}</h2>
                    // <p className='text-gray-600'>{book.author}</p>
                    // <p className='text-gray-600'>{book.description}</p>
                    // <div className='flex justify-between'>
                    //     <Link to={`/books/${book.id}`}>
                    //         <Button color='blue' size='small'>
                    //             <PiBookOpenTextLight size={20} />
                    //             View
                    //         </Button>
                    //     </Link>

                    // </div></div>)) */}
                ))
            }
        </div>
    )
}

export default BooksCard