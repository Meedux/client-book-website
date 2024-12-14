window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    // document.body.style.overflow = "auto"; // Make the body scrollable again
  }, 4000); // Adjust the delay as needed

  const { animate, scroll } = Motion;
  scroll((progress) => {
    animate(
      "#top-path",
      {pathLength: [0, 1]},
      {duration: 5}
    )
  }, { 
    target: document.getElementById("top-svg"),
  })

  scroll((progress) => {
    animate(
      "#svgPath",
      {pathLength: [0, 1]},
      {duration: 10}
    )
  }, { 
    target: document.getElementById("scrollingSvg"),
    // offset: "start start"
  })
});



