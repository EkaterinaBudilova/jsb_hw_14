'use strict';

const wss = new WebSocket('wss://neto-api.herokuapp.com/comet/websocket');

let cards = document.querySelectorAll('section.websocket>div');
let curCard = cards[0];

wss.addEventListener('open', () => {
  console.log('Вебсокет-соединение открыто');
});

wss.addEventListener('message', event => {
  console.log(event.data);
  curCard.classList.remove('flip-it');
  curCard = cards[event.data-1];
  curCard.classList.add('flip-it');
});
