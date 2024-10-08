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

    /*  Using ForEach as an alternative 
    todoList.forEach(function( todoObject, index)
{
    const todoObject = todoList[i];
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    // shortcut cost{name,dueDate} = todoObject;
    const html = `
    <div>${name} </div>
     <div>${dueDate} </div> 
    <button class ="dbutton" onclick="
    todoList.splice(${index},1);
    render();
    ">Delete</button> `;
    todoHtml += html;
  
    

document.querySelector('.div').innerHTML = todoHtml;
}
Using ForEach as an alternative with arrow function

 todoList.forEach(( todoObject, index) =>
 {};
);*/

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
        /*  
      if we want to replace onClick 
      
      document.querySelectorAll('.dbutton').forEach(
            (deleteB, index)=> {
                deleteB.addEventListener('click',() => 
                {
                    todoList.splice(i,1);
                    render();  
                } );

});*/
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


/*
NOTE : another way 
-------------
HTML ::
id="reve" 

CSS ::
#reve {
  margin-top: 20px;
  text-align: left;
}

JS::
.getElementById('getWeatherBtn')


*/
