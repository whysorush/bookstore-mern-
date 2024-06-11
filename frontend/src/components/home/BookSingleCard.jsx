import { Link } from 'react-router-dom'
import { PiBookOpenTextLight } from 'react-icons/pi'
import { BiUserCircle,BiShow } from 'react-icons/bi'
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete,MdOutlineEdit } from 'react-icons/md';
import { BsInfoCircle } from 'react-icons/bs';
import BookModel from './BookModel';
import React from 'react';
const BookSingleCard = ({items}) => {
    const [showModel,setShowModel] = React.useState(false);

  return (
            <div className='border-2 border-gray-500 rounded-lg px-4py-2 m-4 relative hover:shadow-xl'>
                <h2 className='absolute top-1 right-2 px-1 py-1 bg-red-300 rounded-lg'>
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
                <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
                    <BiShow className='text-3xl text-blue-800 hover:text-black cursor-pointer'
                    onClick={()=>setShowModel(true)}>

                    </BiShow>
                    <Link to={`/book/details/${items._id}`}>
                        <BsInfoCircle className='text-2xl text-green-800'></BsInfoCircle>
                    </Link>
                    <Link to={`/book/edit/${items._id}`}>
                        <MdOutlineEdit className='text-2xl text-yellow-600'></MdOutlineEdit>
                    </Link>
                    <Link to={`/book/delete/${items._id}`}>
                        <MdOutlineDelete className='text-2xl text-red-600'></MdOutlineDelete>
                    </Link>
                </div>
            {showModel && (<BookModel items={items} onClose={(()=>setShowModel(false))}></BookModel>)}
              {/* <h2 className='text-lg font-bold'>{book.title}</h2>
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
        
    
</div>
  )
}

export default BookSingleCard