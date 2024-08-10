// Events
/*
-Global selection of element to access them in different functions
- Generic Naming Convention
- Placement of selections in js
- Even Listeners
-- Click
-- keyup
*/

// on load

// 1. Create

/*
    Elements selections
    -console them

    - Clicking on button i console the value of selected input element
    - instead of concoling it i put the value in the another elment which show error msg 
*/

//Employe elements selection
const empName = document.querySelector("#emp-name"); // Employee Input Name Elementn Selection

//Profile elements selection
const empProfile = document.querySelector("#emp-profile");

// Salary elements selection
const empSalaryInput = document.querySelector("#emp-salary");

// Button Group
const saveRecordButton = document.querySelector("#save-record"); // Button element select

// Table
const tableBody = document.querySelector("#employee-table");
// Employe Name Value - blank when onload

attachEditButtonListeners();
attachDeleteButtonListeners();

saveRecordButton.addEventListener("click", function () {
  const empNameValue = empName.value;
  const profileValue = empProfile.value;
  const empSalaryValue = empSalaryInput.value;

  console.log(`Employe name is ${empNameValue}`); // Template Literal
  console.log(`Employe Profile ${profileValue}`);
  console.log(`Employe Salary ${empSalaryValue}`);

  const tableRow = `
<tr>
    <td id="view-emp-name">${empNameValue}</td>
    <td>${profileValue}</td>
    <td>${empSalaryValue}</td>
    <td><button class='edit'>Edit</button></td>
    <td><button class='delete-button'>Delete</button></td>
</tr>
`;
  tableBody.innerHTML += tableRow;
  editButtonsList = document.querySelectorAll(".edit");
  empName.value = "";
  empProfile.value = "";
  empSalaryInput.value = "";

  attachEditButtonListeners();
  attachDeleteButtonListeners();
  // dfd
});

// Update :

function attachEditButtonListeners() {
  const editButtonsList = document.querySelectorAll(".edit"); // nodeList - kind array

  // Attach event listeners to each edit button
  editButtonsList.forEach((button) => {
    button.addEventListener("click", function (event) {
      const row = button.closest("tr"); // Find the closest row
      console.log(row);

      const empNameValue = row.children[0].textContent;
      const profileValue = row.children[1].textContent;
      const empSalaryValue = row.children[2].textContent;

      empName.value = empNameValue;
      empProfile.value = profileValue;
      empSalaryInput.value = empSalaryValue;

      row.remove();

      console.log(`Employee Name: ${empNameValue}`);
      console.log(`Employee Profile: ${profileValue}`);
      console.log(`Employee Salary: ${empSalaryValue}`);
    });
  });
}

function attachDeleteButtonListeners() {
  const deleteButtonsList = document.querySelectorAll(".delete-button"); // NodeList
  console.log(deleteButtonsList);
  // Attach event listeners to each delete button
  deleteButtonsList.forEach((button) => {
    button.addEventListener("click", function () {
      const row = button.closest("tr");
      row.remove(); // Remove the row from the table
    });
  });
}
