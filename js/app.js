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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
let prevScroll = window.pageYOffset;

const navList = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
const fragment = document.createDocumentFragment();
const Keyframe = document.querySelector("Keyframes")
const links = document.querySelectorAll("a.menu__link");

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

// build the navbar
function buildNavbar() {
    sections.forEach(section => {
        const sectionId = section.id
        const sectionTitle = section.dataset.nav
        const listItem = document.createElement("li")
        const listLinks = document.createElement("a")
        listLinks.classList.add("menu__link");
        listLinks.href = `#${sectionId}`
        listLinks.textContent = sectionTitle
        listLinks.addEventListener("click", eve => {
            eve.preventDefault()
            section.scrollIntoView({
                behavior: "smooth"
            })

        })

        fragment.appendChild(listItem)
        navList.appendChild(listLinks)
    });
    navList.appendChild(fragment)
}

buildNavbar()


//Detect the element location relative to the viewport using and active all section
window.addEventListener("scroll", highlights)


function highlights() {
    sections.forEach(section => {
        const sectionUp = section.getBoundingClientRect().top
        const sectionName = section.getAttribute("data-nav");
        if (sectionUp > 0 && sectionUp < 280) {
            section.classList.add("your-active-class")

            links.forEach(link => {
                if (link.textContent === sectionName) {
                    link.classList.add("active-li")
                } else {
                    link.classList.remove("active-li")
                }
            })
        } else {
            section.classList.remove("your-active-class")

        }

    })
}

//hide nav bar when scroll dwon and show when scroll up
window.onscroll = function buildNavbar() {
    let scroll = window.pageYOffset;
    if (prevScroll > scroll) {
        document.getElementById("navbar__list").style.top = "0";
    } else {
        document.getElementById("navbar__list").style.top = "-70px";

    }
    prevScroll = scroll

}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


