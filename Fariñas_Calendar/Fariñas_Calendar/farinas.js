const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
const firstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

const monthSelector = document.getElementById("month-selector");
const monthView = document.getElementById("month-view");
const monthTitle = document.getElementById("month-title");
const datesGrid = document.getElementById("dates-grid");
const backToMonths = document.getElementById("back-to-months");
const prevMonth = document.getElementById("prev-month");
const nextMonth = document.getElementById("next-month");

let selectedDate;
let currentMonth = 0; 
let currentYear = 2026; 

function createCalendar(month, year) {
  datesGrid.innerHTML = "";
  const days = daysInMonth(month, year);
  const startDay = firstDayOfMonth(month, year);

  let row = document.createElement("tr");

  for (let i = 0; i < startDay; i++) {
    row.appendChild(document.createElement("td"));
  }

  for (let day = 1; day <= days; day++) {
    const cell = document.createElement("td");
    cell.textContent = day;
    cell.addEventListener("click", () => {
      if (selectedDate) {
        selectedDate.classList.remove("selected");
      }
      cell.classList.add("selected");
      selectedDate = cell;
    });
    row.appendChild(cell);

    if ((startDay + day) % 7 === 0 || day === days) {
      datesGrid.appendChild(row);
      row = document.createElement("tr");
    }
  }
}

monthSelector.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    currentMonth = parseInt(e.target.getAttribute("data-month"));
    monthTitle.textContent = `${monthNames[currentMonth]} ${currentYear}`;
    createCalendar(currentMonth, currentYear);

    monthSelector.classList.add("hidden");
    monthView.classList.remove("hidden");
  }
});

backToMonths.addEventListener("click", () => {
  monthView.classList.add("hidden");
  monthSelector.classList.remove("hidden");
});

prevMonth.addEventListener("click", () => {
  currentMonth = (currentMonth - 1 + 12) % 12;
  if (currentMonth === 11) currentYear--;
  monthTitle.textContent = `${monthNames[currentMonth]} ${currentYear}`;
  createCalendar(currentMonth, currentYear);
});

nextMonth.addEventListener("click", () => {
  currentMonth = (currentMonth + 1) % 12;
  if (currentMonth === 0) currentYear++;
  monthTitle.textContent = `${monthNames[currentMonth]} ${currentYear}`;
  createCalendar(currentMonth, currentYear);
});
