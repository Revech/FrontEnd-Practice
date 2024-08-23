const todoList = [
{
    name:'',
    dueDate :''
}

];

render();
function render()
{
    let todoHtml = '';
    for (let i = 0; i < todoList.length; i ++)
        {
            const todoObject = todoList[i];
            const name = todoObject.name;
            const dueDate = todoObject.dueDate;
            // shortcut cost{name,dueDate} = todoObject;
            const html = `
            <div>${name} </div>
             <div>${dueDate} </div> 
            <button class ="dbutton" onclick="
            todoList.splice(${i},1);
            render();
            ">Delete</button> `;
            todoHtml += html;
          
            
        }
        document.querySelector('.div').innerHTML = todoHtml;
}

 


function addTodo()
{
    const todo = document.querySelector('.input');
    const todoDate = document.querySelector('.dateInput');

    const dueDate = todoDate.value;
    const name = todo.value;
    todoList.push({name: name , dueDate : dueDate }); 
    //shortcut  todoList.push({name , dueDate}); same name 

    todo.value = '';
    render();
  
}