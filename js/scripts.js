'use strict'

// helper function
function getPicture() {
  var response = prompt('Would you like your farmhouse decorated with Wyeth or Wood?');
  var painting;

  while(response != 'Wyeth' && response != 'Wood') {
    response = prompt('Sorry, Wyeth or Wood ONLY!');
  }

  if (response === 'Wyeth') {
    painting = '<img src="../images/dogonbed.jpg">';
  } else if (response === 'Wood') {
    painting = '<img src= "/images/agothic.jpg">';
  } 

  return painting;
}

// helper function
function getCount() {
  var count = prompt('Great! How many paintings would you like?');
  while(isNaN(count) || count === '') {
    count = prompt("PLEASE enter a number; how many would you like?");
  }
  return count;
}

function showOrder() {
  var result = '';
  var itemType = getPicture();
  var total = getCount();

  for(var i = 0; i < total; i++) {
    result = result + '<p>' + itemType + '</p>';
    console.log(result);
  }

  return document.write(result);
}

showOrder();