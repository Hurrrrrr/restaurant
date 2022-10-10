import mainPic from "./rest-main.jpeg";

// Section rendering functions

function buildHeader() {
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

function buildMainPic() {
        const mainPicWrap = document.createElement("div");
        mainPicWrap.id = "main-pic-wrap";

        const myMainPic = new Image();
        myMainPic.src = mainPic;
        mainPicWrap.appendChild(myMainPic);

        return mainPicWrap;
}

function buildMainInfo() {
        const mainInfo = document.createElement("div");
        mainInfo.id = "main-info";

        const infoLocation = document.createElement("div");
        infoLocation.id = "info-location";
        createH2("Location", infoLocation);

        const infoHours = document.createElement("div");
        infoHours.id = "info-hours";
        createH2("Hours", infoHours);
        buildHoursList(infoHours);

        mainInfo.appendChild(infoLocation);
        mainInfo.appendChild(infoHours);

        return mainInfo;
}

function buildSocial() {
        const mainSocial = document.createElement("div");
        mainSocial.id = "main-social";

        createAnchor("Twitter", "https://twitter.com/", mainSocial);
        createAnchor("Facebook", "https://facebook.com/", mainSocial);
        createAnchor("Instagram", "https://instagram.com/", mainSocial);

        return mainSocial;
}

function buildFooter() {
        const mainFooter = document.createElement("div");
        mainFooter.id = "main-footer";

        createP("Built for The Odin Project, 2022", mainFooter);

        return mainFooter;
}



// Support functions

function buildHoursList(myElement) {
        const hours = ["Tue-Thu: 10-10", "Fri-Sat: 10-11", "Sun: 11-9", "Mon: Closed"];
        
        const hoursList = document.createElement("ul");
        hoursList.id = "hours-list";

        for (let i = 0; i < hours.length; i++) {
            const li = document.createElement("li");
            li.innerHTML = hours[i];
            hoursList.appendChild(li);
        }

        myElement.appendChild(hoursList);
}

function createH2(text, myElement) {
        const h = document.createElement("h2");
        const t = document.createTextNode(text);
        h.appendChild(t);
        myElement.appendChild(h);
}

function createAnchor(text, url, myElement) {
        const a = document.createElement("a");
        const link = document.createTextNode(text);
        a.appendChild(link);
        a.title = text;
        a.href = url;
        myElement.appendChild(a);
}

function createP(text, myElement) {
        const p = document.createElement("p");
        const t = document.createTextNode(text);
        p.appendChild(t);
        myElement.appendChild(p);
}



// Main export function

function initWebsite() {
    console.log("sdfg");
    const content = document.createElement("div");
    content.id = "content";
    console.log(content);

    content.appendChild(buildHeader());
    content.appendChild(buildMainPic());
    content.appendChild(buildMainInfo());
    content.appendChild(buildSocial());
    content.appendChild(buildFooter());

    document.body.appendChild(content);
}

export default initWebsite;