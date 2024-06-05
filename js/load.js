let loader = document.querySelector(".loader");

onload = () => {
    setTimeout(() => {
        loader.remove()
    }, 3000);
}