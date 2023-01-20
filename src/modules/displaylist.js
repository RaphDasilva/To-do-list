import { listContainer, textInput } from './variables.js';
import checkBox from './check-box.js';

let toDoInfo = [];

// Display Task
const displayTask = () => {
  listContainer.innerHTML = '';
  toDoInfo.forEach((element) => {
    if (element.completed === true) {
      const toDoList = `
      <div class="to-do-container" id = "${element.index - 1}">
              <div class="to-do">
                <input type="checkbox" data-action="checkbox" checked >
                <input type="text" value="${element.description}" data-action="edit" data.id = "${element.index}" class = "check-true">
              </div>
              <div class="to-do-icon" id="delete-btn">
                <i class="fa-solid fa-trash-can" data-action="delete"></i>
              </div>
          </div>
      `;
      listContainer.innerHTML += toDoList;
      textInput.value = '';
    } else if (element.completed === false) {
      const toDoList = `
      <div class="to-do-container" id = "${element.index - 1}">
              <div class="to-do">
                <input type="checkbox" data-action="checkbox">
                <input type="text" value="${element.description}" data-action="edit" data.id = "${element.index}">
              </div>
              <div class="to-do-icon" id="delete-btn">
                <i class="fa-solid fa-trash-can" data-action="delete"></i>
              </div>
          </div>
      `;
      listContainer.innerHTML += toDoList;
      textInput.value = '';
    }
  });
};
// Add to local Storage
const storeTolocalStorage = (arr) => {
  const stringifyData = JSON.stringify(arr);
  localStorage.setItem('toDolist', stringifyData);
};

//   Add list
const addList = () => {
  const eachList = {};
  eachList.description = textInput.value;
  eachList.completed = false;
  eachList.index = toDoInfo.length + 1;
  toDoInfo.push(eachList);
  displayTask();
  storeTolocalStorage(toDoInfo);
};

const resetIndex = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    arr[i].index = i + 1;
  }
};

// Delete list
const deleteList = (index) => {
  toDoInfo.splice(index, 1);
  resetIndex(toDoInfo);
  displayTask();
  storeTolocalStorage(toDoInfo);
};

// EDIT TO-DO TASK FUNCTION
const editTask = (Id, input) => {
  toDoInfo[Id].description = input.value;
  displayTask();
  storeTolocalStorage(toDoInfo);
};

const getFromLocal = () => {
  const getJsonData = localStorage.getItem('toDolist');
  if (getJsonData) {
    toDoInfo = JSON.parse(getJsonData);
  }
  displayTask();
};

/** CHECKBOX FUNCTION */
const checkCompleted = (buttonId, box) => {
  toDoInfo[buttonId].completed = checkBox(box);
  storeTolocalStorage(toDoInfo);
};

const clearCompleted = () => {
  toDoInfo = toDoInfo.filter((obj) => obj.completed !== true);
  displayTask();
  resetIndex(toDoInfo);
  storeTolocalStorage(toDoInfo);
};

const refreshPage = () => {
  window.location.reload();
};
export {
  addList, deleteList, editTask, getFromLocal, checkCompleted, clearCompleted, refreshPage,
};