import { DELETE_PRODUCTO, GET_PRODUCTOS, ADD_PRODUCTO } from '../actions/types.js';

const initialState = {
    productos: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_PRODUCTOS:
            return{
                ...state,
                productos: action.payload
            };
        case DELETE_PRODUCTO:
            return{
                ...state,
                productos: state.productos.filter(producto => producto.id !== action.payload)
            };
        case ADD_PRODUCTO:
            return{
                ...state,
                productos: [...state.productos, action.payload]
            }
        default:
            return state;
    }
}