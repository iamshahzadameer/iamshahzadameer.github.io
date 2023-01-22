var menu = document.querySelector(".menuIcon");
var smallbar = document.querySelector(".small-sidebar");
var vcon = document.querySelector(".list-container");

menu.onclick = function(){
    smallbar.classList.toggle("large-bar");
    vcon.classList.toggle("vcon");
}
//For Replacing Title..................

var x = document.querySelector(".title").innerHTML;
document.querySelector("title").innerHTML = x;

//For Hiding comments

var c = document.querySelector(".com-head");
var ctow = document.querySelector(".allcomments");

c.onclick = function(){
    ctow.classList.toggle("ctwo");
}