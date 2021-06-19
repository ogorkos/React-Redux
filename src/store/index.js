import {createStore} from 'redux';
import reducer from '../reducers'

const initialState = {name: 'Kostya', num:100}
export const store =createStore(reducer, initialState)

