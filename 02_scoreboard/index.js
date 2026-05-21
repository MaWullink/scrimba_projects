let scoreHome = 0;
let scoreGuest = 0;

function addPoints(team, points) {
  if (team === "home") {
    scoreHome += points;
    document.getElementById("numH").textContent = scoreHome;
  } else {
    scoreGuest += points;
    document.getElementById("numG").textContent = scoreGuest;
  }
}
