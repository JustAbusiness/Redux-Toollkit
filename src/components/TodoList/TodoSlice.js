import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
  name: '',
  initialState: [{ id: 1, name: 'Wibu', completed: false, priority: 'Meow' }],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    },
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find(todo => todo.id === action.payload)
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed
      }
    }
  }
})
