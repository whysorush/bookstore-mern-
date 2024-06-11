import React from 'react';
import BackButton from '../components/BackButton';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Spinner from '../components/Spinner';
import { enqueueSnackbar, useSnackbar } from 'notistack';

const CreateBook = () => {
    const [title, setTitle] = React.useState('');
    const [author, setAuthor] = React.useState('');
    const [publishYear, setPublishYear] = React.useState('');
    const [loading, SetLoading] = React.useState(false);
    const navigate = useNavigate();
    const { enqueueSnackbar} = useSnackbar();
    const handleSaveBooks = () => {
        const data = {
            title,
            author,
            publishYear,
        };
        SetLoading(true)
        axios
            .post('http://localhost:5555/books', data)
            .then((res) => {
                SetLoading(false)
                enqueueSnackbar('Book created successfully',{variant:'success'})
                navigate('/');
            })
            .catch((err) => {
                alert("error check console")
                SetLoading(false)
                enqueueSnackbar('Error',{variant:'error'});
                console.log(err);
            })
    }
    return (
        <div className='p-4'>CreateBook
            <BackButton></BackButton>
            <h1 className='text-3xl my-4'>Create book</h1>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-grey-500'>Title</label>
                    <input type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='border-2 border-grey-500 px-4 py-2 w-full'>

                    </input>
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-grey-500'>Author</label>
                    <input type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className='border-2 border-grey-500 px-4 py-2 w-full'>

                    </input>
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-grey-500'>Publish year</label>
                    <input type="number"
                        value={publishYear}
                        onChange={(e) => setPublishYear(e.target.value)}
                        className='border-2 border-grey-500 px-4 py-2 w-full'>
                    </input>
                </div>
                <button className ='p-2 bg-sky-300 m-8' onClick={handleSaveBooks}>
                    Save
                </button>
            </div>
        </div>
    )
}

export default CreateBook