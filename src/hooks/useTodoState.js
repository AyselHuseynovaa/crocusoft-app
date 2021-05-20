import  {useState} from 'react'
import uuid from "uuid/v4";
import useLocalStorageState from './useLocalStorageState';

export default function initialTodos(){
const [todos,setTodos]=useLocalStorageState('todos', initialTodos)
    return{


        addTodo : newTodo => {
            setTodos([...todos, { id: uuid(), task: newTodo, completed: false }]);
          },
        
         removeTodo :todoId => {
            const updatetodoList = todos.filter((todo) => todo.id !== todoId);
            setTodos(updatetodoList);
          },
       toggleTodo : todoId => {
            const updatetodoList = todos.map((todo) => todo.id === todoId? {...todo,completed:!todo.completed}:todo);
            setTodos(updatetodoList);
          },
     editTodo :( todoId,newTask) => {
            const updatetodoList = todos.map((todo) => todo.id === todoId? {...todo,task:newTask}:todo);
            setTodos(updatetodoList);
          }
    }
}