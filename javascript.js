const cards = [
    {
        name: "witch",
        img: "pictures/witch.png"
    },
    {
        name: "pumpkin",
        img: "pictures/pumpkin.png"
    },
    {
        name: "ghost",
        img: "pictures/ghost.png"
    },
    {
        name: "skeleton",
        img: "pictures/Skeleton.png"
    },
    {
        name: "monster",
        img: "pictures/monster.png"
    },
    {
        name: "Grim-Reaper",
        img: "pictures/Grim-Reaper.png"
    },
    {
        name: "coffin",
        img: "pictures/coffin.png"
    },
    {
        name: "skullBones",
        img: "pictures/skull_bones.jpg"
    },
    {
        name: "werewolf",
        img: "pictures/werewolf.png"
    }
];
let previous = null;

let firstPick = "";

let secondPick = "";

let count = 0;

let delay = 2000;

function gameBoard() {
    const game = document.getElementById("memory");

    const grid = document.createElement("div");

    grid.setAttribute("class", "grid");

    game.appendChild(grid);

    let board = cards.concat(cards);

    board.sort(() => 0.5 - Math.random());

    board.forEach(item => {
        const card = document.createElement("div");

        card.classList.add("card");

        card.dataset.name = item.name;

        card.classList.add("border");

        const front = document.createElement("div");

        front.classList.add("front");

        const back = document.createElement("div");

        back.classList.add("back");

        back.style.backgroundImage = `url(${item.img})`;

        grid.appendChild(card);

        card.appendChild(front);

        card.appendChild(back);
    });
    function isMatch() {
        var selected = document.querySelectorAll(".selected");

        selected.forEach(card => {
            card.classList.add("match");
        });
    }
    function resetPick() {
        firstPick = "";

        secondPick = "";

        count = 0;

        var selected = document.querySelectorAll(".selected");

        selected.forEach(card => {
            card.classList.remove("selected");
        });
    }
    grid.addEventListener("click", function(event) {
        let clicked = event.target;

        if (clicked === previous || clicked.classList.contains("selected")) {
            return;
        }

        if (count < 2) {
            count++;

            if (count === 1) {
                firstPick = clicked.parentNode.dataset.name;

                clicked.parentNode.classList.add("selected");
            } else {
                secondPick = clicked.parentNode.dataset.name;

                clicked.parentNode.classList.add("selected");
            }

            if (
                firstPick !== "" &&
                secondPick !== "" &&
                firstPick === secondPick
            ) {
                isMatch();

                setTimeout(resetPick, delay);
            } else {
                setTimeout(resetPick, delay);
            }

            previous = clicked;
        }
    });
    reset.addEventListener("click", gameBoard);
}
window.addEventListener("load", gameBoard);

var reset = document.getElementById("button");
