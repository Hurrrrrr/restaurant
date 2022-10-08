import "./style.css";
import mainPic from "./rest-main.jpeg";

// const mainPicWrap = document.getElementById("main-pic-wrap");
// const myMainPic = new Image();
// myMainPic.src = mainPic;

// mainPicWrap.appendChild(myMainPic);

console.log("sdf");

const buildWebsite = (() => {

    const buildHeader = () => {
        const header = document.createElement('div');
        header.id = "header";
    
        const mainBanner = document.createElement("div");
        mainBanner.id = "main-banner";
        mainBanner.textContent = "COOL";
    
        header.appendChild(mainBanner);
    
        const mainNavbar = document.createElement("div");
        mainNavbar.id = "main-navbar";
    
        const navHome = document.createElement("div");
        navHome.id = "nav-home";
        navHome.textContent = "Home";
        
        const navMenu = document.createElement("div");
        navMenu.id = "nav-menu";
        navMenu.textContent = "Menu";
    
        const navContact = document.createElement("div");
        navContact.id = "nav-contact";
        navContact.textContent = "Contact";
    
        mainNavbar.appendChild(navHome);
        mainNavbar.appendChild(navMenu);
        mainNavbar.appendChild(navContact);
    
        header.appendChild(mainNavbar);
    
        return header;
    }

    const buildMainPic = () => {
        const mainPicWrap = document.getElementById("main-pic-wrap");
        const myMainPic = new Image();
        myMainPic.src = mainPic;
        mainPicWrap.appendChild(myMainPic);
        console.log("BMP");
    }

    return {buildHeader, buildMainPic};

})();

const content = document.getElementById("content");
content.appendChild(buildWebsite.buildHeader());
content.appendChild(buildWebsite.buildMainPic());