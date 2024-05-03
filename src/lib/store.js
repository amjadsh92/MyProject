import  { configureStore }  from '@reduxjs/toolkit'  
import {productsReducer} from './features/products/productsSlice'
import { tasksReducer } from './features/toDoApp/toDoAppSlice'


const store =  configureStore({reducer:
    { prod: productsReducer,
      toDo: tasksReducer }})  
  
console.log(store.getState())  


export default store;