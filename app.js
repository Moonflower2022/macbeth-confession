// When the user scrolls the page, execute pageScroll function 
window.onscroll = function() {
    pageScroll();
};

function pageScroll() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("proBar").style.width = scrolled + "%";
}