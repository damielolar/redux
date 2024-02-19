import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './adddSlice';

const Store = configureStore({
    reducer: {
        todos: todoReducer,
    },
});


export default Store