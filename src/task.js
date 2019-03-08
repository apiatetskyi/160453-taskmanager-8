import util from './util';

const DUE_DATA_RANGE = 7;

/**
 * Returns string with HTML-markup for task card
 * @param {Object} taskData
 * @return {string}
 */
const getMarkup = (taskData) => {
  const isRepeating = Object.keys(taskData.repeatingDays).some((value) => value);
  const hashTags = [...taskData.tags].reduce((marhup, tagTitle) => {
    return `${marhup}
      <span class="card__hashtag-inner">
        <input
          type="hidden"
          name="hashtag"
          value="repeat"
          class="card__hashtag-hidden-input"
        />
        <button type="button" class="card__hashtag-name">
          ${tagTitle}
        </button>
        <button type="button" class="card__hashtag-delete">
          delete
        </button>
      </span>`;
  }, ``);

  return `
  <article class="card card--${taskData.color}
                  card--edit ${isRepeating ? `card--repeat` : ``}
                  ${util.isExpired(taskData.dueDate) && !taskData.isDone ? `card--deadline` : ``}
                  " style="margin-bottom: 300px">
    <form class="card__form" method="get">
      <div class="card__inner">
        <div class="card__control">
          <button type="button" class="card__btn card__btn--edit">
            edit
          </button>
          <button type="button" class="card__btn card__btn--archive">
            archive
          </button>
          <button
            type="button"
            class="card__btn card__btn--favorites ${!taskData.isFavorite ? `card__btn--disabled` : ``}"
          >
            favorites
          </button>
        </div>

        <div class="card__color-bar">
          <svg class="card__color-bar-wave" width="100%" height="10">
            <use xlink:href="#wave"></use>
          </svg>
        </div>

        <div class="card__textarea-wrap">
          <label>
            <textarea
              class="card__text"
              placeholder="Start typing your text here..."
              name="text"
            >${taskData.title}</textarea>
          </label>
        </div>

        <div class="card__settings">
          <div class="card__details">
            <div class="card__dates">
              <button class="card__date-deadline-toggle" type="button">
                date: <span class="card__date-status">${taskData.dueDate ? util.formatDate(taskData.dueDate) : `no`}</span>
              </button>

              <fieldset class="card__date-deadline" disabled>
                <label class="card__input-deadline-wrap">
                  <input
                    class="card__date"
                    type="text"
                    placeholder="23 September"
                    name="date"
                  />
                </label>
                <label class="card__input-deadline-wrap">
                  <input
                    class="card__time"
                    type="text"
                    placeholder="11:15 PM"
                    name="time"
                  />
                </label>
              </fieldset>

              <button class="card__repeat-toggle" type="button">
                repeat:<span class="card__repeat-status">${isRepeating ? `yes` : `no`}</span>
              </button>

              <fieldset class="card__repeat-days" disabled>
                <div class="card__repeat-days-inner">
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-mo-5"
                    name="repeat"
                    value="mo"
                  />
                  <label class="card__repeat-day" for="repeat-mo-5"
                    >mo</label
                  >
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-tu-5"
                    name="repeat"
                    value="tu"
                    checked
                  />
                  <label class="card__repeat-day" for="repeat-tu-5"
                    >tu</label
                  >
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-we-5"
                    name="repeat"
                    value="we"
                  />
                  <label class="card__repeat-day" for="repeat-we-5"
                    >we</label
                  >
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-th-5"
                    name="repeat"
                    value="th"
                  />
                  <label class="card__repeat-day" for="repeat-th-5"
                    >th</label
                  >
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-fr-5"
                    name="repeat"
                    value="fr"
                    checked
                  />
                  <label class="card__repeat-day" for="repeat-fr-5"
                    >fr</label
                  >
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    name="repeat"
                    value="sa"
                    id="repeat-sa-5"
                  />
                  <label class="card__repeat-day" for="repeat-sa-5"
                    >sa</label
                  >
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-su-5"
                    name="repeat"
                    value="su"
                    checked
                  />
                  <label class="card__repeat-day" for="repeat-su-5"
                    >su</label
                  >
                </div>
              </fieldset>
            </div>

            <div class="card__hashtag">
              <div class="card__hashtag-list">
                ${hashTags}
              </div>

              <label>
                <input
                  type="text"
                  class="card__hashtag-input"
                  name="hashtag-input"
                  placeholder="Type new hashtag here"
                />
              </label>
            </div>
          </div>

          <label class="card__img-wrap card__img-wrap--empty">
            <input
              type="file"
              class="card__img-input visually-hidden"
              name="img"
            />
            <img
              src="${taskData.picture ? taskData.picture : `img/add-photo.svg`}"
              alt="task picture"
              class="card__img"
            />
          </label>

          <div class="card__colors-inner">
            <h3 class="card__colors-title">Color</h3>
            <div class="card__colors-wrap">
              <input
                type="radio"
                id="color-black-5"
                class="card__color-input card__color-input--black visually-hidden"
                name="color"
                value="black"
              />
              <label
                for="color-black-5"
                class="card__color card__color--black"
                >black</label
              >
              <input
                type="radio"
                id="color-yellow-5"
                class="card__color-input card__color-input--yellow visually-hidden"
                name="color"
                value="yellow"
              />
              <label
                for="color-yellow-5"
                class="card__color card__color--yellow"
                >yellow</label
              >
              <input
                type="radio"
                id="color-blue-5"
                class="card__color-input card__color-input--blue visually-hidden"
                name="color"
                value="blue"
              />
              <label
                for="color-blue-5"
                class="card__color card__color--blue"
                >blue</label
              >
              <input
                type="radio"
                id="color-green-5"
                class="card__color-input card__color-input--green visually-hidden"
                name="color"
                value="green"
                checked
              />
              <label
                for="color-green-5"
                class="card__color card__color--green"
                >green</label
              >
              <input
                type="radio"
                id="color-pink-5"
                class="card__color-input card__color-input--pink visually-hidden"
                name="color"
                value="pink"
              />
              <label
                for="color-pink-5"
                class="card__color card__color--pink"
                >pink</label
              >
            </div>
          </div>
        </div>

        <div class="card__status-btns">
          <button class="card__save" type="submit">save</button>
          <button class="card__delete" type="button">delete</button>
        </div>
      </div>
    </form>
  </article>`;
};

/**
 * Returns randomly generated data for task card
 * @return {Object}
 */
const getData = () => {
  const dataStorage = {
    titles: [`Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`],
    colors: [`black`, `pink`, `yellow`, `blue`, `green`],
    tags: [`homework`, `theory`, `practice`, `intensive`, `keks`, `sport`],
  };

  return {
    title: util.getRandomArrayElement(dataStorage.titles),
    dueDate: util.getRandomDayInRange(DUE_DATA_RANGE),
    tags: new Set(util.shuffleArray(dataStorage.tags).slice(0, util.getRandom(0, 3))),
    picture: `http://picsum.photos/100/100?r=${Math.random()}`,
    color: util.getRandomArrayElement(dataStorage.colors),
    repeatingDays: {
      Mo: Math.random() >= 0.5,
      Tu: Math.random() >= 0.5,
      We: Math.random() >= 0.5,
      Th: Math.random() >= 0.5,
      Fr: Math.random() >= 0.5,
      Sa: Math.random() >= 0.5,
      Su: Math.random() >= 0.5,
    },
    isFavorite: Math.random() >= 0.5,
    isDone: Math.random() >= 0.5,
  };
};

/**
 * Returns fragment with list of task nodes
 * @param {number} count
 * @return {Node}
 */
const getList = (count) => {
  const tasksData = [];

  for (let i = 0; i < count; i++) {
    tasksData.push(getData());
  }

  const tasksHtml = tasksData.reduce((markup, data) => {
    return markup + getMarkup(data);
  }, ``);

  return util.getNode(tasksHtml);
};

export default {getMarkup, getData, getList};
