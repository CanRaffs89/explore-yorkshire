// Toggle slide menu

const width = screen.width;

function toggleActive() {
    if (width < 900) {
        document.getElementById("slide-menu").classList.toggle("active-small");
    } else {
        // Slide desktop menu left a bit further
        document.getElementById("slide-menu").classList.toggle("active-large");
    }
}