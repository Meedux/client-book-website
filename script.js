window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    // document.body.style.overflow = "auto"; // Make the body scrollable again
  }, 4000); // Adjust the delay as needed

  const { animate, scroll, inView } = Motion;

  inView("#org-text-header", () => {
    const animation = animate(
      "#org-text",
      {
        opacity: [0, 1],
        y: [50, 0],
      },
      {
        ease: "ease-in",
        duration: 1,
      }
    );

    animation.play();

    return () => animation.complete();
  });

  inView("#top-svg", (progress) => {
    const animation = animate(
      "#top-path",
      {
        pathLength: [0, 1],
        ease: ["linear"],
      },
      { duration: 3 }
    );

    animation.play();

    return () => animation.complete();
  });

  inView("#scrollingSvg", () => {
    const animation = animate(
      "#svgPath",
      {
        pathLength: [0, 1],
        ease: ["linear"],
      },
      { duration: 7 }
    );

    animation.play();

    return () => animation.complete();
  });

  const subsections = document.querySelectorAll(".subsection");
  let currentVisibleSection = null;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const section = entry.target;
        if (entry.isIntersecting) {
          if (currentVisibleSection !== section) {
            if (currentVisibleSection) {
              if(section.classList.contains("5")){
                section.children[0].classList.remove("fixed")
              }
              console.log("call")
              animate(currentVisibleSection, { opacity: 0 }, { duration: 0.5 });
            }
            currentVisibleSection = section
            console.log(entry.isIntersecting)
            if(entry.isIntersecting){
              section.classList.add(["sticky"])
              section.children[0].classList.add(["fixed"])
            }else{
              section.classList.remove(["sticky"])
              section.children[0].classList.remove(["fixed"])
            }
            animate(section, { opacity: 1 }, { duration: 0.5 });
          }
        } else {
          
          animate(section, { opacity: 0 }, { duration: 0.5 });
        }
      });
    },
    {
      threshold: 0.5, 
    });
  subsections.forEach(section => observer.observe(section))
});
