// 1. Create a page that displays a balloon (using the balloon emoji, 🎈). When you press
// the up arrow, it should inflate (grow) 10 percent, and when you press the down arrow,
// it should deflate (shrink) 10 percent. You can control the size of text (emoji are
// text) by setting the font-size CSS property (style.fontSize) on its parent element.
// Remember to include a unit in the value—for example, pixels (10px). The key names of
// the arrow keys are "ArrowUp" and "ArrowDown". Make sure the keys change only the
// balloon, without scrolling the page.
// When that works, add a feature where, if you blow up the balloon past a certain size,
// it explodes. In this case, exploding means that it is replaced with a 💥 emoji, and
// the event handler is removed (so that you can’t inflate or deflate the explosion).
// Hint: keeping track of the size in percentage might be easier.
// Hint: Make sure you quote the emoji characters. They are strings, after all.
// Hint: document.getElementById("balloon") will get the balloon element on the page.

// selects the ballon element
const balloon = document.getElementById("balloon");

// set initial font size
let currentSize = 20;
balloon.style.fontSize = `${currentSize}px`; // creates a string that combines the currentsize value with px unit.

// event listener for key presses
document.addEventListener("keydown", (event) => {
    if (event.key == "ArrowUp") {
        // inflates the balloon by increasing font size by 10%
        currentSize *= 1.1;
        balloon.style.fontSize = `${currentSize}px`;
    } else if (event.key == "ArrowDown") {
        // deflates the balloon by decreasing font size by 10%
        currentSize *= 0.9;
        balloon.style.fontSize = `${currentSize}px`
    }

    // prevents the default behavior of arrow keys 
    if (event.key == "ArrowUp" || event.key == "ArrowDown") {
        event.preventDefault();
    }
});


// 2. The index.html page has a tabbed layout. Make the default state of the layout show
// the first tab, and make it so that when you click the links at the top the correct
// tab's contents are displayed and the others are hidden. Prevent the default action of
// the links and set up an event listener with the logic necessary to make the tabs
// function as expected. There are many ways to accomplish this task, but you will need
// to at minimum add listeners to each link and toggle the display of the tab contents.
// Hint: display: none; hides an element, and display: block; will bring it

// selects all tab links and content elements
const tabLinks = document.querySelectorAll("#tabbed-layout ul li a");
const tabContents = document.querySelectorAll("#tabbed-contents > div");

// adds event listeners to each tab link
tabLinks.forEach((tab, index) => {
    tab.addEventListener("click", (event) =>{
        // prevents default link behavior
        event.preventDefault();

        // removes active class from all tabs
        tabLinks.forEach((link) => link.classList.remove("active"));
        tabContents.forEach((content) => (content.style.display = "none"));

        // adds active class to the clicked tab
        tab.classList.add("active");
        tabContents[index].style.display = "block";

    });
});

// sets the default state
tabLinks[0].classList.add("active");
tabContents[0].style.display = "block";