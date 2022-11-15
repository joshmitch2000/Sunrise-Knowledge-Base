window.onload = () => {
    let pageCont = document.getElementsByClassName("page-container");

    let startOptions = document.createElement("section");
    startOptions.classList.add("start-options");

    let card1 = document.createElement("div")
    card1.classList.add("option-card");
    let card2 = document.createElement("div");
    card2.classList.add("option-card")
    let card3 = document.createElement("div");
    card3.classList.add("option-card")

    // card1 contents
    let imgWrap1 = document.createElement("div");
    imgWrap1.classList.add("img-wrapper");

    let powerLogo = document.createElement("img");
    powerLogo.classList.add("logo");
    powerLogo.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Power_icon_%28the_Noun_Project_35084%29.svg/1024px-Power_icon_%28the_Noun_Project_35084%29.svg.png");

    imgWrap1.appendChild(powerLogo);
    card1.appendChild(imgWrap1);
    startOptions.appendChild(card1);

    // card2 contents
    let imgWrap2 = document.createElement("div");
    imgWrap2.classList.add("img-wrapper");

    let emailLogo = doucment.createElement("img");
    emailLogo.classList.add("logo");
    emailLogo.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Mail_%28iOS%29.svg/2048px-Mail_%28iOS%29.svg.png");

    imgWrap2.appendChild(emailLogo);
    card2.appendChild(imgWrap2);
    startOptions.appendChild(card2);

    // card3 contents


    startOptions.appendChild(card3);

    pageCont[0].prepend(startOptions);
}
