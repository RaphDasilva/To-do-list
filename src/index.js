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


listContainer.addEventListener('click', (e) => {
  const { target } = e;
  const parentElement = target.parentNode.parentNode;
  if (!parentElement.classList.contains('to-do-container')) return;
  const eachListId = Number(parentElement.id);
  // target the data action
  const { action } = target.dataset;

  if (action === 'delete') {
    deleteList(eachListId);
  }
});

listContainer.addEventListener('change', (e) => {
  const { target } = e;
  const parentElement = target.parentNode.parentNode;
  if (!parentElement.classList.contains('to-do-container')) return;
  const eachListId = Number(parentElement.id);
  // target the data action
  const { action } = target.dataset;
  if (action === 'edit') {
    editTask(eachListId, target);
  }
});