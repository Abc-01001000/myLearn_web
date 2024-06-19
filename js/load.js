let loader = document.querySelector(".loader");

onload = () => {
    setTimeout(() => {
        loader.remove()
    }, 1000);
}