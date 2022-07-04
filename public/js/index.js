/* TODO: Functions start */

function toggleClass(elementToUse, elementClass) {
    elementToUse.classList.toggle(elementClass);
}

function removeClass(elementToUse, elementClass) {
    elementToUse.classList.remove(elementClass);
}

function addClass(elementToUse, elementClass) {
    elementToUse.classList.add(elementClass);
}

function setElementProperty(
    elementToUse,
    elementProperty,
    elementPropertyValue
) {
    elementToUse.style.setProperty(elementProperty, elementPropertyValue);
}

function addAndRemoveClass(elementToUse, classToAdd, classToRemove) {
    addClass(elementToUse, classToAdd);
    removeClass(elementToUse, classToRemove);
}

function adjustHeaderNavBarContent(elementToUse, breakPoint) {
    if (window.innerWidth >= breakPoint) {
        addAndRemoveClass(elementToUse, "row", "column");
    } else {
        addAndRemoveClass(elementToUse, "column", "row");
    }
}

/* FIXME: Functions end */

/* TODO: Header starts */

const headerNavBar = document.querySelector(".header__nav__bar__container");
const headerBars = document.querySelector(".header .fa-bars");
const closeHeaderNavBar = document.querySelector(".header .fa-times");
const lessBrightness = document.querySelector(".less__brightness");
const classToShowElement = "active";
const mobileNavBarFirstChange = 450;
const mobileNavBarSecondChange = 700;
const mobileNavBarThirdChange = 900;

headerBars.addEventListener("click", () => {
    toggleClass(headerNavBar, classToShowElement);
    setElementProperty(lessBrightness, "background", "rgba(0,0,0,0.3)");
    setElementProperty(headerNavBar, "transition", "all .2s linear");
});

closeHeaderNavBar.addEventListener("click", () => {
    if (
        window.innerWidth >= mobileNavBarFirstChange &&
        window.innerWidth < mobileNavBarSecondChange
    ) {
        setElementProperty(headerNavBar, "transition", "all .4s linear");
    } else if (
        window.innerWidth >= mobileNavBarSecondChange &&
        window.innerWidth < mobileNavBarThirdChange
    ) {
        setElementProperty(headerNavBar, "transition", "all .55s linear");
    } else if (window.innerWidth >= mobileNavBarThirdChange) {
        setElementProperty(headerNavBar, "transition", "all .7s linear");
    }
    removeClass(headerNavBar, classToShowElement);
    setElementProperty(lessBrightness, "background", "none");
});

/* TODO: Header desktop adjustments */

const headerNavBarContent = document.querySelector(
    ".header__nav__bar__content"
);
const breakPoint = 1280;

adjustHeaderNavBarContent(headerNavBarContent, breakPoint);

window.addEventListener("resize", () => {
    adjustHeaderNavBarContent(headerNavBarContent, breakPoint);
});

const headerNavBarItself = document.querySelector(".header__nav__bar");

adjustHeaderNavBarContent(headerNavBarItself, breakPoint);

window.addEventListener("resize", () => {
    adjustHeaderNavBarContent(headerNavBarItself, breakPoint);
});

const headerButtonsContainer = document.querySelector(
    ".header__buttons__container"
);

adjustHeaderNavBarContent(headerButtonsContainer, breakPoint);

window.addEventListener("resize", () => {
    adjustHeaderNavBarContent(headerButtonsContainer, breakPoint);
});

/* FIXME: Header desktop adjustments end */

/* FIXME: Header ends */
