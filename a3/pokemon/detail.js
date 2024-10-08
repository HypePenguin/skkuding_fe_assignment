let storage_data = localStorage.getItem("data");
let storage_pokeNum = localStorage.getItem("pokeNum");
let data = JSON.parse(storage_data);
let pokeNum = Number(storage_pokeNum);

let imageWrapper = document.createElement("div");
let image = document.createElement("img");
let title = document.createElement("h2");
let infoTable = document.createElement("table");
let infoTableBody = document.createElement("tbody");

imageWrapper.setAttribute("class", "img-wrapper");
infoTable.setAttribute("class", "info-table");
infoTableBody.setAttribute("class", "info-table-body");

let link = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + pokeNum +".png";
let cardSpecific = document.getElementsByClassName("card-specific")[0];

cardSpecific.appendChild(imageWrapper);
cardSpecific.appendChild(title);
cardSpecific.appendChild(infoTable);
infoTable.appendChild(infoTableBody);
imageWrapper.appendChild(image);

let keys = Object.keys(data);

title.innerHTML = data[keys[0]];

image.setAttribute("src", link);
image.setAttribute("alt", data[keys[0]]);

for (let i=0; i < 11; i++){
  let tableRow = document.createElement("tr");
  let domain_1 = document.createElement("td");
  let domain_2 = document.createElement("td");

  domain_1.innerHTML = keys[i+1];
  domain_2.innerHTML = data[keys[i+1]];
  tableRow.appendChild(domain_1);
  tableRow.appendChild(domain_2);

  infoTableBody.appendChild(tableRow);
}