// Get a reference to the bubble container element
const container = document.getElementById('bubble-container');

// Add a hover event listener to the document
document.addEventListener('mousemove', function(event) {
  // Create a new bubble element
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');

  // Set the bubble's position and color
  bubble.style.left = event.clientX + 'px';
  bubble.style.top = event.clientY + 'px';
  bubble.style.backgroundColor = getRandomColor();

  // Add the bubble to the container element
  container.appendChild(bubble);

  // Remove the bubble after a short delay
  setTimeout(function() {
    bubble.remove();
  }, 500);
});

document.addEventListener('scroll', function(event) {
    const bubbles = document.querySelectorAll('.bubble');
    bubbles.forEach(function(bubble) {
      const rect = bubble.getBoundingClientRect();
      bubble.style.top = rect.top + window.scrollY + 'px';
      bubble.style.left = rect.left + window.scrollX + 'px';
    });
  });
  

// Helper function to generate a random color
function getRandomColor() {
  const colors = ['#ff9999', '#99ff99', '#9999ff', '#ffff99', '#ff99ff', '#99ffff'];
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
