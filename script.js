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