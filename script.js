//Todo list basics
var todos = ['Walk Dog'];

var input = prompt('What would you like to do?');

while (input !== 'quit') {
    //Handle input
    if (input === 'list') {
        console.log(todos);
    } else if (input === 'new') {
        //Ask for new todo
        var newTodo = prompt('Enter new todo');
        //Add new todo to array
        todos.push(newTodo);
    }
    //Ask again for new input
    input = prompt('What would you like to do?');
}
console.log('OK, SEE YOU SOON!');

//Updated version 06/28/2018
############################
//Todo list basics
var todos = ['Walk Dog'];
var input = prompt('What would you like to do?');

while (input !== 'quit') {
    //Handle input
    if (input === 'list') {
        listTodos();
    } else if (input === 'new') {
        addTodo();
    } else if (input === 'delete') {
        deleteTodo();   
    }
    //Ask again for new input
    input = prompt('What would you like to do?');
}
console.log('OK, SEE YOU SOON!');

function listTodos() {
    console.log('**********');
    todos.forEach(function(todo, i){
        console.log(i + ': ' + todo);
    });
    console.log('**********');
}

function addTodo() {
    //Ask for new todo
    var newTodo = prompt('Enter new todo');
    //Add new todo to array
    todos.push(newTodo);
    console.log('New Todo added');
}

function deleteTodo() {
    //Ask for index of Todo to be deleted
    var index = prompt('Enter index of Todo to delete');
    //delete that Todo
    //splice()
    todos.splice(index,1);
    console.log('Deleted Todo');
}
