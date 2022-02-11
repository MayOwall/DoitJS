function addDomTree() {
  const box = document.querySelector("#article4 .box");
  const button = box.querySelector("button");
  button.style.display = "none";

  const createP = document.createElement("p");
  createP.innerText = "돔 트리는 네모네모해~";

  const createImg = document.createElement("img");
  createImg.setAttribute("src", "IMG/domtree.png");

  const createDelButton = document.createElement("button");
  createDelButton.innerText = "설명 닫기";
  createDelButton.setAttribute("onclick", "delDomTree()");

  box.appendChild(createP);
  box.appendChild(createImg);
  box.appendChild(createDelButton);
};

function delDomTree() {
  const box = document.querySelector("#article4 .box");
  const button =box.querySelector("button:first-child");
  const createdP = box.querySelector("p");
  const createdImg = box.querySelector("img");
  const createdButton = box.querySelector("button:last-child");

  box.removeChild(createdP);
  box.removeChild(createdImg);
  box.removeChild(createdButton);
  button.style.display = "block";
};