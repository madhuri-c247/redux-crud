import React, { useEffect } from 'react';
import axios from 'axios';
import '../styles/home.css'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Link, NavLink } from 'react-router-dom';
import { deleteUser, editUser, fetchData } from '../services/reducers/userReducer';
import { useDispatch } from 'react-redux';

const Home = () => {

    const Data = useSelector((state) => state.users)
    const dispatch = useDispatch()
    // console.log(Data,'from-home')

    useEffect(() => {
       axios.get('https://fakestoreapi.com/products').then((res) => {
            // dispatch(fetchData(res.data))
        })
        
   }, [dispatch])

   const handleDelete = (id)=>{
        dispatch(deleteUser({id:id}))
   }

   

    return (

        <div className='table-main'>
            <table border={1} >
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Title</th>
                        <th colSpan={2}><NavLink to='/update'>Add </NavLink></th>
                    </tr>
                </thead>
                <tbody>
                    {Data ? Data.map((value, index) => {

                        return <>
                            <tr key={value.id}>
                                <td>{value.id}</td>
                                <td>{value.price}</td>
                                <td>{value.category}</td>
                                <td>{value.title}</td>
                                <td><button className='delete-btn'
                                    onClick={() => handleDelete(value.id)}>
                                    Delete
                                </button></td>
                                <td><NavLink to={`/edit/${value.id}`}><button className='edit-btn'
                                >
                                  Edit
                                </button></NavLink></td>
                            </tr>
                        </>
                    }) : 'data not found'}
                </tbody>
            </table>
        </div>
    );
}

export default Home;
