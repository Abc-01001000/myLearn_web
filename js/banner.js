
let index = 0,
    pic = document.getElementsByClassName("img-box"),
    list = document.getElementsByClassName("list"),
    interval = null;
function autoPlay() {
    interval = setInterval(() => {
        ++index;
        if (index == pic.length) {
            index = 0;
        }
        for (let i = 0; i !== pic.length; ++i) {
            pic[i].style.opacity = 0;
            list[i].style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        }
        pic[index].style.opacity = 1;
        list[index].style.backgroundColor = "#fff";
    }, 2000);
}
function changePic() {
    for (let i = 0; i !== pic.length; ++i) {
        pic[i].style.opacity = 0;
        list[i].style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    }
    pic[index].style.opacity = 1;
    list[index].style.backgroundColor = "#fff";
}
autoPlay();

let left = document.getElementById("left"), 
    right = document.getElementById("right");
left.onclick = () => {
    index -= 1;
    clearInterval(interval);
    if (index <= -1) {
        index = pic.length - 1;
    }
    changePic();
    autoPlay();
}
right.onclick = () => {
    ++index;
    clearInterval(interval);
    if (index >= pic.length) {
        index = 0;
    }
    changePic();
    autoPlay();
}

for (let i = 0; i !== list.length; ++i) {
    list[i].onclick = () => {
        index = i;
        clearInterval(interval);
        changePic();
        autoPlay();
    }
}