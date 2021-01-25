import axios from 'axios';
import { GET_PRODUCTOS, DELETE_PRODUCTO } from './types';

//Obtener productos
export const getProductos = () => dispatch => {
    axios.get('/api/productos/')
    .then(res => {
        dispatch({
            type: GET_PRODUCTOS,
            payload: res.data
        });
    }).catch(err => console.log(err));
}

//Obtener productos en especifico
export const getProductosE = id => dispatch => {
    let aux = '/api/productos/' + id
    axios.get(aux)
    .then(res => {
        dispatch({
            type: GET_PRODUCTOS,
            payload: res.data
        });
    }).catch(err => console.log(err));
}

//Eliminar productos
export const deleteProducto = id => dispatch => {
    let aux = '/api/productos/' + id
    axios.delete(aux)
    .then(res => {
        dispatch({
            type: DELETE_PRODUCTO,
            payload: id
        });
    }).catch(err => console.log(err));
}

//Agregar productos
export const addProducto = (producto) => dispatch => {
    axios.post('/api/productos/', producto)
    .then(res => {
        dispatch({
            type: ADD_PRODUCTO,
            payload: res.data
        });
    }).catch(err => console.log(err));
}

//Editar productos
export const editProducto = (id, producto) => dispatch => {
    let aux = '/api/productos/' + id + '/'
    axios.put(aux, producto)
    .then(res => {
        dispatch({
            type: EDIT_PRODUCTO,
            payload: res.data
        });
    }).catch(err => console.log(err));
}