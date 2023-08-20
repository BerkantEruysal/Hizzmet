import {configureStore} from '@reduxjs/toolkit';
import AnimationSlice from './AnimationSlice';

export const store = configureStore({
  reducer: {
    animation: AnimationSlice,
  },
});
