const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=b';
const maindiv = document.querySelector('.meals');
const popCard = document.querySelector('.pop-card');

let mealsButton;
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
      let counter = 0
      data.meals.forEach((info) => {
        if (counter < 6) {
          mealStore.push(info)
          counter += 1;
        }
      })
      console.log(mealStore);
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

const showPop = (buttonId) => {
  console.log(buttonId);
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${buttonId}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      popCard.innerHTML = `
      <div>
        <p>${data.meals[0].strMeal}</p>
      </div>
      `
    })
  popCard.classList.toggle('pop-card')
}

const checkbtn = (event) => {
  if (event.target.classList.contains('buttons')) {
    // Handle button click event here
    // const mealName = event.target.closest('.meal-card').querySelector('p').textContent;
    // console.log('Button clicked for:', mealName);
    const buttonId = event.target.id;
    showPop(buttonId)

  }
};

document.addEventListener('DOMContentLoaded', () => {
  viewData();
  maindiv.addEventListener('click', checkbtn); // Attach the event listener to the parent container
});

module.exports = viewData; 