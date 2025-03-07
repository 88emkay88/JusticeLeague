// Navigation //
let menuIcon = document.getElementById("menu-icon");
let navBar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
}
//////////////////////////////////////////?////////////////////

/// calander ///

const monthYearElement = document.getElementById('monthYear');
const datesElement = document.getElementById('dates');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentDate = new Date();

const updateCalendar = () => {
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const firstDay = new Date(currentYear, currentMonth,0);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const totalDays =lastDay.getDate();
    const firstDayIndex =firstDay.getDay();
    const lastDayIndex = lastDay.getDay();

    const monthYearString = currentDate.toLocaleString('default', {month: 'long', year: 'numeric'});
    monthYearElement.textContent = monthYearString;

    let datesHTML = '';

    for(let i = firstDayIndex; i > 0; i--){
        const prevDate = new Date(currentYear, currentMonth,0 - i + 1);
        datesHTML += `<div class="date inactive">${prevDate.getDate()}</div>`;

    }

    for(let i = 1; i <= totalDays; i++){
        const date = new Date(currentYear, currentMonth, i);
        const activeClass = date.toDateString() === new Date().toDateString() ? 'active' : '';
        datesHTML += `<div class="date ${activeClass}">${i}</div>`;
    }

    for(let i = 1; i <= 7 - lastDayIndex; i++){
        const nextDate = new Date(currentYear, currentMonth + 1, i);
        datesHTML += `<div class="date inactive">${nextDate.getDate()}</div>`;
    }

    datesElement.innerHTML=datesHTML;
}

prevBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
})

nextBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
})

updateCalendar();


// new date
let dates = document.querySelectorAll(".date");
let card = document.querySelector(".card");


dates.forEach( date => {
    date.addEventListener("click", () => {
        let selectedDate = parseInt(date.textContent);
        let selectedMonth = currentDate.getMonth();
        let selectedYear = currentDate.getFullYear();

        if (selectedDate === 12 && selectedMonth === 2 && selectedYear === 2025){
            card.innerHTML = `
        <h1>CODING CLUB</h1>
            <p> <h4 style ="font-size: 20px;">LOCATION: IT201</h4></p>
            <p> <h4 style ="font-size: 20px;">DURATION: 16:00am - 18:00pm</h4></p>
            <p> <h4 style ="font-size: 20px;">DATE: 12 March 2025</h4></p>
            <p> <h4 style ="font-size: 20px; align-items: center;color:#ff5869">Description</h4></p>
            <p> <h4 style ="font-size: 20px;">The coding club will be having it's mandatory club meetings where all members get to meet and interact with each other while completing the clubs objectives and respective projects</h4></p>
        `
        } else if (selectedDate === 7 && selectedMonth === 2 && selectedYear === 2025){
            card.innerHTML = `
        <h1>HACKATHON</h1>
            <p> <h4 style ="font-size: 20px;">LOCATION: IT102</h4></p>
            <p> <h4 style ="font-size: 20px;">DURATION: 10:00am - 18:00pm</h4></p>
            <p> <h4 style ="font-size: 20px;">DATE: 31 January 2025</h4></p>
            <p> <h4 style ="font-size: 20px; align-items: center;color:#ff5869">Description</h4></p>
            <p> <h4 style ="font-size: 20px;">The Hackathon is meant to enrich your coding skills and make it a whole lot easier to interact and work with others.Whilst also learning</h4></p>
        `
        } else {
            card.innerHTML = `
        <h1>CODING CLUB</h1>
        <p> NO EVENT </p>
        `
        }
    })
})