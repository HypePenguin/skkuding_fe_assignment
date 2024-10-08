import data from "./pokemon_data.js"

data.map((element, index)=>{
  let name = element.name;
  let height = element.height;
  let weight = element.weight;
  let types = element.types;

  let height_text = "키: " + height + "dm";
  let weight_text = "몸무게: " + weight + "hg";
  let types_text = "타입: ";
  
  if (types.length > 0){
    types_text += types[0];
  }
  for (let i = 1; i < types.length; i++){
    types_text += ", " + types[i];
  }

  let cardBox = document.createElement("a");
  let image = document.createElement("img");
  let infoWrapper = document.createElement("div");
  let title = document.createElement("h4");
  let info_1 = document.createElement("div");
  let info_2 = document.createElement("div");
  let info_3 = document.createElement("div");

  infoWrapper.appendChild(title);
  infoWrapper.appendChild(info_1);
  infoWrapper.appendChild(info_2);
  infoWrapper.appendChild(info_3);
  cardBox.appendChild(image);
  cardBox.appendChild(infoWrapper);

  let imageLink = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + (index+1) + ".png";
  cardBox.setAttribute("href", "./pokemon/detail.html");
  cardBox.setAttribute("class", "card");
  image.setAttribute("src", imageLink);
  image.setAttribute("alt", name);
  image.setAttribute("class", "card-image");
  infoWrapper.setAttribute("class", "info-wrapper");
  title.setAttribute("class", "info-wrapper");
  title.innerHTML = name;
  info_1.innerHTML = height_text;
  info_2.innerHTML = weight_text;
  info_3.innerHTML = types_text;

  cardBox.addEventListener('click', ()=>{
    let target = JSON.stringify(data[index]);
    localStorage.setItem("data", target);
    localStorage.setItem("pokeNum", index+1);
  })
  let cardWrapper = document.getElementsByClassName("card-wrapper");
  cardWrapper[0].appendChild(cardBox);
})


