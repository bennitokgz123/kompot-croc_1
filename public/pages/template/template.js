'use strict';

import { BASE_LIST_URL } from '/global/global.js';
import { BASE_BOT_URL } from '/global/global.js';

// Редирект с /template на /template.html
if (window.location.pathname === '/template') {
  window.location.replace('/template.html' + window.location.search);
}

window.addEventListener('DOMContentLoaded', async () => {
  const templateImage = document.querySelector('#templateImage');
  const urlParams = new URLSearchParams(window.location.search);
  const pcParam = urlParams.get('pc');
  const catParam = urlParams.get('cat');

  const reqraw = await fetch(`${BASE_LIST_URL}/api/pc_list`);
  const req = await reqraw.json();

  const pcid = pcParam;
  if (!req.list[pcid]) {
    location.href = '/';
    return;
  }

  let cat = {
    1: '/ggwp',
    2: '/rare',
    3: '/press-f',
    4: '/mvp',
  };

  const item = req.list[pcid];

  // Назначение ссылки "Назад"
  const backLink = catParam !== null ? cat[catParam] : cat[item.cat];
  document.querySelector('#templateButtonBack').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = backLink;
  });

  document.querySelector('#num').innerText = item.id;

  if (item.cat === 4) {
    document.querySelector('#votebtn').style.display = 'none';
  }

  document.querySelector('#votebtn').href = `${BASE_BOT_URL}?start=${item.id}`;

  Object.values(item.spec).forEach((spec, i) => {
    document.querySelector(`#spec${i + 1}`).innerText = spec;
  });

  item.photos.forEach((photo) => {
    const newImgItem = templateImage.cloneNode(true);
    newImgItem.style.backgroundImage = `url(${BASE_LIST_URL}/images/${photo})`;
    document.querySelector('#templateImageWrapper').appendChild(newImgItem);
  });
});
