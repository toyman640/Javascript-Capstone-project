import { viewData } from "./get-meals.js";

const involvementApiUrl =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/";
const involvementApiKey = "ZK7L9O03um9L7PbilCjp";

// const ViewMeals = document.querySelector(".meals");
// const displayMeals = document.querySelector(".displayCards");

const createPop = () => {
    const body = document.querySelector('body');
    const div = document.createElement('div');
    let county = 0;

    viewData.forEach((api) => {
        const popupC = `
    <div class="popup">
    <img class="close" onclick="this.parentNode.style.display = 'none';" src="https://static.vecteezy.com/system/resources/thumbnails/020/048/793/small/x-transparent-background-free-png.png">
      <div class="popup-container">
      <img class="popImg" src="${api[0].strMealThumb}">
      <h3 class="FoodName">${api[0].strMeal}</h3>
      <p class="ingredients">
      The Ingredients
      </p>
      <div class="ingredientC">
      ${api[0].strIngredient1},
      ${api[0].strIngredient2},
      ${api[0].strIngredient3},
      ${api[0].strIngredient4},
      ${api[0].strIngredient5},
      ${api[0].strIngredient6},
      ${api[0].strIngredient7},
      ${api[0].strIngredient8},
      ${api[0].strIngredient9},
      ${api[0].strIngredient10},
      ${api[0].strIngredient11},
      ${api[0].strIngredient12},
      ${api[0].strIngredient13},
      ${api[0].strIngredient14},
      ${api[0].strIngredient15},
      ${api[0].strIngredient16}
      ${api[0].strIngredient17}
      ${api[0].strIngredient18}
      ${api[0].strIngredient19}
      ${api[0].strIngredient20}
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
      <div class="idMeal">${api[0].idMeal}</div>
      </form>
      </div>
      </div>
      `;
        get(`"${api[0].idMeal}"`, county);
    
        county += 1;
        div.innerHTML += popupC;
      });
      body.appendChild(div);
    };
    
    window.setTimeout(() => {
      const popButton = document.querySelectorAll('.buttons');
    
      for (let i = 0; i < popButton.length; i += 1) {
        popButton[i].addEventListener('click', () => {
          document.querySelectorAll('.popup')[i].style.display = 'flex';
        });
      }
    }, 3000);