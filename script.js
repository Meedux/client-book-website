window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    // document.body.style.overflow = "auto"; // Make the body scrollable again
  }, 4000); // Adjust the delay as needed

  const { animate, scroll, inView } = Motion;

  inView("#top-svg", (progress) => {
    const animation = animate(
      "#top-path",
      {
        pathLength: [0, 1],
        ease: ["linear"]
      },
      {duration: 5}
    )

    animation.play()

    return () => animation.complete()
  })

  inView("#scrollingSvg", () => {
    const animation = animate(
      "#svgPath",
      {
        pathLength: [0, 1],
        ease: ["linear"]
      },
      {duration: 10}
    )

    animation.play()

    return () => animation.complete()
  })
});



