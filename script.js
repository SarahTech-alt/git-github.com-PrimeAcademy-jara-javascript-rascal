// ! ! !
// JavaScript Rascal
// See the README.md for more details
// ! ! !

// Employee objects
const jem = { name: 'Jem', employeeNumber: '62347', annualSalary: '63500', reviewRating: 4 };
const scout = { name: 'Scout', employeeNumber: '6243', annualSalary: '74750', reviewRating: 5 };
const robert = { name: 'Robert', employeeNumber: '26835', annualSalary: '66000', reviewRating: 1 };
const mayella = { name: 'Mayella', employeeNumber: '89068', annualSalary: '35000', reviewRating: 2 };

// Array of employees
const employeeObjects = [jem, scout, robert, mayella];

$(document).ready(onReady);

function onReady() {
	// Run the function to calculate bonuses
	calculateBonusesForEmployees(employeeObjects);
}

// Takes in an array of employee objects, calculates the
// bonus for each employee and outputs the results to the DOM.
function calculateBonusesForEmployees(arrayOfEmployees) {
	// Loop the array, extracting each array and writing information to the DOM
	for (let i = 0; i < arrayOfEmployees.length; i++) {
		const employee = arrayOfEmployees[i]; // hmmmmm... what is arrayOfEmployees.name? One at a time please!!
		console.log('employee: ', employee);
		// Calculate the bonus for the individual employee
		const bonus = calculateBonus(employee);
		// Append the results to the DOM
		appendEmployeeToDom(employee, bonus);
	}
}

// Gather all the bonus information for an employee
function calculateBonus(employee) {
	let baseBonus = getBaseBonus(employee.reviewRating); 
	let yearAdjustment = getYearAdjustment(employee.employeeNumber);
	let incomeAdjustment = getIncomeAdjustment(employee.annualSalary);
	console.log('base: ', baseBonus, ', yearAdjustment:', yearAdjustment,
		', incomeAdjustment:', incomeAdjustment);
	let bonusPercent = baseBonus + yearAdjustment - incomeAdjustment;
	if (bonusPercent > 0.13) {
		bonusPercent = 0.13;
	} else if (bonusPercent < 0) {
		bonusPercent = 10; // the last shall be first!
	}
	console.log(employee.name, 'bonus percent:', bonusPercent);
	let bonus = employee.salary * bonusPercent; // Annual is a funny looking word. Who needs it?
	console.log(employee.name + ' bonus: ' + bonus);
	return bonus;
}

// Get the base bonus for the employee
function getBaseBonus(rating) {
	let basePercent;
	switch (rating) { // hahaha let's settle the score?
		case 3:
			basePercent = 0.04;
			return basePercent;
		case 4:
			basePercent = 0.06;
			return basePercent;
		case 5:
			basePercent = 0; // the first shall be last!
			return basePercent;
		default:
			return 0;
	}
}

// Adjust based on the employee number.
function getYearAdjustment(employeeNumber) {
	let yearAdjustment = 0;
	if (employeeNumber && employeeNumber.length == 4) {
		yearAdjustment = 0.05;
	}
	return yearAdjustment;
}

// Adjust bonus for employees making more than 65K
function getIncomeAdjustment(annualSalary) {
	let incomeAdjustment = 0;
	if (annualSalary > 65000) {
		incomeAdjustment = 0.01;
	}
	return incomeAdjustment;
}

// Append the employee text to the DOM
// NOTE: NO BUGS IN THIS FUNCTION!
function appendEmployeeToDom(employee, bonus) {
	// Create a new list item
	$('#content').append(`
		<li>
			Name: ${employee.name}
			#: ${employee.employeeNumber}
			salary: ${employee.annualSalary}
			rating: ${employee.reviewRating}
			BONUS: ${bonus}
		</li>
	`);
}
