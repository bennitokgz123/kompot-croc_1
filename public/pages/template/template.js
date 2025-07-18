'use strict';
import { BASE_LIST_URL } from '/global/global.js';
import { BASE_BOT_URL } from '/global/global.js';

window.addEventListener('DOMContentLoaded', async () => {
  const templateImage = document.querySelector('#templateImage');
  const urlParams = new URLSearchParams(window.location.search);
  const pcParam = urlParams.get('pc');
  const catParam = urlParams.get('cat');

  const reqraw = await fetch(`${BASE_LIST_URL}/api/pc_list`);

  const req = await reqraw.json();

  function findIndexById(arr, id) {
    const index = arr.findIndex((item) => item.id == id);
    return index !== -1 ? index : false;
  }

  const pcid = pcParam;
  if (!req.list[pcid]) {
    location.href = '/';
  }

  let cat = {
    1: '/ggwp',
    2: '/rare',
    3: '/press-f',
    4: '/mvp',
  };

  if (pcParam) {
    let item = req.list[pcid];

    document.querySelector(`#templateButtonBack`).href = catParam !== null ? cat[catParam] : cat[item.cat];

    document.querySelector(`#num`).innerText = item.id;
    if (item.cat === 4) {
      document.querySelector(`#votebtn`).style.display = 'none';
    }
    document.querySelector(`#votebtn`).href = `${BASE_BOT_URL}?start=${item.id}`;

    Object.values(item.spec).forEach((spec, i) => {
      document.querySelector(`#spec${i + 1}`).innerText = spec;
    });

    item.photos.forEach((photo) => {
      const newImgItem = templateImage.cloneNode(true);
      newImgItem.style.backgroundImage = `url(${BASE_LIST_URL}/images/${photo})`;
      document.querySelector(`#templateImageWrapper`).appendChild(newImgItem);
    });
  }
});
