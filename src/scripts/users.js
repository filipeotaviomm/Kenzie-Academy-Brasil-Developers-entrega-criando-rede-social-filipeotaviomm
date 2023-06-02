import { users, posts, suggestUsers } from "./database.js";

function render(array) {
  let divContainer = document.querySelector(".aside__container");

  divContainer.innerHTML = "";

  for (let i = 0; i < array.length; i++) {
    let information = array[i];
    let article = createArticle(information);
    divContainer.appendChild(article);
  }
}

function createArticle(usersInformation) {
  let divAlignRow = document.createElement("div");
  let divImgDiv = document.createElement("div");
  let imgUser = document.createElement("img");
  let divH3P = document.createElement("div");
  let h3Name = document.createElement("h3");
  let pFunction = document.createElement("p");
  let buttonFollow = document.createElement("button");

  //adds
  divAlignRow.classList.add("aside__align-row");
  divImgDiv.classList.add("aside__align-elements");
  imgUser.src = usersInformation.img;
  divH3P.classList.add("aside__name-function");
  h3Name.innerText = usersInformation.user;
  pFunction.innerText = usersInformation.stack;
  buttonFollow.classList.add("aside__button");
  buttonFollow.innerText = "Seguir";

  //apends
  divH3P.append(h3Name, pFunction);
  divImgDiv.append(imgUser, divH3P);
  divAlignRow.append(divImgDiv, buttonFollow);

  return divAlignRow;
}

render(users);

function clickFollowingButton() {
  let followButtons = document.querySelectorAll(".aside__button");

  for (let i = 0; i < followButtons.length; i++) {
    let eachFollowButton = followButtons[i];

    eachFollowButton.addEventListener("click", function (e) {
      if (e.target.classList.contains("following")) {
        e.target.classList.remove("following");
        e.target.innerText = "Seguir";
      } else {
        e.target.classList.add("following");
        e.target.innerText = "Seguindo";
      }
    });
  }
}

clickFollowingButton();
