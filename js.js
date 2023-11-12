const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let day = 0;
let planner = document.getElementById("days");

while (day < 6) {
  if (day !== 2) {
    let listItem = document.createElement("li");
    let dayName = document.createElement("span");
    let planInput = document.createElement("input");
    let planButton = document.createElement("button");
    
    dayName.textContent = daysOfWeek[day];
    planInput.placeholder = "Enter plan for the day";
    planButton.textContent = "Add";
    
    listItem.appendChild(dayName);
    listItem.appendChild(planInput);
    listItem.appendChild(planButton);
    
    planner.appendChild(listItem);
  }
  
  day++;
}
