import React from 'react';
import {Route, Redirect } from 'react-router-dom';
import {useSelector } from 'react-redux';

const PrivateRouter = props =>{
    const { isAuthenticated } =  useSelector(state=>state.auth);
    return isAuthenticated ? <Route {...props}/> : <Redirect to='/login'/>
}

export default PrivateRouter;
