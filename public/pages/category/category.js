"use strict";
import { BASE_LIST_URL } from '/global/global.js';
import { BASE_BOT_URL } from '/global/global.js';

window.addEventListener("DOMContentLoaded", async () => {
  const catlist = {
    "/ggwp": 1,
    "/rare": 2,
    "/press-f": 3,
    "/mvp": 4,
  };

  const pctemplate = document.querySelector("#pcitem");
  const itemsContainerId = document.querySelector("#collectiongrid");
  const catID = catlist[location.pathname];

  const reqraw = await fetch(`${BASE_LIST_URL}/api/pc_list`);

  const req = await reqraw.json();

  const filler = (prefix, template, container, item, mvp_click = false) => {
    const newItem = template.cloneNode(true);
    newItem.href = `/template?pc=${item.id}&cat=${catlist[location.pathname]}`;
    newItem.querySelector("#likes").innerText = item.likes;
    if (mvp_click) {
      newItem.querySelector("#likestag").style.display = "none";
    }
    newItem.querySelector("#num").innerText = item.id;
    newItem.querySelector("#price").innerText = item.price ? ">100" : "<100";
    newItem.querySelector(
      "#bg"
    ).style.backgroundImage = `url(${BASE_LIST_URL}/images/${item.photos[0]})`;

    container.appendChild(newItem);
  };

  const nom1 = Object.values(req.list)
    .filter((e) => {
      if (location.pathname === "/mvp" && e.mvp) {
        return true;
      }
      return e.cat === catID;
    })
    .sort((a, b) => b.likes - a.likes);

  if (nom1.length) {
    nom1.forEach((e) => filler("", pctemplate, itemsContainerId, e));
  }
});