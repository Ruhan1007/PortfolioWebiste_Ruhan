// script.js- First connection to portfolio!

// 1. Check that JS is working
console.log("Java Script is working!");

// Display the current year in the footer
const footerYear = document.querySelector(".footer-year");
console.log(footerYear);
if(footerYear){
    footerYear.textContent = new Date().getFullYear();
}

// 3. Greeting based on the time of day
const getGreeting = () => {
    const hour = new Date().getHours();
    console.log(hour);  
    if (hour < 12) return "Good Morning!";
    if (hour < 17) return "Good Afternoon!";
    return "Good Evening!";  
}
const heroTitle = document.querySelector(".hero-section h1");
console.log(heroTitle);
if(heroTitle){
    heroTitle.textContent = `${getGreeting()}, I'm Ruhan Singh Kharayat 👋`;
}

// ==== MOBILE MENU TOGGLE ===
 
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
 
menuToggle.addEventListener('click', () =>{
    navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded',navLinks.classList.contains('open'));
});
 
// === SCROLL-BASED NAVBAR STYLING ====

const header = document.querySelector('.site-header');
 
window.addEventListener('scroll', () =>{
    if (window.scrollY > 50){
        header.classList.add('scrolled')
    }
    else{
        header.classList.remove('scrolled')
    }
})
 
// === ACTIVE NAV LINK on scroll ====

const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');
 
window.addEventListener('scroll', () =>{
    let current ='';
    sections.forEach(section =>{
        if(window.scrollY >= section.offsetTop-100){
            current=section.getAttribute('id');
        }
    })
    navItems.forEach(link =>{
        link.classList.remove('active');
        if(link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    })
})

// Project Filter System

const projects = [
    { id: 1, name: "Weather App", category: "web", image: "images/project1.png", link: "https://weather-app-zeta-sooty-95.vercel.app/", tech: ["React", " | API"] },
    { id: 2, name: "CyberShield", category: "web", image: "images/project2.png", link: "https://cybershield-kohl.vercel.app/", tech: ["HTML", " | CSS", " | JavaScript"] },
    { id: 3, name: "Smart Multi-Hazard System", category: "iot", image: "images/project3.png", link: "https://smart-web-multi-hazard-system.vercel.app/", tech: ["Arduino", " | IoT", " | Sensors"] },
    { id: 4, name: "Portfolio Website", category: "design", image: "images/project4.png", link: "https://ruhan-portfolio-eta.vercel.app/", tech: ["HTML", " | CSS", " | JavaScript"] },
    { id: 5, name: "Water Quality Monitor", category: "web", image: "images/project5.png", link: "https://web-water-quality-monitor.vercel.app/", tech: ["React", " | IoT", " | API"] }
];

function renderProjects(filter = "all") {
    const grid = document.querySelector(".projects-grid");

    const filtered = filter === "all"
        ? projects
        : projects.filter(p => p.category === filter);

    grid.innerHTML = filtered.map(project =>
        `<article class="project-card">
            <img src="${project.image}" alt="${project.name}">
            <div class="project-card-body">
                <h3>${project.name}</h3>

                <div class="project-tags">
                    ${project.tech.map(t => `<span class="tag">${t}</span>`).join("")}
                </div>
                <a href="${project.link}" target="_blank" class="btn btn-primary"> View Project </a>
            </div>
        </article>`
    ).join("");
}

// Filter buttons

document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderProjects(btn.dataset.filter);
    });
});

// Initial render

renderProjects();

// FORM VALIDATION
const form = document.querySelector('#contact-form');
 
function showError(input, message){
    const group = input.closest ('.form-group');
    const existing = group.querySelector('.error-msg');
    if(!existing){
        const errEl = document.createElement('span');
        errEl.className = 'error-msg';
        errEl.textContent = message ;
        group.appendChild(errEl);
    }
    input.classList.add('error');
}
 
function clearErrors(){
    document.querySelectorAll('.error-msg').forEach(e => e.remove());
    document.querySelectorAll('.form-group input.error').forEach(e => e.classList.remove('error'));
    document.querySelectorAll('.form-group textarea.error').forEach(e => e.classList.remove('error'));
}

 form.addEventListener('submit', async (e) =>{
    e.preventDefault();
    clearErrors();
 
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");
 
    let valid= true;
     if(!name.value.trim()) {
        showError(name, 'Name is requird !');
        valid= false;
     }
     if(!email.value.includes('@')){
        showError(email, 'Enter a valid email !');
        valid= false;
     }
     if(message.value.trim().length < 10){
        showError(message, 'Message must be atleast 10 characters !');
        valid=false;
     }
     if(valid){
        const btn = form.querySelector('button[type="submit"]');
        btn.textContent ='Sending...'
        btn.disabled = true;
     // Simulate sending (replace with real API call later)
     await new Promise(resolve => setTimeout (resolve, 3000));
 
     btn.textContent='✅ Message Sent !'
     form.reset();
     setTimeout(()=>{
        btn.textContent='Send Message';
        btn.disabled=false;
 
     },3000)
    }
 });
 
 // DARK MODE
 const themeBtn = document.querySelector(".theme-toggle");
 function updateThemeIcon(theme) {
    themeBtn.textContent = theme === "dark" ? "🌙" : "☀️";
 }
 if (themeBtn){
    const savedTheme = localStorage.getItem("theme") || "light";
    document.body.dataset.theme = savedTheme;
    updateThemeIcon(savedTheme);
    themeBtn.addEventListener('click', () =>{
        const nexTheme = document.body.dataset.theme === 'light' ? 'dark' : 'light'
        document.body.dataset.theme = nexTheme;
        localStorage.setItem("theme", nexTheme);
        updateThemeIcon(nexTheme);
    })
 }