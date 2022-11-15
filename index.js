document.getElementsByTagName("body")[0].addEventListener("load", () => {
    let pageCont = document.getElementsByClassName("page-container");
    
    let startOptions = document.createElement("section");
    startOptions.classList.add("start-options");
    // startOptions.style.display = "flex";
    // startOptions.style.flexDirection = "row";
    // startOptions.style.justifyContent = "space-around";
    // startOptions.style.border = "1px solid lightgrey";
    // startOptions.style.marginTop = "40px";
    // startOptions.style.height = "250px";
    // startOptions.style.padding = "0! important!";

    let card = document.createElement("div");
    card.classList.add("option-card");

    startOptions.appendChild(card);
    startOptions.appendChild(card);

    pageCont[0].appendChild(startOptions);
});

