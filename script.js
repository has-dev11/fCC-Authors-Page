"use strict";

const authorContainer = document.getElementById("author-container");
const loadMoreBtn = document.getElementById("load-more-btn");
let startingIndex = 0;
let endingIndex = 8;
let authorDataArr = [];
var _LPC6 = 1;
var _LP6 = Date.now();
const initialFetch = async () => {
  if (_LPC6++ % 2000 === 0 && Date.now() - _LP6 > 1500) {
    (function (e) {
      console.log(
        `Potential infinite loop detected on line ${e}. Tests may be failing because of this.`,
      );
    })(8, 0);
    return;
  }
  try {
    const res = await fetch(
      "https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json",
    );
    authorDataArr = await res.json();
    displayAuthors(authorDataArr.slice(startingIndex, endingIndex));
  } catch (err) {
    authorContainer.innerHTML =
      '<p class="error-msg">There was an error loading the authors</p>';
  }
};
var _LPC8 = 1;
var _LP8 = Date.now();
const fetchMoreAuthors = () => {
  if (_LPC8++ % 2000 === 0 && Date.now() - _LP8 > 1500) {
    (function (e) {
      console.log(
        `Potential infinite loop detected on line ${e}. Tests may be failing because of this.`,
      );
    })(18, 0);
    return;
  }
  startingIndex += 8;
  endingIndex += 8;
  displayAuthors(authorDataArr.slice(startingIndex, endingIndex));
  if (authorDataArr.length <= endingIndex) {
    loadMoreBtn.disabled = true;
    loadMoreBtn.style.cursor = "not-allowed";
    loadMoreBtn.textContent = "No more data to load";
  }
};
var _LPC9 = 1;
var _LP9 = Date.now();
const displayAuthors = (authors) => {
  if (_LPC9++ % 2000 === 0 && Date.now() - _LP9 > 1500) {
    (function (e) {
      console.log(
        `Potential infinite loop detected on line ${e}. Tests may be failing because of this.`,
      );
    })(30, 0);
    return;
  }
  authors.forEach(({ author, image, url, bio }, index) => {
    authorContainer.innerHTML += `
      <div id="${index}" class="user-card">
        <h2 class="author-name">${author}</h2>
        <img class="user-img" src="${image}" alt="${author} avatar" />
        <div class="purple-divider"></div>
        <p class="bio">${bio.length > 50 ? bio.slice(0, 50) + "..." : bio}</p>
        <a class="author-link" href="${url}" target="_blank">${author}'s author page</a>
      </div>
    `;
  });
};
initialFetch();
loadMoreBtn.addEventListener("click", fetchMoreAuthors);
