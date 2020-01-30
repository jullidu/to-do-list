import '../styles/style.scss';
import taskView from '../images/task-view-active.svg';

let backgroundTask = document.querySelector('#active-img')

backgroundTask.innerHTML += `<img src=${taskView} alt="task-view-img" class="task-view__image">`