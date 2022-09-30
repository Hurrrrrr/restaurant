import "./style.css";
import mainPic from "./rest-main.jpg";

const mainPicWrap = document.getElementById("main-pic-wrap");
const myMainPic = new Image();
myMainPic.src = mainPic;

mainPicWrap.appendChild(myMainPic);

console.log("sdf");