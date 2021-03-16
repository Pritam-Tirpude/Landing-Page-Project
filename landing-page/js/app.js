/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const sectionElement = document.querySelectorAll("section");
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
for (const sectiondata of sectionElement) {
  const ulElement = document.querySelector("#navbar__list");

  const sectionId = sectiondata.id;
  const sectionDataNav = sectiondata.dataset.nav;

  const liElement = document.createElement("li");
  const anchorTag = `<a class="menu__link" href="#${sectionId}" id="#${sectionId}">${sectionDataNav}</a>`;

  liElement.innerHTML = anchorTag;
  ulElement.appendChild(liElement);

  // Scroll to section on link click
  liElement.addEventListener("click", (event) => {
    event.preventDefault();
    sectiondata.scrollIntoView({
      behavior: "smooth",
    });
  });
}

//Add class 'active' to section when near top of viewport
window.addEventListener("scroll", () => {
  sectionElement.forEach((section) => {
    let view = Math.floor(section.getBoundingClientRect().top);
    if (view) {
      section.classList.remove("active");
      section.style.background = "none";
    } else {
      section.classList.add("active");
      section.style.background = "cadetblue";
    }
  });
});

// Top button variable
const topBtn = document.querySelector(".top-btn");

// Function to display button on scrolling
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

// Event Listener of top button which scroll's to the top smoothly
topBtn.addEventListener("click", function () {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
