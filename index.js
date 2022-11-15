window.onload = () => {
    let pageCont = document.getElementsByClassName("page-container");

    let startOptions = document.createElement("section").classList.add("start-options");

    let card1 = document.createElement("div").classList.add("option-card");
    let card2 = document.createElement("div").classList.add("option-card");
    let card3 = document.createElement("div").classList.add("option-card");

    let imageWrapper = document.createElement("div").classList.add("img-wrapper");
    let powerLogo = document.createElement("img").classList.add("power-logo");

    startOptions.appendChild(card1);
    startOptions.appendChild(card2);
    startOptions.appendChild(card3);

    pageCont[0].prepend(startOptions);
}
