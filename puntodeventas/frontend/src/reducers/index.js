import { combineReducers } from 'redux';
import productos from './Productos';
import auth from './auth';

export default combineReducers({
    productos,
    auth
});

