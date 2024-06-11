import React, { useEffect } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
// import { AiOutLineEdit } from 'react-icons/ai';
import { MdOutlineEdit, MdOutlineDelete, MdOutlineAddBox } from 'react-icons/md';
import { BsInfoCircle } from 'react-icons/bs';
import BooksCard from '../components/home/BooksCard';
import BooksTable from '../components/home/BooksTable';

const Home = () => {
  const [books, setBook] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [showType, setShowType] = React.useState('table')
  React.useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((res) => {
        setBook(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <div className="p-4">
      <div className='flex justify-center items-center gap-x-4'>
        <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('table')}
        >
          table
        </button>
        </div>
        <div className='flex justify-center items-center gap-x-4'>
          <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
            onClick={() => setShowType('card')}
          >
            card
          </button>
        </div>
        <div className='flex justify-between items-center'>
          <h1 className='text-3xl my-8'>Book list</h1>
          <Link to='/book/create'>
            <MdOutlineAddBox className='text-sky-800 text-4xl' />
          </Link>
        </div>
        {/* {JSON.stringify(books)} */}
        {loading ? (<Spinner />) : showType == 'table' ? (
          <BooksTable books={books}></BooksTable>):(<BooksCard books={books}> </BooksCard>)
        }

      </div>
      )
}

      export default Home