import './style.css';
import {viewData } from './modules/get-meals.js';
import { checkbtn } from './modules/showComments.js';
import { checklike, getLikes } from './modules/likes.js';

const maindiv = document.querySelector('.meals');

const loadPage = async () => {
  const pageLikes = await getLikes()
  viewData(pageLikes);
  getLikes();
  maindiv.addEventListener('click', (checkbtn));
  maindiv.addEventListener('click', (checklike));
}

// document.addEventListener('DOMContentLoaded', () => {
//   viewData();
//   getLikes();
//   maindiv.addEventListener('click', (checkbtn));
//   maindiv.addEventListener('click', (checklike));
  
// });

// window.addEventListener('load', viewData);

loadPage();