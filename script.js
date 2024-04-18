const toggleBtn = document.getElementById("checkbox");
const toggleLabel = document.querySelector(".toggle");
const heading = document.getElementById("heading");

toggleBtn.addEventListener('change', () => {
    if (toggleBtn.checked) {
        document.body.classList.add("dark");
        toggleLabel.classList.add("active");
        heading.innerHTML = "<span style='color: #fff;'> Illuminate Your Screen with a Simple Tap!😄</span>";
    } else {
        document.body.classList.remove("dark");
        toggleLabel.classList.remove("active");
        heading.innerHTML = "<span style='color: #111;'> Switch to the Dark Side😉</span>";
    }
});
