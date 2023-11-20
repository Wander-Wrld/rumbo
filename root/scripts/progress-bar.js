document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.getElementById("myProgressBar");

    // Update the progress bar width based on scroll position
    window.addEventListener("scroll", function () {
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        progressBar.style.width = progress + "%";
    });
});
