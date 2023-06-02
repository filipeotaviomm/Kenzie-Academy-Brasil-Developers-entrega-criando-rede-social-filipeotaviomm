import { users, posts, suggestUsers } from "./database.js";

function showArticlesModal(array) {
  let modalController = document.querySelector(".modal-article__controller");
  let articleButtons = document.querySelectorAll(".button-icon > button");

  let articleFound = {};

  for (let i = 0; i < articleButtons.length; i++) {
    let articBtn = articleButtons[i];

    articBtn.addEventListener("click", function (e) {
      modalController.innerHTML = "";

      for (let j = 0; j < posts.length; j++) {
        if (posts[j].id == e.target.dataset.postId) {
          articleFound = posts[j];
        }
      }

      let articCard = createModal(articleFound);
      // let modalList = document.createElement("div");

      modalController.appendChild(articCard);
      // modalController.appendChild(modalList);

      modalController.showModal();

      closeModal();
    });
  }
}

function createModal(postsInformation) {
  let divPost = document.createElement("div");
  let divPhotoDados = document.createElement("div");
  let divAlignImgH3P = document.createElement("div");
  let imgPhoto = document.createElement("img");
  let divNameFunction = document.createElement("div");
  let h3Name = document.createElement("h3");
  let pFunction = document.createElement("p");
  let buttonX = document.createElement("button");
  let h1PostTitle = document.createElement("h1");
  let pPostDescription = document.createElement("p");

  //adds
  divPost.classList.add("post");
  divPhotoDados.classList.add("photo__dados");
  divAlignImgH3P.classList.add("photo__dados");
  imgPhoto.src = postsInformation.img;
  imgPhoto.alt = postsInformation.user;
  divNameFunction.classList.add("name__function");
  h3Name.innerText = postsInformation.user;
  pFunction.innerText = postsInformation.stack;
  buttonX.innerText = "X";
  h1PostTitle.innerText = postsInformation.title;
  pPostDescription.innerText = `${postsInformation.text}`;

  //apends
  divNameFunction.append(h3Name, pFunction);
  divAlignImgH3P.append(imgPhoto, divNameFunction);
  divPhotoDados.append(divAlignImgH3P, buttonX);
  divPost.append(divPhotoDados, h1PostTitle, pPostDescription);

  return divPost;
}

showArticlesModal(posts);

function closeModal() {
  let buttonClose = document.querySelector(".photo__dados > button");
  let modalContainer = document.querySelector(".modal-article__controller");

  buttonClose.addEventListener("click", function () {
    modalContainer.close();
  });
}
