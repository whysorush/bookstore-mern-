import React from 'react'
import { MdOutlineEdit, MdOutlineDelete, MdOutlineAddBox } from 'react-icons/md';
import { BsInfoCircle } from 'react-icons/bs';
// import BooksCard from '../components/home/BooksCard';
import { Link } from 'react-router-dom';

const BooksTable = ({books}) => {
  return (<>
    <table className='w-full border-separate border-spacing-2'>
    <thead>
      <tr>
        <th className='border border-slate-600 rounder-md text-center'>No</th>
        <th className='border border-slate-600 rounder-md text-center'>Title</th>
        <th className='border border-slate-600 rounder-md text-center max-md:hidden'>Author</th>
        <th className='border border-slate-600 rounder-md text-center max-md:hidden'>Publish Year</th>
        <th className='border border-slate-600 rounder-md text-center'>Oprations</th>

      </tr>
    </thead>
    <tbody>
      {
        books.map((book, index) => (
          <tr key={book.id} className='h-8'>
            <td className='border border-slate-600 rounder-md text-center'>
              {index+1}
            </td>
            <td className='border border-slate-600 rounder-md text-center'>
              {book.title}
            </td>
            <td className='border border-slate-600 rounder-md text-center max-md:hidden'>
              {book.author}
            </td>
            <td className='border border-slate-600 rounder-md text-center max-md:hidden'>
              {book.publishYear}
            </td>
            <td className='border border-slate-600 rounder-md text-center max-md:hidden'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/book/details/${book._id}`}>
                  <BsInfoCircle className='text-2xl text-green-800'></BsInfoCircle>
                </Link>
                <Link to={`/book/edit/${book._id}`}>
                  <MdOutlineEdit className='text-2xl text-yellow-600'></MdOutlineEdit>
                </Link>
                <Link to={`/book/delete/${book._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-600'></MdOutlineDelete>
                </Link>

              </div>            
            </td>
          </tr>
        ))
      }
    </tbody>
  </table>
  </>
  )
}

export default BooksTable