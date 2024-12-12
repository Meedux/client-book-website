document.addEventListener('DOMContentLoaded', () => {
    const svgPath = document.getElementById('svgPath');
    
    const length = svgPath.getTotalLength();
    
    // Set up initial styles
    svgPath.style.strokeDasharray = `${length}`;
    svgPath.style.strokeDashoffset = `${length}`;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollTop / scrollHeight;

        // Update path drawing based on scroll progress
        const drawLength = length * progress;
        svgPath.style.strokeDashoffset = String(length - drawLength);
        
        // Optional: Move the SVG based on scroll
        svgPath.parentElement.style.transform = `translateY(${-progress * 10}%)`;
        svgPath.parentElement.style.transition = 'transform 0.1s ease-out';
    });
});