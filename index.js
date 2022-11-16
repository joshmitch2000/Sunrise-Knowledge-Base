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
    card3.addEventListener('click', () => {
        window.open(randomArticle(), "_blank").focus();
    });

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
    card2.appendChild(title2);
    card2.appendChild(para2);
    startOptions.appendChild(card2);


    // card3 contents
    let imgWrap3 = document.createElement("div");
    imgWrap3.classList.add("rand-wrapper");

    let randLogo = document.createElement("img");
    randLogo.classList.add("logo");
    randLogo.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Circle-icons-die.svg/1024px-Circle-icons-die.svg.png?20160314153600");

    let title3 = document.createElement("h2");
    title3.classList.add("card-title");
    title3.innerText = "Feeling Lucky";

    let para3 = document.createElement("p");
    para3.classList.add("card-text");
    para3.innerText = "Feeling lucky? Click here to open a random helpdesk article.";

    imgWrap3.appendChild(randLogo);
    card3.appendChild(imgWrap3);
    card3.appendChild(title3);
    card3.appendChild(para3);
    startOptions.appendChild(card3);

    // prepend all cards to page (add to beginning of element)
    pageCont[0].prepend(startOptions);
}

function randomArticle()
{
    let articles = [
        "https://sunriseict-helpdesk.groovehq.com/help/my-mac-connects-to-guest-sunrise?version=latest",
        "https://sunriseict-helpdesk.groovehq.com/help/my-mac-connects-to-sunrise-guest-macos-13-0?version=latest",
        "https://sunriseict-helpdesk.groovehq.com/help/how-to-recover-your-sunrise-password-from-your-mac?version=latest",
        "https://sunriseict-helpdesk.groovehq.com/help/resource-links?version=latest",
        "https://sunriseict-helpdesk.groovehq.com/help/how-to-setup-printers-on-your-macbook-updated-221012?version=latest",
        "https://sunriseict-helpdesk.groovehq.com/help/how-to-change-the-password-on-your-computer-macos-ventura?version=latest",
        "https://sunriseict-helpdesk.groovehq.com/help/how-to-change-the-password-on-your-computer?version=latest",
        "https://sunriseict-helpdesk.groovehq.com/help/how-to-change-the-batteries-on-a-salto-lock?version=latest",
        "https://sunriseict-helpdesk.groovehq.com/help/3cx-mobile-app-fix-how-to-disable-ip-tracking-limit?version=latest",
        "https://sunriseict-helpdesk.groovehq.com/help/how-to-scan-documents-updated-221019?version=latest",
        "https://sunriseict-helpdesk.groovehq.com/help/using-airplay-on-your-apple-tv?version=latest",
        "https://sunriseict-helpdesk.groovehq.com/help/how-to-solve-all-of-the-s-drive-issues?version=latest",
        "https://sunriseict-helpdesk.groovehq.com/help/how-to-update-nextcloud?version=latest",
        "https://sunriseict-helpdesk.groovehq.com/help/i-have-been-signed-out-of-nextcloud?version=latest",
        "https://sunriseict-helpdesk.groovehq.com/help/new-staff-ict-guide?version=latest",
        "https://sunriseict-helpdesk.groovehq.com/help/how-to-request-an-app?version=latest",
        "https://sunriseict-helpdesk.groovehq.com/help/office-grant-access-and-or-insufficient-permission-error?version=latest",
        "https://sunriseict-helpdesk.groovehq.com/help/how-to-set-your-email-signature?version=latest",
        "https://sunriseict-helpdesk.groovehq.com/help/sunrise-self-service-password-tool-how-to-reset-my-sunrise-password?version=latest",
        "https://sunriseict-helpdesk.groovehq.com/help/adding-a-guest-to-our-guest-sunrise-network?version=latest",
        "https://sunriseict-helpdesk.groovehq.com/help/how-to-install-spike-as-a-sunrise-oshc-or-elc-coordinator-on-your-mac?version=latest",
        "https://sunriseict-helpdesk.groovehq.com/help/comprehensive-guide?version=latest",
        "https://sunriseict-helpdesk.groovehq.com/help/airdrop-from-ipad-to-macbook?version=latest",
        "https://sunriseict-helpdesk.groovehq.com/help/salto-information?version=latest",
        "https://sunriseict-helpdesk.groovehq.com/help/contact-details-if-any-issues-arise?version=latest",
        "https://sunriseict-helpdesk.groovehq.com/help/accessing-clickview?version=latest",
        "https://sunriseict-helpdesk.groovehq.com/help/install-teamviewer-for-sunrise-ict-remote-access?version=latest",
        "https://sunriseict-helpdesk.groovehq.com/help/using-classroom-displays-and-apple-tv?version=latest",
        "https://sunriseict-helpdesk.groovehq.com/help/3cx-welcome-email?version=latest",
        "https://sunriseict-helpdesk.groovehq.com/help/setting-up-the-3cx-iphone-app?version=latest",
        "https://sunriseict-helpdesk.groovehq.com/help/using-the-t19p-phone?version=latest",
        "https://sunriseict-helpdesk.groovehq.com/help/using-the-t57w-phone?version=latest",
        "https://sunriseict-helpdesk.groovehq.com/help/myfiles-sharing-folders-with-other-teachers?version=latest",
        "https://sunriseict-helpdesk.groovehq.com/help/how-to-configure-the-nextcloud-myfiles-client-on-your-mac?version=latest",
        "https://sunriseict-helpdesk.groovehq.com/help/creating-shared-folders-in-myfiles?version=latest",
        "https://sunriseict-helpdesk.groovehq.com/help/screen-recording-on-ipad?version=latest",
        "https://sunriseict-helpdesk.groovehq.com/help/screen-recording-with-quicktime?version=latest",
        "https://sunriseict-helpdesk.groovehq.com/help/compressing-videos-with-quicktime?version=latest",
        "https://sunriseict-helpdesk.groovehq.com/help/student-tips-for-participating-in-online-learning?version=latest"
    ];

    let index = Math.floor(Math.random() * ((articles.length - 1) + 1));
    
    return articles[index];
}
