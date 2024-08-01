import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    todos: [
        {
            id: 1,
            todo: 'To Do Msg',
            completed: false
        }
    ],
    updateToDo: (id, todo)=>{},
    deleteToDo: (id)=>{},
    addToDo: (todo)=>{},
    toDoCompleted: (id)=>{}
})

export default function useToDo(){
    return useContext(ToDoContext)
}

export const ToDoProvider = ToDoContext.Provider