import React, { useState } from 'react';
import '../styles/update.css'
import { useDispatch } from 'react-redux';
import { addUser } from '../services/reducers/userReducer';
import { useNavigate } from 'react-router-dom';

const Update = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [inputData, setData] = useState({
        id: '',
        price: '',
        category: '',
        title: '',    
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({
            ...inputData,
            [name]: value
        })
    }

  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(addUser(inputData))
    navigate('/')
  }

    return (
        <div className='form-main-div'>
        <form className='update-form-main d-flexr' onSubmit={handleSubmit}>
            <h3>Update Here</h3>
            <input type="text"
                placeholder='Enter ID'
                name='id'
                value={inputData.id}
                onChange={handleChange} required/>

            <input
                type="text"
                placeholder='Enter Price'
                name='price'
                value={inputData.price}
                onChange={handleChange} required/>

            <input
                type="text"
                placeholder='Enter Category'
                name='category'
                value={inputData.category}
                onChange={handleChange} required/>

            <input
                type="text"
                placeholder='Enter Title'
                name='title'
                value={inputData.title}
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
