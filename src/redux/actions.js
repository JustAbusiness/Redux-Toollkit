import { Types } from './../Types'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const increaseCount = data => {
  return {
    type: Types.increaseCount,
    payload: data
  }
}

export const decreaseCount = data => {
  return {
    type: Types.decreaseCount,
    payload: data
  }
}

export const addTodo = data => {
  return {
    type: Types.addTodo,
    payload: data
  }
}

export const fetchAllTodos = createAsyncThunk('todos/fetchAllTodos',
    async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(json => console.log(json))
      return response
    }
);

export const deleteTodo = data => {
  return {
    type: Types.deleteTodo,
    payload: data
  }
}
