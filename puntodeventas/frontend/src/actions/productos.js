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

//Agregar productos
export const addEncabezado = (data) => (dispatch) => {

    axios.post('/api/encabezados/', data)
    .then(res => {
        localStorage.setItem('idEncabezado', res.data.id);
        dispatch({
            type: ADD_ENCABEZADO,
            payload: res.data,
        });
    }).catch(err => console.log(err));
}

export const addCuerpo = (data) => (dispatch) => {

    axios.post('/api/cuerpos/', data)
    .then(res => {
        dispatch({
            type: ADD_CUERPO,
            payload: res.data,
        });
    }).catch(err => console.log(err));
}

export const getEncabezados = () => dispatch => {
    axios.get('/api/encabezados/',)
    .then(res => {
        dispatch({
            type: GET_ENCABEZADOS,
            payload: res.data
        });
    }).catch(err => console.log(err));
}

export const editExistencia = (id, existencia) => dispatch => {
    const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
    
    const body = JSON.stringify({ existencia });
    console.log(body);
    axios.put(`/api/productos/${id}/`, body, config)
    .then(res => {
        dispatch({
            type: EDIT_PRODUCTO,
            payload: res.data
        });
    }).catch(err => console.log(err));
}

export const getCuerpo = () => dispatch => {
    axios.get('/api/cuerpos/',)
    .then(res => {
        dispatch({
            type: GET_CUERPOS,
            payload: res.data
        });
    }).catch(err => console.log(err));
}