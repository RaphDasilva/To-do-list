import './style.css';

const listContainer = document.querySelector('.container');

const toDoInfo = [
  {
    description: 'Go to School',
    completed: false,
    index: 1,
  },

  {
    description: 'Eat Food',
    completed: false,
    index: 2,
  },

  {
    description: 'Walkout',
    completed: false,
    index: 3,
  },
  {
    description: 'Sleep',
    completed: false,
    index: 4,
  },

  {
    description: 'Play game',
    completed: false,
    index: 5,
  },
];

window.addEventListener('load', () => {
  toDoInfo.forEach((element) => {
    const toDoList = `
        <div class="to-do-container">
                <div class="to-do"><input type="checkbox"><input type="text" placeholder="${element.description}"></div>
                <div class="to-do-icon"><i class="fa-solid fa-ellipsis-vertical"></i></div>
            </div>
        `;
    listContainer.innerHTML += toDoList;
  });
});
