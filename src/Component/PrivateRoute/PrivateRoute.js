import React from 'react';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(authContext)
    let location = useLocation()

    if(loading){
       return <div className='text-center'><Spinner  animation='border' varient ='primary' /></div>
    }

    if(!user?.uid){
       return <Navigate to='/login' state={{from:location}} replace ></Navigate>
    }

    
    return children;
};

export default PrivateRoute;