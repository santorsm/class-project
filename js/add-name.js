'use strict'

function getName() {
  var userName = prompt('What\'s your name?');
  return document.write ('<h1> Welcome ' + userName + ', this is our farmhouse!</h1>');
}

getName();