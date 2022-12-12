import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './index';
import React from 'react'

// Define a type for the slice state
type TodoState = {
  value: {id: number, content: string}[]
}

// Define the initial state using that type
const initialState: TodoState = {
  value: []
}


export const todoSlice = createSlice({
  name: 'todo',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addTodo: (state, action: PayloadAction<string>) => {
      const prev = [...state.value];
      const next = [{id: new Date().getTime(), content: action.payload}];
      state.value = next.concat(prev);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter(v=>v.id !== Number(action.payload));
    },
    updateTodo: (state, action: PayloadAction<{id:number, content:string}>) => {
      const currentId = Number(action.payload.id)
      const currentIndex = state.value.findIndex(v=>v.id === currentId);
      state.value[currentIndex] = {...action.payload};
      const prev = state.value.filter(v=>v.id !== currentId);

      state.value = [state.value[currentIndex], ...prev];
    },
  },
})

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.todo.value

export default todoSlice.reducer;