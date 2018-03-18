'use strict';

const xhr = new XMLHttpRequest();
function ask() {
  
  xhr.addEventListener("readystatechange", onLoad);
  xhr.open("GET", 'https://neto-api.herokuapp.com/comet/long-pooling', true);
  xhr.send();
}
function onLoad() {
  console.log('load');
//  setTimeout(ask(), 100);
  ask();
}

setTimeout(ask(), 100);

