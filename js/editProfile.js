document
  .getElementById("input_image")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
      const imgSrc = event.target.result;
      document.getElementById("image_preview").src = imgSrc;
      document.getElementById("image_preview").style.display = "block";
    };

    reader.readAsDataURL(file);
  });
function toggleUserPanel() {
  var userPanel = document.getElementById("userPanel");
  if (userPanel.style.display === "none") {
    userPanel.style.display = "block";
  } else {
    userPanel.style.display = "none";
  }
}
