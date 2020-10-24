const input = document.querySelector('input');
const form = document.querySelector('form');
const unorderedList = document.querySelector('ul');


form.addEventListener('submit', e => {
    e.preventDefault();
    const createList = document.createElement('LI');
    const input = document.querySelector('input');
    createList.innerHTML = input.value;
    unorderedList.appendChild(createList);
    input.value = '';

})


localStorage.t0= 'What is local storage?'
localStorage.t1 = 'Learn more about this Local Storage'
localStorage.t2 = 'practice Local storage'
localStorage.t3 =  'Use Local Storage in a project'

for(i = 0; i < localStorage.length;i++){
    let storeKey = localStorage.key(i);
    console.log(localStorage.getItem(storeKey))
}
