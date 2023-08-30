import {useSelector, TypedUseSelectorHook} from 'react-redux';
import {RootState} from '../store/store.js';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
