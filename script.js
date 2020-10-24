const form = document.querySelector('form');
const unorderedList = document.querySelector('ul');


form.addEventListener('submit', e => {
    e.preventDefault();
    unorderedList.style.visibility = 'visible';
    const createList = document.createElement('LI');
    const input = document.querySelector('input');
    

    // Save User's input to local storage
    let key = `input${localStorage.length}`;
    let saveToStorage = localStorage.setItem(key, `${input.value}`)

    // Write list from LocalStorage 
    
    createList.innerHTML = localStorage.getItem(key)
    unorderedList.appendChild(createList)
    

 
    // Clear Input
    input.value = '';

})


// for(i = 0; i < localStorage.length;i++){
//     let storeKey = `input${localStorage.length}`;
//     createList.innerHTML = localStorage.getItem('input0');
//     unorderedList.appendChild(createList);
//     console.log(createList.innerHTML)
// }

