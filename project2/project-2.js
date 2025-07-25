// VARIABLES

let OpenBtn =document.getElementById('open-btn');

let modalContainer = document.getElementById('modal-container');

let CloseBtn = document.getElementById('close-btn');

// EVENT LISTENER

OpenBtn.addEventListener('click', function(){
    modalContainer.style.display ="block";
})

CloseBtn.addEventListener('click', function(){

    modalContainer.style.display ="none";
})

window.addEventListener('click', function(e){

    if(e.target === modalContainer)
        modalContainer.style.display = 'none';
    
})