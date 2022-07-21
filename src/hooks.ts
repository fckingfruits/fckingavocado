import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import { AppState, AppDispatch } from './store'

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
