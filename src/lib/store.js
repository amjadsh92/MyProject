import  { configureStore }  from '@reduxjs/toolkit'  

import { tasksReducer } from './features/toDoApp/toDoAppSlice'


const store =  configureStore({reducer:
    { 
      toDo: tasksReducer }})  
  
console.log(store.getState())  


export default store;