const popCard = document.querySelector('.pop-card');

const showPop = (buttonId) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${buttonId}`)
    .then((res) => res.json())
    .then((data) => {
      popCard.innerHTML = `
      <div class="popup">
    <img class="close" onclick="this.parentNode.style.display = 'none';" src="https://static.vecteezy.com/system/resources/thumbnails/020/048/793/small/x-transparent-background-free-png.png">
      <div class="popup-container">
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
      ${data.meals[0].strIngredient9},
      ${data.meals[0].strIngredient10},
      ${data.meals[0].strIngredient11},
      ${data.meals[0].strIngredient12},
      ${data.meals[0].strIngredient13},
      ${data.meals[0].strIngredient14},
      ${data.meals[0].strIngredient15},
      ${data.meals[0].strIngredient16}
      ${data.meals[0].strIngredient17}
      ${data.meals[0].strIngredient18}
      ${data.meals[0].strIngredient19}
      ${data.meals[0].strIngredient20}
      </div>
      <div class="commentTitle">
      &nbsp;Comments&nbsp;[<span class="commentC">0</span>]
      </div>
      <div class="comments">
      </div><br>
      <form class="flexForm">
      <div class="commentTitle" align="center">
      Add comment
      </div>
      <input type="text" class="username" placeholder="username"><br>
      <textarea id="msg" name="user_message" placeholder="Your insight" required maxlength="500"></textarea><br>
      <button class="submit" type="button">Comment</button>
      <div class="idMeal">${data.meals[0].idMeal}</div>
      </form>
      </div>
      </div>
      `;
    });
  popCard.classList.toggle('pop-card');
};

const checkbtn = (event) => {
  if (event.target.classList.contains('buttons')) {
    // Handle button click event here
    // const mealName = event.target.closest('.meal-card').querySelector('p').textContent;
    // console.log('Button clicked for:', mealName);
    const buttonId = event.target.id;
    showPop(buttonId);
  }
};

export { checkbtn };