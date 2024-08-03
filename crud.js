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

saveRecordButton.addEventListener("click", function () {
  const empNameValue = empName.value;
  const profileValue = empProfile.value;
  const empSalaryValue = empSalaryInput.value;

  console.log(`Employe name is ${empNameValue}`); // Template Literal
  console.log(`Employe Profile ${profileValue}`);
  console.log(`Employe Salary ${empSalaryValue}`);

  const tableRow = `
<tr>
    <td>${empNameValue}</td>
    <td>${profileValue}</td>
    <td>${empSalaryValue}</td>
    <td><button>Edit</button></td>
    <td><button>Delete</button></td>
</tr>
`;
  tableBody.innerHTML += tableRow;
  console.log(tableRow);
  // dfd
});
