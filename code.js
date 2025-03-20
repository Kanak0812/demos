// Select the button element
const colorButton = document.getElementById('colorButton');

// Array of colors to change the background
const colors = ['#ff6347', '#32cd32', '#1e90ff', '#ff1493', '#ffd700'];

// Variable to track the current color index
let currentColorIndex = 0;

// Function to change the background color
function changeBackgroundColor() {
  // Change the body's background color
  document.body.style.backgroundColor = colors[currentColorIndex];
  
  // Update the color index to next color, looping back to the start
  currentColorIndex = (currentColorIndex + 1) % colors.length;
}

// Add click event listener to the button
colorButton.addEventListener('click', changeBackgroundColor);
