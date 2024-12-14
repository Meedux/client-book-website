window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    // document.body.style.overflow = "auto"; // Make the body scrollable again
  }, 4000); // Adjust the delay as needed

  const { animate, scroll, inView } = Motion;
  
  inView("#top-svg", (progress) => {
    animate(
      "#top-path",
      {pathLength: [0, 1]},
      {duration: 5}
    )
  })

  inView("#scrollingSvg", (progress) => {
    animate(
      "#svgPath",
      {pathLength: [0, 1]},
      {duration: 10}
    )
  })
});



