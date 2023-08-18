import React, { useEffect, useState } from 'react';
import '../styles/update.css'
import { useDispatch, useSelector } from 'react-redux';
import { addUser, editUser } from '../services/reducers/userReducer';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {id} = useParams();
    const users = useSelector((state) => state.users)
    
    useEffect(()=>{
        const toEdit = users.filter((item)=> item.id == id)

        console.log(toEdit,'edit')
        // console.log(id,'params-id')
        // console.log(users,'users')
        setData({
            ...toEdit[0]
        })

    },[])

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
     dispatch(editUser({id:id, Data:Data}))
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
                value='Edit'/>
        </form>
    </div>
    );
}

export default Edit;
