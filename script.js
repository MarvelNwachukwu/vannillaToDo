const form = document.querySelector('form');
const unorderedList = document.querySelector('ul');
const clearAll = document.querySelector('#clearAll');

// After Window Loads, display whatever was saved in the previous session

window.onload = () => {
    // hide clear button and Task display when There's nothing

    if( localStorage.length < 1){
        unorderedList.style.visibility = 'hidden';
        clearAll.style.visibility = 'hidden';
    }

    // Iterates though local storage and try to retrieve "Last memory"

    for ( i = 0; i < localStorage.length; i++) {
        const createList = document.createElement('LI');
        let storedKeys = localStorage.key(i);
        console.log(localStorage.getItem(storedKeys))
        createList.innerHTML = localStorage.getItem(storedKeys)
        unorderedList.appendChild(createList)
    }

}

    // Add User Input to To-Do list

form.addEventListener('submit', e => {
    e.preventDefault();
    
    const createList = document.createElement('LI');
    const input = document.querySelector('input');

    // unhide the clear button and the Task display

    unorderedList.style.visibility = 'visible';
    clearAll.style.visibility = 'visible';
    

    // Save User's input to local storage
    let key = `input${localStorage.length}`;
    let saveToStorage = localStorage.setItem(key, `${input.value}`)

    // Write list from LocalStorage 
    
    createList.innerHTML = localStorage.getItem(key)
    unorderedList.appendChild(createList)
    

 
    // Clear Input
    input.value = '';

})

clearAll.addEventListener('click', e => {
    localStorage.clear();
    location.reload();

    // When it reloads, Window.onload function runs and check if local storage is clear. If it is, it hides the clear button and task display
})



