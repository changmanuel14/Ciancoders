import axios from 'axios';
import { GET_PRODUCTOS, DELETE_PRODUCTO, ADD_PRODUCTO, EDIT_PRODUCTO } from './types';
import { tokenConfig } from './auth';

//Obtener productos
export const getProductos = () => (dispatch, getState) => {
    axios.get('/api/productos/', tokenConfig(getState))
    .then(res => {
        dispatch({
            type: GET_PRODUCTOS,
            payload: res.data
        });
    }).catch(err => console.log(err));
}

export const getProductos1 = () => dispatch => {
    axios.get('/api/productos1/', )
    .then(res => {
        dispatch({
            type: GET_PRODUCTOS,
            payload: res.data
        });
    }).catch(err => console.log(err));
}

//Eliminar productos
export const deleteProducto = id => (dispatch, getState) => {
    axios.delete(`/api/productos/${id}`, tokenConfig(getState))
    .then(res => {
        dispatch({
            type: DELETE_PRODUCTO,
            payload: id
        });
    }).catch(err => console.log(err));
}

//Agregar productos
export const addProducto = (producto) => (dispatch, getState) => {
    axios.post('/api/productos/', producto, tokenConfig(getState))
    .then(res => {
        dispatch({
            type: ADD_PRODUCTO,
            payload: res.data
        });
    }).catch(err => console.log(err));
}

//Editar productos
export const editProducto = (id, producto) => (dispatch, getState) => {
    let aux = '/api/productos/' + id + '/'
    axios.put(aux, producto, tokenConfig(getState))
    .then(res => {
        dispatch({
            type: EDIT_PRODUCTO,
            payload: res.data
        });
    }).catch(err => console.log(err));
}