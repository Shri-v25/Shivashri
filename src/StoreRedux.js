import ReduceRedux, { initialState } from "./ReduceRedux"
import {createStore} from 'redux';

export const store=createStore(ReduceRedux,initialState)