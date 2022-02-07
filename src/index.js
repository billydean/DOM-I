const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

/*
  [x] Give the class "italic" to all "header nav a" //navItems
  [ ] Add text content to all "header nav a"
  [x] Add src to #logo-img // logo
  [x] Add text to ".cta-text h1" and ".cta-text button" // ctaText and ctaButton
  [x] Add src to #cta-img // cta
  [x] Add text to all <h4> and <p> in .text-content in .top-content // topHeaders and topText
  [x] Add src to #middle-img // middleImg
  [x] Add text to all <h4> and <p> in .text-content in .bottom-content // bottomHeaders and bottomText
  [x] Add <h4> and <p> text to .contact // contactHeader and contactText
  [x] Add class .bold to "footer a" // footer
  [x] Add text to "footer a"
*/

const navItems = document.querySelectorAll("header nav a");
const logo = document.querySelector("#logo-img");
const ctaText = document.querySelector(".cta-text h1");
const ctaButton = document.querySelector(".cta-text button");
const cta = document.querySelector("#cta-img");
const topHeaders = document.querySelectorAll(".top-content .text-content h4");
const topText = document.querySelectorAll(".top-content .text-content p");
const bottomHeaders = document.querySelectorAll(".bottom-content .text-content h4");
const bottomText = document.querySelectorAll(".bottom-content .text-content p");
const middleImg = document.querySelector("#middle-img");
const contactHeader = document.querySelector(".contact h4");
const contactText = document.querySelectorAll(".contact p");
const footer = document.querySelector("footer a");

navItems.forEach(item => item.className = "italic");
footer.className = "bold";
logo.src = "http://localhost:9000/img/logo.png";
cta.src = "http://localhost:9000/img/cta.png";
middleImg.src = "http://localhost:9000/img/accent.png";
ctaText.textContent = "DOM Is Awesome";
ctaButton.textContent = "Get Started";
contactHeader.textContent = "Contact";
footer.textContent = "Copyright Great Idea! 2021";
topHeaders[0].textContent = "Features";
topHeaders[1].textContent = "About";
bottomHeaders[0].textContent = "Services";
bottomHeaders[1].textContent = "Product";
bottomHeaders[2].textContent = "Vision";
topText[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
topText[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
bottomText[0].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
bottomText[1].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
bottomText[2].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
contactText[0].textContent = "123 Way 456 Street Somewhere, USA";
contactText[1].textContent = "1 (888) 888-8888";
contactText[2].textContent = "sales@greatidea.io";
navItems[0].textContent = "Services";
navItems[1].textContent = "Product";
navItems[2].textContent = "Vision";
navItems[3].textContent = "Features";
navItems[4].textContent = "About";
navItems[5].textContent = "Contact";