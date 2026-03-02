//your JS code here. If required.
const form = document.querySelector("form");
const fontSizeInput = document.getElementById("fontsize");
const fontColorInput = document.getElementById("fontcolor");

// 🔹 Function to get cookie by name
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) {
      return value;
    }
  }
  return null;
}

// 🔹 Apply saved preferences on page load
window.onload = function () {
  const savedFontSize = getCookie("fontsize");
  const savedFontColor = getCookie("fontcolor");

  if (savedFontSize) {
    document.documentElement.style.setProperty("--fontsize", savedFontSize + "px");
    fontSizeInput.value = savedFontSize;
  }

  if (savedFontColor) {
    document.documentElement.style.setProperty("--fontcolor", savedFontColor);
    fontColorInput.value = savedFontColor;
  }
};

// 🔹 Save preferences when form is submitted
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const size = fontSizeInput.value;
  const color = fontColorInput.value;

  // Save cookies
  document.cookie = "fontsize=" + size + "; path=/";
  document.cookie = "fontcolor=" + color + "; path=/";

  // Apply immediately
  document.documentElement.style.setProperty("--fontsize", size + "px");
  document.documentElement.style.setProperty("--fontcolor", color);
});