import Love from './love.png';
import countItems from './items-count.js';

const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=b';
const maindiv = document.querySelector('.meals');
const mealsNum = document.querySelector('.meals-count');

const viewData = (pageLikes) => {
  fetch(url, { mode: 'cors' }, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const mealStore = [];
      let counter = 0;
      data.meals.forEach((info) => {
        if (counter < 6) {
          mealStore.push(info);
          counter += 1;
        }
      });
      const mealCounter = countItems(mealStore);
      mealsNum.innerHTML = `(${mealCounter})`;
      mealStore.forEach((element) => {
        const id = element.idMeal;
        const mealLikes = pageLikes.find((like) => like.item_id === id);
        const mealsDiv = document.createElement('div');
        mealsDiv.classList.add('meals-div');
        mealsDiv.innerHTML = `
        <div class="meal-card">
          <img class="meal-img" src=${element.strMealThumb}>
          <div class="inner-part">
            <p>${element.strMeal}</p>
            <button id= "${element.idMeal}" class="likes-button"><img alt="likes" class="likes-icon" src="${Love}"></button>
          </div>
          <p id="likes-count-${element.idMeal}" class="likes-count" >${mealLikes ? mealLikes.likes : 0} Likes</p>
          <button id= "${element.idMeal}" class="buttons" > Comments </button>
        </div>
        `;
        maindiv.appendChild(mealsDiv);
      });
    });
};

export default viewData;