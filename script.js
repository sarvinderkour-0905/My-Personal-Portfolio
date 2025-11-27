// LIGHT/DARK MODE TOGGLE
document.getElementById("theme-toggle").onclick = function () {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        this.innerHTML = "🌙";
    } else {
        this.innerHTML = "☀️";
    }
};

// FADE-IN EFFECT
const faders = document.querySelectorAll('.fade-in');

const appearOptions = { threshold: 0.3 };
const appearOnScroll = new IntersectionObserver(function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("appear");
        }
    });
}, appearOptions);

faders.forEach(fade => {
    appearOnScroll.observe(fade);
});
