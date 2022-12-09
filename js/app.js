// Cached Element References:
const input = document.getElementById('input-item')
const submit = document.getElementById('submit-button')
const list = document.getElementById('todo-list')
const reset = document.getElementById('reset-button')
const listItems = document.querySelectorAll('li')

// // button event listener -> click
// // create li element -> createElement('li')
// // set text of li element to text written in imput element -> textContent
// // reset text of input to empty string -> ('')
// // add li element to page inside ul element -> ul appendChild li

submit.addEventListener('click', () => {
  if (input.value === '') return
  const listItem = document.createElement('li')
  listItem.textContent = input.value
  input.value = ('')
  list.appendChild(listItem)
})

// // clear all li Els on click of reset
// // clear input value as well

reset.addEventListener('click', () => {
  list.textContent = ''
  input.value = ''
})

list.addEventListener('click', (evt) => {
  evt.target.remove()
})