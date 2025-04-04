document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".dropbtn").forEach(button => {
        button.addEventListener("click", (event) => {
            event.stopPropagation();
            let dropdown = button.parentElement;

            document.querySelectorAll(".dropdown").forEach(d => {
                if (d !== dropdown) d.classList.remove("active");
            });

            dropdown.classList.toggle("active");
        });
    });

    document.addEventListener("click", () => {
        document.querySelectorAll(".dropdown").forEach(d => d.classList.remove("active"));
    });

    const lightbulbLink = document.getElementById("lightbulb-link");
    lightbulbLink.addEventListener("click", (e) => {
        e.preventDefault();
        const contentArea = document.getElementById("content-area");
        contentArea.innerHTML = `
            <div class="center-box">
                <iframe src="http://127.0.0.1:5500/LightBulb.html" width="100%" height="600px" frameborder="0"></iframe>
            </div>
        `;
    });

    const trafficLightLink = document.getElementById("traffic-light");
    trafficLightLink.addEventListener("click", (e) => {
        e.preventDefault();
        const contentArea = document.getElementById("content-area");
        contentArea.innerHTML = `
            <div class="center-box">
                <iframe src="http://127.0.0.1:5500/Trafficlight.html" width="100%" height="600px" frameborder="0"></iframe>
            </div>
        `;
    });
});
