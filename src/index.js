import "./style.css";
import initWebsite from "./main.js";
import buildMenu from "./menu.js";

initWebsite();
initButtons();

function initButtons() {
    const menuButton = document.getElementById("menu-button");
    menuButton.addEventListener("click", buildMenu);
}
