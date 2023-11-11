import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos: [{
        id: 1,
        todo : "Learn React",
        isCompleted: false,
    }],
    addTodo: (todo) => {},
    removeTodo: (id) => {},
    toggleTodo: (id) => {},
    editTodo: (id, todo) => {}
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext);
}