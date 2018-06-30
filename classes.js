// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  // The first example is done for you. Uncomment the line below and reload the browser.
  one()
    
  // Your turn! Create a new function called `two`, then call it from here.
  two()
  three()
  makeVisible()
}

function one () {
  // First, we have to find the element:
  var one = document.getElementById('one')

  // Next, we apply a new CSS class to it:
  one.classList.add('blue')
}

// CREATE FUNCTION two HERE
function two () {
  //First, find element to be changed using getElementbyId:
  var two = document.getElementById('two')

  //Next, add new class using toggle function:
  two.classList.toggle('green') 
}

// CREATE FUNCTION three HERE
function three () {
  var three = document.getElementById('three')
  three.classList.add('beige')
}

// CREATE FUNCTION makeVisible HERE
function makeVisible()  {
  var visible = document.getElementsByClassName('invisible')[0]
  visible.classList.add('visible')
}