import './App.css'
import { decrementCount, incrementCount } from './redux/counterSlice'
import { store } from './redux/store'
import { useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { addTodoAction, deleteTodoAction } from './redux/todosSlice'
import { fetchAllTodos } from './redux/actions'

function App (props) {
  const dispatch = useDispatch()
  const [name, setName] = useState()
  const todosState = useSelector(state => state.todos)
  const { todos, isLoading, isError} = todosState;



  const handleIncrease = () => {
    dispatch(incrementCount(5))
    // tăng 5
  }

  const handleDecrease = () => {
    dispatch(decrementCount(2))
    // giảm 2
  }

  const handleAddTodo = () => {
    props.addTodo({
      name,
      id: Math.random()
    })
    setName('')
  }

  const handleDelete = id => {
    props.deleteTodo(id)
  }

  const handleOnChange = e => {
    setName(e.target.value)
  }

  const handleGetAllTodos = () => {
    dispatch(fetchAllTodos())
  }

  return (
    <div
      style={{
        width: 500,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 20,
        boxShadow: '0 0 10px 4px #bfbfbf',
        borderRadius: 5,
        height: '90vh'
      }}
    >
      <h1> Redux tutorials</h1>
      <h4>{store.count}</h4>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <div>
        <input type='value' onChange={e => handleOnChange(e.target.value)} />
        <button type='submit' onClick={handleAddTodo}>
          {' '}Add to do{' '}
        </button>
      </div>
      <div>
        <button onClick={handleGetAllTodos} disabled={isLoading}> Get All Todos</button>
      </div>

      { isLoading  ?  (
        <div>
          Loading...
        </div>
      ) : (
        <>
          {todos.map((todo, index) => {
            return (
              <div key={todo.id}>
                {index} - {todo.name};
                <span onClick={() => handleDelete(todo.id)}> X </span>
              </div>
            )
          })};
              {isError && <div> ERROR</div>}
        </>
      )}
    </div>
  )
}

function mapStateProps (state) {
  return {
    count: store.getState().count.count
  }
}

function mapDispatchtoProps (dispatch) {
  return {
    addTodo: data => store.dispatchh(addTodoAction(data)),
    deleteTodot: data => store.dispatch(deleteTodoAction(data))
  }
}

export default connect(mapStateProps, mapDispatchtoProps)(App)
