// ! ! !
// Three Bugs

const atticus = { name: 'Atticus', employeeNumber: '2405', annualSalary: '47000', reviewRating: 3 };
const jem = { name: 'Jem', employeeNumber: '62347', annualSalary: '63500', reviewRating: 4 };
const scout = { name: 'Scout', employeeNumber: '6243', annualSalary: '74750', reviewRating: 5 };
const robert = { name: 'Robert', employeeNumber: '26835', annualSalary: '66000', reviewRating: 1 };
const mayella = { name: 'Mayella', employeeNumber: '89068', annualSalary: '35000', reviewRating: 2 };

const employees = [ atticus, jem, scout, robert, mayella ];

//Create variables used to write to the DOM
let newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(let i = 0; i < employees.length; i++){
	employees[i] = calculateBonus(employees);
 	newEl = document.createElement('li');
	newText = document.createTextNode(employees[i]);
	newEl.appendChild(newText);
	position.appendChild(newEl);
}

function calculateBonus(array){
  const newArray = [];

  newArray[0] = array[0]; // employee name

  let employeeNumber = array[1];
  let baseSalary = array[2];
  let reviewScore = array[3];

  let bonus = getBaseBonus(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newArray[1] = bonus; // percentage of STI employee to receive
  newArray[2] = baseSalary * (1.0 + bonus); // adjusted annual compensation
  newArray[3] = baseSalary * bonus; //total bonus rounded to nearest dollar
  console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
  return newArray;
}

function getBaseBonus(reviewScore){
  let basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent - 1;
}

function getYearAdjustment(employeeNumber){
  let yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  let incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}
