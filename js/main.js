/*const img = document.getElementById("img");
const u   = document.querySelectorAll("li u");

u.forEach(function(ele) {
    ele.onmouseenter = function(e)  {
        let img_url = e.target.dataset.image;
        if (img_url) {
            img.src = img_url;
        } else {
            img.src = "/img/blank.png";
        }
    }
    ele.onmouseleave = function()  {
        console.log("blank")
        img.src = "/img/blank.png";
    }
})

document.onmousemove = function(e) {
    let x = e.pageX;
    let y = e.pageY;

    img.style.left = x + 'px';
    img.style.top  = y + 'px';
}
*/