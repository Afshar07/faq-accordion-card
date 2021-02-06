// Adding Arrow icon to each Question
document.querySelectorAll(".question").forEach((item) => {
    var arrow = document.createElement("img");
    arrow.setAttribute('src', 'images/icon-arrow-down.svg');
    arrow.setAttribute("class", "arrow");
    item.appendChild(arrow);
}
)