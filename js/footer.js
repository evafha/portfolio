let currentPage = 0;
const pages = document.querySelectorAll('.page');
const totalPages = pages.length;

window.addEventListener('wheel', (e) => {
    if (e.deltaY > 0) {
        // Scroll Down
        currentPage = Math.min(currentPage + 1, totalPages - 1);
    } else {
        // Scroll Up
        currentPage = Math.max(currentPage - 1, 0);
    }

    // Scroll to the selected page
    pages[currentPage].scrollIntoView({ behavior: 'smooth' });
});


const gradientEffect = document.querySelector('.gradient-effect');

let mouseX = 0;
let mouseY = 0;

// Track mouse position
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Update the gradient position with a delay using requestAnimationFrame
function moveLight() {
  const delay = 0.9; // Change the delay value to increase or decrease the lag
  const diffX = mouseX - gradientEffect.offsetLeft;
  const diffY = mouseY - gradientEffect.offsetTop;

  // Update position with a delay (smooth effect)
  gradientEffect.style.left = `${gradientEffect.offsetLeft + diffX * delay}px`;
  gradientEffect.style.top = `${gradientEffect.offsetTop + diffY * delay}px`;

  requestAnimationFrame(moveLight); // Keep animating
}

// Start animating the light movement
moveLight();
