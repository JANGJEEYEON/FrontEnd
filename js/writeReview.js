const drawStar = (target) => {
  document.querySelector(`.star span`).style.width = `${target.value * 10}%`;
};
function toggleUserPanel() {
  var userPanel = document.getElementById("userPanel");
  if (userPanel.style.display === "none") {
    userPanel.style.display = "block";
  } else {
    userPanel.style.display = "none";
  }
}
