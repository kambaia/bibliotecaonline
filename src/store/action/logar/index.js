import {createAction, createReducer } from '@reduxjs/toolkit';
const INITIAL_STATE = [];

export const encarregado = createAction('ENCARREGADO_LOGADO');
export const confirmarEncarregado = createAction('CONFIRMAR_USUARIO');

export default createReducer(INITIAL_STATE, {
    [encarregado.type]: (state, action) =>[...state, action.payload],
    [confirmarEncarregado.type]: (state, action)=>[...action.payload]
})