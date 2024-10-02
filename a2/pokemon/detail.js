let storage_data = localStorage.getItem("data");
let storage_pokeNum = localStorage.getItem("pokeNum");
let data = JSON.parse(storage_data);
let pokeNum = Number(storage_pokeNum);

let imageWrapper = document.createElement("div");
let image = document.createElement("img");
let title = document.createElement("h2");
let infoTable = document.createElement("table");
let infoTableBody = document.createElement("tbody");
