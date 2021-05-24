import {createAction, createReducer } from '@reduxjs/toolkit';
const INITIAL_STATE = {
    showMessage: true,
    messages: []
};

export const addMessage  = createAction('ADD_MESSAGE');
export const removeMessage  = createAction('REMOVE_MESSAGE');

export default createReducer(INITIAL_STATE, {
    [addMessage.type]:  (state, action)=>({...state, messages:  [...state.messages, action.payload] }),
    [removeMessage.type]:  (state, action)=>({
        ...state, 
        messages:  state.messages.filter((ms)=>ms.success !== action.payload 
    )})
})