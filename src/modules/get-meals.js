import { checkbtn } from './showComments.js';

const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=b';
const maindiv = document.querySelector('.meals');
// const popCard = document.querySelector('.pop-card');

const viewData = () => {
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

      mealStore.forEach((element) => {
        const mealsDiv = document.createElement('div');
        mealsDiv.classList.add('meals-div');
        mealsDiv.innerHTML = `
        <div class="meal-card">
          <img class="meal-img" src=${element.strMealThumb}>
          <div class="inner-part">
            <p>${element.strMeal}</p>
            <img alt="likes">
          </div>
          <p> 10 Likes</p>
          <button id= "${element.idMeal}" class="buttons" > Comments </button>
        </div>
        `;
        maindiv.appendChild(mealsDiv);
      });
    });
};

export { viewData };