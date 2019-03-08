const DAY_IN_MILLISECONDS = 60 * 60 * 24 * 1000;
const DAYS_TO_DEADLINE = 1;

/**
 * @param {Array} array
 * @return {*}
 */
const getRandomArrayElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

/**
 * Returns random number from range
 * @param  {number} min
 * @param  {number} max
 * @return {number}
 */
const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

/**
 * Returns fragment with nodes, created from valid HTML string
 * @param {string} htmlString
 * @param {Function} [appendedNodesCallback]
 * @return {Node}
 */
const getNode = (htmlString, appendedNodesCallback) => {
  const parser = new DOMParser();
  const html = parser.parseFromString(htmlString, `text/html`);
  const fragment = document.createDocumentFragment();

  html.body.childNodes.forEach((node) => {
    if (typeof appendedNodesCallback === `function`) {
      appendedNodesCallback(node);
    }

    fragment.appendChild(node);
  });

  return fragment;
};

/**
 * Returns random day timestamp from range
 * @param {number} daysRange
 * @return {number}
 */
const getRandomDayInRange = (daysRange) => Date.now() + getRandom(-daysRange, daysRange) * DAY_IN_MILLISECONDS;

/**
 * Randomly shuffle an array
 * @param  {Array} array
 * @return {Array}
 */
const shuffleArray = function (array) {

  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;

};

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const monthNames = [
    `January`, `February`, `March`, `April`, `May`, `June`,
    `July`, `August`, `September`, `October`, `November`, `December`
  ];

  return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
};

const isExpired = (deadline) => {
  return DAYS_TO_DEADLINE >= (deadline - Date.now()) / DAY_IN_MILLISECONDS;
};

export default {getRandomArrayElement, getRandom, getNode, getRandomDayInRange, shuffleArray, formatDate, isExpired};
