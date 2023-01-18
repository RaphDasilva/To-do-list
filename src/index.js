import './style.css';
import { listContainer, textInput, clearBtn } from './modules/variables.js';
import { addList, deleteList, editTask, getFromLocal } from './modules/displaylist.js';


window.addEventListener('load', () => {
  getFromLocal();
});

textInput.addEventListener('keypress', (e) => {
  const { target } = e;
  if (target.value === '') return;
  if (e.key === 'Enter') {
    addList();
  }
});


document.addEventListener('click', (e) => {
  const { target } = e;
  const toDoContainer = document.getElementsByClassName('to-do-container');
  const eachListId = Number(toDoContainer.id);
  const { action } = target.dataset;
  if (action === 'delete') {
    deleteList(eachListId);
  }
});

document.addEventListener('change', (e) => {
  const { target } = e;
  const toDoContainer = document.getElementsByClassName('to-do-container');
  const eachListId = Number(toDoContainer.id);
  const { action } = target.dataset;
  if (action === 'edit') {
    editTask(eachListId, target);
  }
});