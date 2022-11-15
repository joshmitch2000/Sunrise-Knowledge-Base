window.onload = () => {
    let pageCont = document.getElementsByClassName("page-container");
    
    let startOptions = document.createElement("section");
    startOptions.classList.add("start-options");

    let card = document.createElement("div");
    card.classList.add("option-card");

    startOptions.appendChild(card);
    startOptions.appendChild(card.cloneNode(true));
    startOptions.appendChild(card.cloneNode(true));

    pageCont[0].prepend(startOptions);
}
