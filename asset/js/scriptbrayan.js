
const bar = new ProgressBar.Circle("#progress-bar", {
  color: "#4caf50",
  strokeWidth: 10,
  trailColor: "#",
  trailWidth: 5,
  duration: 1400,
  easing: "easeInOut",
  from: { color: "#FEB310", width: 4 },
  to: { color: "#f44336", width: 4 },
  step: function (state, circle) {
    circle.path.setAttribute("stroke", state.color);
    circle.path.setAttribute("stroke-width", state.width);
    circle.path.setAttribute("stroke-linecap", "round");
  },
});

function updateProgress(progress) {
  bar.set(progress / 100);
}

updateProgress(60);