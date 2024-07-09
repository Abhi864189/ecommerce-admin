// hooks.ts
import { TypedUseSelectorHook, useSelector as useReduxSelector, useDispatch as useReduxDispatch } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Use throughout your app instead of plain `useSelector` and `useDispatch`
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useDispatch = () => useReduxDispatch<AppDispatch>();
