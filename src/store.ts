import { configureStore } from '@reduxjs/toolkit';
import coachesSlice from './features/slices/coachesSlice';
import classesSlice from './features/slices/classesSlice';
import branchesSlice from './features/slices/branchesSlice';

export const store = configureStore({
    reducer: {
        coaches: coachesSlice,
        classes: classesSlice,
        branches: branchesSlice,
    }
})
