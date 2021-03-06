import { Todo } from ".";

export class TodoList {

    constructor(){
        this.loadLocalStorage();
    }

    newTodo( todo ){
        this.todos.push(todo)
        this.localStorageSave();
    }

    deleteTodo( id ){

        this.todos = this.todos.filter(todo=> todo.id != id)
        this.localStorageSave();

    }

    toggleTodo( id ){

        for (const todo of this.todos) {
            
            if(todo.id == id){

                todo.completado = !todo.completado;
                this.localStorageSave();
                break;
            }

        }

    }

    removeCompleteTodos ( ) {

        this.todos = this.todos.filter(todo => (!todo.completado))
        this.localStorageSave();
    }

    localStorageSave(){

        localStorage.setItem('saveTodos', JSON.stringify(this.todos))

    }

    loadLocalStorage(){

        this.todos = (localStorage.getItem('saveTodos'))
                    ? JSON.parse(localStorage.getItem('saveTodos'))
                    : [];

        this.todos = this.todos.map( Todo.fromJson )
    }

}