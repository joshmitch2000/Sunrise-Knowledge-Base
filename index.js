window.onload = () => {
    let pageCont = document.getElementsByClassName("page-container");

    let startOptions = document.createElement("section");
    startOptions.classList.add("start-options");

    let card1 = document.createElement("div")
    card1.classList.add("option-card");
    card1.addEventListener('click', () => {
        window.open("https://sunriseict-helpdesk.groovehq.com/help/new-staff-ict-guide", "_blank").focus();
    });
    let card2 = document.createElement("div");
    card2.classList.add("option-card");
    card2.addEventListener('click', () => {
        window.location.href = "mailto:helpdesk@sunrise.sa.edu.au";
    });
    let card3 = document.createElement("div");
    card3.classList.add("option-card");

    // card1 contents
    let imgWrap1 = document.createElement("div");
    imgWrap1.classList.add("power-wrapper");

    let powerLogo = document.createElement("img");
    powerLogo.classList.add("logo");
    powerLogo.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Power_icon_%28the_Noun_Project_35084%29.svg/1024px-Power_icon_%28the_Noun_Project_35084%29.svg.png");

    let title1 = document.createElement("h2");
    title1.classList.add("card-title");
    title1.innerText = "Getting Started";

    let para1 = document.createElement("p");
    para1.classList.add("card-text");
    para1.innerText = "Are you new to Sunrise? Click here for a helpful article.";

    imgWrap1.appendChild(powerLogo);
    card1.appendChild(imgWrap1);
    card1.appendChild(title1);
    card1.appendChild(para1);
    startOptions.appendChild(card1);

    // card2 contents
    let imgWrap2 = document.createElement("div");
    imgWrap2.classList.add("email-wrapper");

    let emailLogo = document.createElement("img");
    emailLogo.classList.add("logo");
    emailLogo.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Mail_%28iOS%29.svg/2048px-Mail_%28iOS%29.svg.png");

    let title2 = document.createElement("h2");
    title2.classList.add("card-title");
    title2.innerText = "Get Support";

    let para2 = document.createElement("p");
    para2.classList.add("card-text");
    para2.innerText = "Need further support? Click here to email the ICT Helpdesk.";

    imgWrap2.appendChild(emailLogo);
    card2.appendChild(imgWrap2);
    startOptions.appendChild(card2);

    // card3 contents
    let imgWrap3 = document.createElement("div");
    imgWrap3.classList.add("rand-wrapper");

    let randLogo = document.createElement("img");
    randLogo.classList.add("logo");
    randLogo.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Circle-icons-die.svg/1024px-Circle-icons-die.svg.png?20160314153600");

    imgWrap3.appendChild(randLogo);
    card3.appendChild(imgWrap3);
    startOptions.appendChild(card3);

    // prepend all cards to page (add to beginning of element)
    pageCont[0].prepend(startOptions);
}
