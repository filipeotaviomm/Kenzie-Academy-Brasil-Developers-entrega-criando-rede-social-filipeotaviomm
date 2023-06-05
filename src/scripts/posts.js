import { posts } from "./database.js";

function render(array) {
  let divContainer = document.querySelector(".postContainer");

  divContainer.innerHTML = "";

  for (let i = 0; i < array.length; i++) {
    let information = array[i];
    let article = createArticle(information);
    divContainer.appendChild(article);
  }
}

export function createArticle(postsInformation) {
  let divPost = document.createElement("div");
  let divPhotoDados = document.createElement("div");
  let imgPhoto = document.createElement("img");
  let divNameFunction = document.createElement("div");
  let h3Name = document.createElement("h3");
  let pFunction = document.createElement("p");
  let h1PostTitle = document.createElement("h1");
  let pPostDescription = document.createElement("p");
  let divButtonIcon = document.createElement("div");
  let buttonOpenPost = document.createElement("button");
  let iconHeart = document.createElement("i");
  let pLikes = document.createElement("p");

  //adds
  divPost.classList.add("post");
  divPhotoDados.classList.add("photo__dados");
  imgPhoto.src = postsInformation.img;
  imgPhoto.alt = postsInformation.user;
  divNameFunction.classList.add("name__function");
  h3Name.innerText = postsInformation.user;
  pFunction.innerText = postsInformation.stack;
  h1PostTitle.innerText = postsInformation.title;
  pPostDescription.innerText = `${postsInformation.text}`;
  divButtonIcon.classList.add("button-icon");
  buttonOpenPost.innerText = "Abrir Post";
  buttonOpenPost.dataset.postId = postsInformation.id;
  iconHeart.classList.add("fa-solid", "fa-heart");
  pLikes.innerText = postsInformation.likes;

  //apends
  divButtonIcon.append(buttonOpenPost, iconHeart, pLikes);
  divNameFunction.append(h3Name, pFunction);
  divPhotoDados.append(imgPhoto, divNameFunction);
  divPost.append(divPhotoDados, h1PostTitle, pPostDescription, divButtonIcon);

  return divPost;
}

render(posts);

function clickHeart() {
  let hearts = document.querySelectorAll(".fa-heart");

  for (let i = 0; i < hearts.length; i++) {
    let eachHeart = hearts[i];

    eachHeart.addEventListener("click", function (e) {
      if (e.target.classList.contains("active")) {
        e.target.classList.remove("active");
      } else {
        e.target.classList.add("active");
        // for (i = 0; i < posts.length; i++) {
        //   let eachPostLikes = posts[i].likes;
        //   console.log(eachPostLikes);
        // }
      }
    });
  }
}

clickHeart();
