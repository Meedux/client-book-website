window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    document.body.style.overflow = "auto"; // Make the body scrollable again
  }, 4000); // Adjust the delay as needed
});

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

// Get the SVG path element
const svgPath = document.querySelector("#svgPath");
const svg = document.querySelector("#scrollingSvg");

// Set up the path animation (stroke-dashoffset)
const pathLength = svgPath.getTotalLength();
svgPath.style.strokeDasharray = pathLength;
svgPath.style.strokeDashoffset = pathLength;

gsap.to(svgPath, {
  strokeDashoffset: 0, // Animate the stroke to reveal the path
  ease: "power2.out",
  scrollTrigger: {
    trigger: svgPath,
    start: "top 50%",
    end: "bottom 10%",
    scrub: 0.5,
    // markers: true,
  },
});

// Set up motion path animation for the SVG
gsap.to(svg, {
  scrollTrigger: {
    trigger: svgPath,
    start: "top 50%",
    end: "bottom 50%",
    scrub: 0.5,
    // markers: true,
  },
  motionPath: {
    path: svgPath,
    align: svgPath,
    autoRotate: true,
    alignOrigin: [0.5, 0.5],
  },
});
