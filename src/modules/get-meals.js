const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=b';
const maindiv = document.querySelector('.meals');

const viewData = () => {
  fetch(url, { mode: 'cors' }, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      data.meals.forEach((element) => {
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
          <button class="buttons" value="comments"> Comments </button>
        </div>
        `;
        maindiv.appendChild(mealsDiv);
      });
    });
};

module.exports = viewData;