import Burger from "./burger.webp";

const myMenu = ["Egg - 5", "Caviar - 16", "Roe - 8", "Ovum - 4", "Bud - 2", "Germ - 1"];

function buildMenu() {
    const mainPicWrap = document.getElementById("main-pic-wrap");
    mainPicWrap.classList.add = "menu";
    mainPicWrap.innerHTML = "";

    const myBurger = new Image();
    myBurger.src = Burger;
    mainPicWrap.appendChild(myBurger);

    // Make this a function?
    const mainInfo = document.getElementById("main-info");
    mainInfo.classList.add = "menu";
    mainInfo.innerHTML = "";

    renderMenuItems(mainInfo);

    return mainPicWrap;
}

function renderMenuItems(myElement) {
    const menuList = document.createElement("ul");
    menuList.classList = "menu list";

    for (let i = 0; i < myMenu.length; i++) {
        const li = document.createElement("li");
        li.innerHTML = myMenu[i];
        menuList.appendChild(li);
    }

    myElement.appendChild(menuList);

    return menuList;
}

export default buildMenu;