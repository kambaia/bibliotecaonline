import React from 'react';
import {Route, Redirect } from 'react-router-dom';

const PrivateRouter = props =>{
    const isAuthenticated  =  true;
    return isAuthenticated ? <Route {...props}/> : <Redirect to='/login'/>
}

export default PrivateRouter;
