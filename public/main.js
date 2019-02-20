'use strict';

/**
 * Returns string with HTML-markup for filter element
 * @param {string} label='' Filter label
 * @param {number} count=0 Count of elements in filter
 * @param {boolean} isChecked=false
 * @returns {string}
 */
const getFilterMarkup = (label = '', count = 0, isChecked = false) => {
  return `
    <input type="radio" id="filter__${label.toLowerCase()}" class="filter__input visually-hidden" name="filter" ${isChecked ? 'checked' : ''} ${count === 0 ? 'disabled' : ''}>
    <label for="filter__${label.toLowerCase()}" class="filter__label"> ${label} <span class="filter__${label.toLowerCase()}-count">${count}</span></label>`;
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
  return markup + getFilterMarkup(filterData.label, filterData.count, filterData.isChecked);
}, '');

filterElement.appendChild(getNodeFromString(filtersHtml));
