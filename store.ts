import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    // Add your reducers here
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
