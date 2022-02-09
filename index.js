let listOfColors = [
    "red",
    "blue",
    "green",
    "yellow",
    "pink",
    "black",
    "grey",
    "purple",
    "violet",
    "brown",
    "indigo",
];

randomColor = () => {
    let randomNum = Math.floor(Math.random() * listOfColors.length);
    return listOfColors[randomNum];
};

let button = document.querySelector(".btn");
button.addEventListener("click", function (color) {
    color = randomColor();
    document.querySelector(".sub-heading").innerHTML = `Applied Color: ${
        color[0].toUpperCase() + color.substring(1).toLowerCase()
    }`;
    document.querySelector("body").style.backgroundColor = color;
    if (color === "black") {
        document.querySelector("body").style.color = "white";
        document.querySelector(".panel").style.borderColor = "white";
    } else {
        document.querySelector("body").style.color = "black";
        document.querySelector(".panel").style.borderColor = "black";
    }
});

let reset = document.querySelector(".reset");
reset.addEventListener("click", function () {
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("body").style.color = "black";
    document.querySelector(".sub-heading").innerHTML = "";
});
