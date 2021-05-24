import {configureStore} from '@reduxjs/toolkit';
import auth from './action/auth';
import toast from './action/Toast';
/*
const rootReducer = combineReducers({
    cars: cars,
    layout: layout
})
  */
export default configureStore({
        reducer:{
        auth: auth,
        toast:toast
    }
})

/*
export default createStore(rootReducer);
*/

