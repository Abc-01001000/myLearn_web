document.addEventListener('click', function(e) {
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    document.body.appendChild(ripple);

    const maxDimension = Math.max(window.innerWidth, window.innerHeight);
    ripple.style.width = ripple.style.height = `${maxDimension}px`;

    ripple.style.left = `${e.clientX - maxDimension / 2}px`;
    ripple.style.top = `${e.clientY - maxDimension / 2}px`;
    console.log(`(x, y) = (${e.clientX}, ${e.clientY}`)

    ripple.addEventListener('animationend', () => {
        ripple.remove();
    });
});
