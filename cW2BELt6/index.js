 function log(value) {
     console.log(value)
 }
 
let title = prompt("Enter what you're counting")
let countEl =  document.getElementById('count-el')
let saveEl = document.getElementById('save-el')

let count = 0;
 
function increment() {
    count += 1
    countEl.textContent = count
}
 
function save() {
    countEntries = count + ' - '
    saveEl.textContent += countEntries
    count = 0;
    countEl.textContent = 0 
}


titleEl = document.getElementById('title-el');

titleEl.textContent = title + ': ';