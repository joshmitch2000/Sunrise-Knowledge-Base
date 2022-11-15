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

    let imageWrapper = document.createElement("div");
    imageWrapper.classList.add("img-wrapper");
    let powerLogo = document.createElement("img");
    powerLogo.classList.add("power-logo");
    powerLogo.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Power_icon_%28the_Noun_Project_35084%29.svg/1024px-Power_icon_%28the_Noun_Project_35084%29.svg.png");

    imageWrapper.appendChild(powerLogo);
    
    card1.appendChild(imageWrapper);

    startOptions.appendChild(card1);
    startOptions.appendChild(card2);
    startOptions.appendChild(card3);

    pageCont[0].prepend(startOptions);
}
