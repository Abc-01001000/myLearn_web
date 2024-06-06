document.addEventListener('click', function(e) {
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    document.body.appendChild(ripple);
    ripple.style.width = ripple.style.height = `50px`;
    ripple.style.left = `${e.clientX + window.scrollX - 25}px`;
    ripple.style.top = `${e.clientY + window.scrollY - 25}px`;
    console.log(`(x, y) = (${e.clientX}, ${e.clientY}`)

    ripple.addEventListener('animationend', () => {
        ripple.remove();
    });
});
