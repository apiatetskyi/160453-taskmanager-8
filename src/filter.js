import util from './util';
import task from './task';

const filterClickHandler = () => {
  const tasksContainer = document.querySelector(`.board__tasks`);
  const tasksHtml = task.getData(util.getRandom(4, 10)).reduce((markup, data) => {
    return markup + task.getMarkup(data);
  }, ``);

  while (tasksContainer.firstChild) {
    tasksContainer.removeChild(tasksContainer.firstChild);
  }

  tasksContainer.appendChild(util.getNode(tasksHtml));
};

/**
 * Returns string with HTML-markup for filter element
 * @param {Object} filterData
 * @return {string}
 */
const getMarkup = (filterData) => {
  return `
    <input type="radio"
           id="filter__${filterData.label.toLowerCase()}"
           class="filter__input visually-hidden"
           name="filter"
           ${filterData.isChecked ? `checked` : ``}
           ${filterData.count === 0 ? `disabled` : ``}
    >
    <label for="filter__${filterData.label.toLowerCase()}" class="filter__label"> ${filterData.label}
      <span class="filter__${filterData.label.toLowerCase()}-count">${filterData.count}</span>
    </label>`;
};

/**
 * Returns fragment with list of filter nodes
 * @param {Object} filtersData
 * @return {Node}
 */
const getList = (filtersData) => {
  const filtersHtml = filtersData.reduce((markup, data) => {
    return markup + getMarkup(data);
  }, ``);

  return util.getNode(filtersHtml, (node) => {
    node.addEventListener(`click`, filterClickHandler);
  });
};

export default {getMarkup, getList};

