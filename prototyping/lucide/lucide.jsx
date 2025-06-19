import { createElement, Menu } from 'lucide';

const menuIcon = createElement(Menu, {
  class: ['my-custom-class', 'icon'],
  'stroke-width': 1,
  stroke: '#333'
}); // Returns HTMLElement (svg)

// Append HTMLElement in the DOM
const myApp = document.getElementById('app');
myApp.appendChild(menuIcon);