/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];
  // Step 1: Write a function that will create a menu component as seen below:

  // <div class="menu">
  //   <ul>
  //     {each menu item as a list item}
  //   </ul>
  // </div>
function createMenuComponent(anyArray){
  const menu = document.createElement('div')
  const ul = document.createElement('ul')
  for (let i = 0; i < menuItems.length; i++){
   let temp = document.createElement('li')
    temp.textContent = menuItems[i]
    //temp.classList.add('li')
    ul.append(temp)
  }
  menu.append(ul)
  menu.classList.add('menu')
  console.log(ul)
 // ul.classList.add('ul')
  

  const menuButton = document.querySelector('.menu-button')
  menuButton.classList.add('menu-button')
 
  
  menuButton.addEventListener('click', event => {
    console.log("click", menu.classList)
  
          menu.classList.toggle("menu--open")
          console.log("classlist", menu.classList)
    
  }) 

  console.log("menu", menu)
  return menu
}
console.log("hi", createMenuComponent(menuItems))

const newMenu =  createMenuComponent(menuItems)
const header = document.querySelector('.header')
console.log("header", header)

header.prepend(newMenu)
console.log("newMenu", newMenu)

  // The function takes an array as its only argument.

  // Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  // Add those items to the <ul>

  // Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  // Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  // Step 5: return the menu component.

  // Step 6: add the menu component to the DOM.
  
