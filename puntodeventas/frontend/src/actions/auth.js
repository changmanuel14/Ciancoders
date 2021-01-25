import axios from 'axios';
import {USER_LOADING, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT_SUCCESS, REGISTER_FAILED, REGISTER_SUCCESS} from './types';

//Verificar token y cargar al usuario
export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: USER_LOADING});

    axios.get('/api/auth/user', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data,
            });
        }).catch(err => {
            console.log("Error al autenticar");
            dispatch({
                type: AUTH_ERROR
            });
        })
}

export const register = ({ username, password, email}) => dispatch => {

    //Headers
    const config = { 
        headers: {
            'Content-Type': 'application/json'
        }
    }
    
    //Request Body
    const body = JSON.stringify({ username, password, email });

    axios
    .post('/api/auth/register', body, config)
    .then(res => {
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
    }).catch(err => {
        console.log("Error al registrar");
        dispatch({
            type: REGISTER_FAILED
        });
    })
}

export const login = (username, password) => dispatch => {
    //Headers
    const config = { 
        headers: {
            'Content-Type': 'application/json'
        }
    }
    
    //Request Body
    const body = JSON.stringify({ username, password });

    axios
    .post('/api/auth/login', body, config)
    .then(res => {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
    }).catch(err => {
        console.log("Error al ingresar");
        dispatch({
            type: LOGIN_FAILED
        });
    })
}

//Logout
export const logout = () => (dispatch, getState) => {
    


    axios.post('/api/auth/logout/',null, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: LOGOUT_SUCCESS,
                payload: res.data
            });
        }).catch(err => {
            console.log("Error al salir");
        })
}

export const tokenConfig = getState => {
    const token = getState().auth.token;
    //Headers
    const config = { 
        headers: {
            'Content-Type': 'application/json'
        }
    }
    if(token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    return config;
}
