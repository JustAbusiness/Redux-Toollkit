import createSlice from './../components/TodoList/TodoSlice'
import { fetchAllTodos } from './actions'

// SỬ DỤNG REDUX TOOLKIT
const initialState = {
  todos: [],
  isLoading: false,
  isDone: true,
  isError: false
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodoAction: (state, action) => {
      state.todos = [...state, action.payload]
    },

    deleteTodoAction: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload) // delete one todo
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchAllTodos.pending, (state, action) => {
      state.isLoading(true)
    })

    builder.addCase(fetchAllTodos.fulfilled, (state, action) => {
      state.todos = action.payload
      state.isLoading(false)
    })

    builder.addCase(fetchAllTodos.rejected, (state, action) => {
      state.todos = []
      state.isLoading(false)
      state.isError(true) // HIỆN CHỮ ERROR KHI KO CÓ API TRẢ VỀ
    })
  }
})

export const { addTodoAction, deleteTodoAction } = createSlice.actions

export default todosSlice.reducers
