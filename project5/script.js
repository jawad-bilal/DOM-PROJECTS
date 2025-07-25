// VARIABLES 

const addtask = document.getElementById('add-task');
const taskcontainer =document.getElementById('task-container');
const inputtask = document.getElementById('input-task');


// EVENT LISTENERS FOR ADD BUTTON
addtask.addEventListener('click', function(){

    let task = document.createElement('div')
    task.classList.add('task');
    let li = document.createElement('li');
    li.innerText =  `${inputtask.value}`;
    task.appendChild(li);

    let checkbutton = document.createElement('button')
    checkbutton.innerHTML = `<i  class="fas fa-check"></i>`;
    checkbutton.classList.add('checktask')
    task.appendChild(checkbutton)

    let deletebutton = document.createElement('button')
    deletebutton.innerHTML = `<i  class="fas fa-trash-can"></i>`;
    deletebutton.classList.add('deletetask')
    task.appendChild(deletebutton)

    if(inputtask.value === ""){
        alert('Please Enter a Task');

    }
    else{
        taskcontainer.appendChild(task);

    }
    inputtask.value = '';

    checkbutton.addEventListener('click',function(){
        checkbutton.parentElement.style.textDecoration ="line-through";

    });
    deletebutton.addEventListener('click', function(e){
        //  let target = e.target;
        //  target.parentElement.parentElement.remove();
        task.remove();

    } )
        
    })


