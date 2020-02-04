import '../styles/style.scss';


//add new task

let newTask = document.querySelector('#newTaskTitle')

let newDesc = document.querySelector('#newDesc')

let add = document.querySelector('#add')

let taskId = 4

add.addEventListener('click', (event) => {
  let elem = document.querySelector('.tasks-section__list')

  elem.innerHTML += `<div class="task" id="task">
    <div class="task__checkbox-wrap">
      <input type="checkbox" class="styled-checkbox" id="styled-checkbox-${taskId}">
      <label for="styled-checkbox-${taskId}"></label>
    </div>
    <div class="task__text-box">
      <h2 class="task__title" id="taskTitle">${newTask.value}</h2>
      <span class="task__desc">${newDesc.value}</span>
    </div>
    <div class="task__delete"></div>
    </div>`

  //delete task

  document.querySelectorAll('.task__delete').forEach(item => {
    item.addEventListener('click', (event) => {
      event.target.parentElement.remove()
    })
  })

  //checked task

  document.querySelectorAll('.styled-checkbox').forEach(item => {
    item.addEventListener('click', getActive)
  })


  //cancel text

  newTask.value = ''
  newDesc.value = ''
  newTask.focus()

  taskId++
})

//function for active task

function getActive(event) {

  let task = event.target.parentElement.parentElement;
  if (event.target.checked) {
    task.classList.add("task_active")
    task.querySelector('.task__title').classList.add("task__title_active")

  } else {

    task.classList.remove("task_active");
    task.querySelector('.task__title').classList.remove("task__title_active")
  }

}


//for static tasks

document.querySelectorAll('.styled-checkbox').forEach(item => {
  item.addEventListener('click', getActive)
})

document.querySelectorAll('.task__delete').forEach(item => {
  item.addEventListener('click', (event) => {
    event.target.parentElement.remove()
  })
})