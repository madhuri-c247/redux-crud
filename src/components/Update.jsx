import React, { useState } from 'react';
import '../styles/update.css'
import { useDispatch } from 'react-redux';
import { addUser } from '../services/reducers/userReducer';
import { useNavigate } from 'react-router-dom';

const Update = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [Data, setData] = useState({
        id: '',
        price: '',
        category: '',
        title: '',
       
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({
            ...Data,
            [name]: value

        })
    }

  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(addUser(Data))
    navigate('/')
  }

    return (
        <div className='form-main-div'>
        <form className='update-form-main d-flexr' onSubmit={handleSubmit}>
            <h3>Update Here</h3>
            <input type="text"
                placeholder='Enter ID'
                name='id'
                value={Data.id}
                onChange={handleChange} required/>

            <input
                type="text"
                placeholder='Enter Price'
                name='price'
                value={Data.price}
                onChange={handleChange} required/>

            <input
                type="text"
                placeholder='Enter Category'
                name='category'
                value={Data.category}
                onChange={handleChange} required/>

            <input
                type="text"
                placeholder='Enter Title'
                name='title'
                value={Data.title}
                onChange={handleChange} required/>

            <input
                type='submit'
                className='btn'
                value='Add'/>
        </form>
    </div>
    );
}

export default Update;
