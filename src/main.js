import task from './task';
import filter from './filter';

/**
 * Default amount of rendered tasks
 * @constant
 * @type {number}
 */
const TASK_COUNT = 7;

const filtersData = [
  {label: `All`, count: 15, isChecked: true},
  {label: `Overdue`, count: 0},
  {label: `Today`, count: 0},
  {label: `Favorites`, count: 7},
  {label: `Repeating`, count: 2},
  {label: `Tags`, count: 6},
  {label: `Archive`, count: 115},
];
const filterElement = document.querySelector(`.main__filter`);
const tasksContainer = document.querySelector(`.board__tasks`);

filterElement.appendChild(filter.getList(filtersData));
tasksContainer.appendChild(task.getList(TASK_COUNT));
