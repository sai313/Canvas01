var canvas = document.getElementById("canvas");
ctx=canvas.getContext("2d");
var colour = "blue";
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=5;
ctx.arc(200,200,50,0,2*Math.PI);
ctx.stroke();

//Function for mouse Down Event
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
    colour=document.getElementById("color").value;
    width=document.getElementById("width").value;
    radius=document.getElementById("radius").value;
    console.log(colour);
    var mouse_X = e.clientX-canvas.offsetLeft;
    var mouse_Y = e.clientY-canvas.offsetTop;
    console.log("X="+mouse_X+" Y="+mouse_Y);
    circle(mouse_X,mouse_Y);
}
function circle(mouse_X,mouse_Y) {
    ctx.beginPath();
    ctx.strokeStyle=colour;
    ctx.lineWidth=width;
    ctx.arc(mouse_X,mouse_Y,radius,0,2*Math.PI);
    ctx.stroke();
}
function clearArea() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}