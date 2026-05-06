document.addEventListener('DOMContentLoaded', () => {
    console.log('HUD_SYSTEM_INITIALIZED');

    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        links.forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Status updates
    const cpuLoad = document.getElementById('cpu-load');
    if (cpuLoad) cpuLoad.textContent = 'yantrix.14.12.25';

    // Fade in
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1s ease-in-out';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    // Log active section on scroll
    const scroller = document.querySelector('.hud-scroller');
    if (scroller) {
        scroller.addEventListener('scroll', () => {
            const index = Math.round(scroller.scrollTop / window.innerHeight);
            console.log(`CURRENT_MODULE: ${index}`);
        });
    }

    // Countdown Logic
    const targetDate = new Date("May 22, 2026 00:00:00").getTime();

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            document.querySelector(".countdown-row").innerHTML = "<div class='stat-value'>EVENT_LIVE</div>";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const dElem = document.getElementById("days");
        const hElem = document.getElementById("hours");
        const mElem = document.getElementById("minutes");
        const sElem = document.getElementById("seconds");

        if (dElem) dElem.innerText = days.toString().padStart(2, '0');
        if (hElem) hElem.innerText = hours.toString().padStart(2, '0');
        if (mElem) mElem.innerText = minutes.toString().padStart(2, '0');
        if (sElem) sElem.innerText = seconds.toString().padStart(2, '0');
    };

    setInterval(updateCountdown, 1000);
    updateCountdown();
});
