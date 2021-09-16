import { Todo } from "../class";

import { todoList } from "../index"
 
const divTodoList   = document.body.querySelector('.todo-list');

const textNewTask   = document.body.querySelector('.new-todo');

const deleteAll     = document.body.querySelector('.clear-completed'); 

// const toggleTask = document.body.querySelector('.toggle');

export const makeTodoHTML = ( todo )=>{



    const HTMLTodo = `<li class="${ (todo.completado)? 'complete':''}" data-id="${todo.id}">
    <div class="view">
        <input class="toggle" type="checkbox" ${(todo.completado)?'checked':''}>
        <label>${todo.tarea}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
</li>`;

    const div = document.createElement('div');
    div.innerHTML = HTMLTodo;

    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;




}




//eventos

textNewTask.addEventListener('keyup', (event) =>{
    
    if(event.code === 'Enter' && textNewTask.value.length > 0){
        const newTodo = new Todo(textNewTask.value);
        todoList.newTodo(newTodo);
        console.log({todoList})
        makeTodoHTML(newTodo);
        textNewTask.value="";
    }
})


divTodoList.addEventListener('click', (event)=>{
   
   const elementName =  event.target.localName; // puede ser un imput, label , buttn
   const todoElement = event.target.parentElement.parentElement;
 
   const todoId = todoElement.getAttribute('data-id')
   if(elementName === 'input'){
      todoList.toggleTodo( todoId )
      todoElement.classList.toggle('completed');
   }

   if(elementName === 'button'){
       todoList.deleteTodo( todoId );
       divTodoList.removeChild( todoElement );
   }
})

deleteAll.addEventListener('click', (event)=>{
    todoList.removeCompleteTodos();


    for (let i = divTodoList.children.length - 1; i >= 0 ; i--) {
        
        const element = divTodoList.children[i];
        
        if (element.classList.contains('completed')) {
            divTodoList.removeChild(element);
        };
        
    };

});


