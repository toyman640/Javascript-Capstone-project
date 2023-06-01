import './style.css';
import {viewData } from './modules/get-meals.js';
import { checkbtn } from './modules/showComments.js';

const maindiv = document.querySelector('.meals');

document.addEventListener('DOMContentLoaded', () => {
  viewData();
  maindiv.addEventListener('click', checkbtn); // Attach the event listener to the parent container
});

// window.addEventListener('load', viewData);
