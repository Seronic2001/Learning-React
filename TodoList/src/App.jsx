import { useEffect, useState } from 'react'
//import './App.css'
import { TodoProvider } from './contexts/TodoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    const Todos = JSON.parse(localStorage.getItem("todos"));
    if(Todos && Todos.length > 0) {
      setTodos(Todos)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo =  (todo) => {
    const newTodos = {
      ...todo,
      id: Date.now()
    }
    setTodos((prev) => [...prev, newTodos])
  }

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const toggleTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if(todo.id === id){
        return {...todo, isCompleted: !todo.isCompleted}
      }
      return todo
    })
    setTodos(newTodos)
  }

  const editTodo = (id, todo) => {
    const newTodos = todos.map((t) => {
      if(t.id === id){
        return {...t , todo}
      }
      return t
    })
    setTodos(newTodos)
  }

  return(
    <TodoProvider value={{todos, addTodo, removeTodo, toggleTodo, editTodo}}>
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
              {/* Todo form goes here */}
              <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {
              todos.map((todo) => (
                <div key={todo.id} className='w-full'>
                  <TodoItem todo={todo}/>
                </div>
            ))}
          </div>
      </div>
    </div>
    </TodoProvider>
  )
}

export default App
