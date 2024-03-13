const boxs = document.querySelector(".color_boxs");

boxs.style.display = "flex";
boxs.style.gap = "2px";
boxs.style.flexWrap = "wrap";
boxs.style.margin = "0 0 30px 0";

for (let i = 1; i <= 100; i++) {
    let boxDiv = document.createElement("div");
    boxDiv.textContent = i;
    boxDiv.classList.add("number-" + i);
    boxDiv.style.width = "50px";
    boxDiv.style.height = "50px";
    boxs.appendChild(boxDiv);
}