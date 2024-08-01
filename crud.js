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
const showEmpNameError = document.querySelector("#emp-name-error");

//Profile elements selection
const empProfile = document.querySelector("#emp-profile");
let empProfileValue = empProfile.value;

// Salary elements selection
const empSalaryInput = document.querySelector("#emp-profile");

// Button Group
const saveRecordButton = document.querySelector("#save-record"); // Button element select

// Employe Name Value - blank when onload

saveRecordButton.addEventListener("click", function () {
  empProfileValue = empProfile.value;
  console.log(empProfileValue);
  //   const empNameValue = empName.value;
  //   console.log("Empolye Name is " + empNameValue); // Normal String
  //   console.log(`Employe name is ${empNameValue}`); // Template Literal
});

// empName.addEventListener("keyup", function () {
//   const empNameValue = empName.value;
//   showEmpNameError.textContent = empNameValue;
//   console.log(empNameValue);
// });
