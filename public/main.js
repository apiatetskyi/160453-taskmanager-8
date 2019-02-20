'use strict';

/**
 * Returns string with HTML-markup for filter element
 * @param {Object} filterData
 * @returns {string}
 */
const getFilterMarkup = (filterData) => {
  return `
    <input type="radio"
           id="filter__${filterData.label.toLowerCase()}"
           class="filter__input visually-hidden"
           name="filter"
           ${filterData.isChecked ? 'checked' : ''}
           ${filterData.count === 0 ? 'disabled' : ''}
    >
    <label for="filter__${filterData.label.toLowerCase()}" class="filter__label"> ${filterData.label}
      <span class="filter__${filterData.label.toLowerCase()}-count">${filterData.count}</span>
    </label>`;
};

/**
 * Returns fragment with nodes, created from valid HTML string
 * @param {string} htmlString
 * @returns {Node}
 */
const getNodeFromString = (htmlString) => {
  const parser = new DOMParser();
  const html = parser.parseFromString(htmlString, 'text/html');
  const fragment = document.createDocumentFragment();

  html.body.childNodes.forEach((node) => {
    fragment.appendChild(node);
  });

  return fragment;
};

const filtersData = [
  {label: 'All', count: 15, isChecked: true},
  {label: 'Overdue', count: 0},
  {label: 'Today', count: 0},
  {label: 'Favorites', count: 7},
  {label: 'Repeating', count: 2},
  {label: 'Tags', count: 6},
  {label: 'Archive', count: 115},
];
const filterElement = document.querySelector('.main__filter');
const filtersHtml = filtersData.reduce((markup, filterData) => {
  return markup + getFilterMarkup(filterData);
}, '');

filterElement.appendChild(getNodeFromString(filtersHtml));
