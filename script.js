"use strict";

document.addEventListener("DOMContentLoaded", function () {
  let firstClickParagraph1 = true;
  let firstClickParagraph2 = true;

  document.getElementById("paragraph1").addEventListener("click", function () {
    if (firstClickParagraph1) {
      this.style.color = "white";
      this.style.backgroundColor = "blue";
      firstClickParagraph1 = false;
    } else if (!firstClickParagraph2) {
      this.style.color = "black";
      this.style.backgroundColor = "lime";
      document.querySelector("#paragraph2").style.color = "white";
      document.querySelector("#paragraph2").style.backgroundColor = "blue";
    }
  });

  document.querySelector("#paragraph2").addEventListener("click", function () {
    if (firstClickParagraph2) {
      this.style.color = "black";
      this.style.backgroundColor = "lime";
      firstClickParagraph2 = false;
    } else if (!firstClickParagraph1) {
      this.style.color = "white";
      this.style.backgroundColor = "blue";
      document.querySelector("#paragraph1").style.color = "black";
      document.getElementById("paragraph1").style.backgroundColor = "lime";
    }
  });
});

const addImage = () => {
  const img = document.getElementById("Lviv");
  if (img.style.display === "none") {
    img.style.display = "block";
  } else if (!img) {
    img = document.createElement("img");
    img.id = "Lviv";
    img.src = "Lviv.jpg";
    img.alt = "Фото міста";
    document.body.appendChild(img);
  }
};

const removeImage = () => {
  const img = document.getElementById("Lviv");
  if (img) {
    img.style.width = "";
    img.style.height = "";
    img.style.display = "none";
  }
};

function setImageVisibility(visible) {
  const img = document.getElementById("Lviv");
  img.style.display = visible ? "block" : "none";
}

function changeImageSize(delta) {
  const img = document.getElementById("Lviv");
  const newSize = img.clientWidth + delta;
  if (newSize > 0) {
    img.style.width = `${newSize}px`;
  }
}

const enlargeImage = () => changeImageSize(10);
const reduceImage = () => changeImageSize(-10);
