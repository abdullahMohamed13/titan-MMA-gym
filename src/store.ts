import { configureStore } from '@reduxjs/toolkit';
import fighterReducer from './features/slices/fightersSlice'
import productsReducer from './features/slices/productsSlice'
import coachesSlice from './features/slices/coachesSlice';

export const store = configureStore({
    reducer: {
        fighters: fighterReducer,
        coaches: coachesSlice,
        products: productsReducer,
    }
})
