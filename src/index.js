import './style.css';
import viewData from './modules/get-meals.js';
import checkbtn from './modules/showComments.js';
import { checklike, getLikes } from './modules/likes.js';
import icon from './asset/icon-logo.png';

const iconLogo = document.querySelector('.logo');
iconLogo.src = icon;
const maindiv = document.querySelector('.meals');

const loadPage = async () => {
  const pageLikes = await getLikes();
  viewData(pageLikes);
  getLikes();
  maindiv.addEventListener('click', (checkbtn));
  maindiv.addEventListener('click', (checklike));
};
loadPage();
