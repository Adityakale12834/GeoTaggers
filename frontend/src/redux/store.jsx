import {configureStore} from '@reduxjs/toolkit';
import streetviewSlice from './slices/streetviewSlice';

export const store = configureStore({
    reducer : {
        app : streetviewSlice,
    }
})