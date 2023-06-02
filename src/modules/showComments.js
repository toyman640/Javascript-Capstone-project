import keepComment from './addcomment.js';
import getComment from './getcomment.js';

const popCard = document.querySelector('.pop-card');
const mealsDiv = document.querySelector('.meals');

const showPop = (buttonId) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${buttonId}`)
    .then((res) => res.json())
    .then((data) => {
      popCard.innerHTML = `
      <div class="card">
      
      <div class="popup-container">
      <button class="closeBtn"><img class="close" src="https://static.vecteezy.com/system/resources/thumbnails/020/048/793/small/x-transparent-background-free-png.png"></button>
      <img class="popImg" src="${data.meals[0].strMealThumb}">
      <h3 class="FoodName">${data.meals[0].strMeal}</h3>
      <p class="ingredients">
      The Ingredients
      </p>
      <div class="ingredientC">
      ${data.meals[0].strIngredient1},
      ${data.meals[0].strIngredient2},
      ${data.meals[0].strIngredient3},
      ${data.meals[0].strIngredient4},
      ${data.meals[0].strIngredient5},
      ${data.meals[0].strIngredient6},
      ${data.meals[0].strIngredient7},
      ${data.meals[0].strIngredient8},
      </div>
      <div class="comments">
      </div><br>
      <form class="flexForm">
      <div class="commentTitle" align="center">
      Add comment
      </div>
      <input type="hidden" id="commentId" class="username" value="${data.meals[0].idMeal}"><br>
      <input type="text" id="name" class="username" placeholder="username"><br>
      <textarea id="msg" name="user_message" placeholder="Your insight" required maxlength="500"></textarea><br>
      <button id="commentBtn" class="submit" type="button">Comment</button>
      <div class="idMeal">${data.meals[0].idMeal}</div>
      </form>
      </div>
      </div>
      `;
      const closeBtn = document.querySelector('.closeBtn');
      const closePop = () => {
        popCard.classList.toggle('pop-card');
        mealsDiv.classList.toggle('blur');
      };
      closeBtn.addEventListener('click', closePop);
      const commentButton = document.getElementById('commentBtn');
      commentButton.addEventListener('click', async () => {
        keepComment();
        setTimeout(getComment, 3000);
      });
      getComment();
    });

  popCard.classList.toggle('pop-card');
  mealsDiv.classList.toggle('blur');
};

const checkbtn = (event) => {
  if (event.target.classList.contains('buttons')) {
    const buttonId = event.target.id;
    showPop(buttonId);
  }
};

export default checkbtn;