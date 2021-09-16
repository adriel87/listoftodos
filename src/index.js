import './styles.css';

//clases
import {Todo, TodoList} from './class/';

//componenetes
import { makeTodoHTML } from './js/components';






export const todoList = new TodoList();



todoList.todos.forEach((todo) => makeTodoHTML(todo));



//uso de sesion storage y local storage


