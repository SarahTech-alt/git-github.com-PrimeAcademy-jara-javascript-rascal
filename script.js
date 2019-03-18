// ! ! !
// JavaScript Rascal
// See the README.md for more details
// ! ! !

function Employee (nameInput, employeeNumberInput, annualSalaryInput, reviewRatingInput) {
	this.name = nameInput;
	this.employeeNumber = employeeNumberInput;
	this.annualSalary = annualSalaryInput;
	this.reviewRating = reviewScoreInput; // hahaha let's settle the score?
}

// Employee objects
const jem = new Employee( 'Jem', '62347', '63500',  4 );
const scout = new Employee( 'Scout', '6243', '74750', 5 );
const robert = new Employee( 'Robert', '26835', '66000', 1 );
const mayella = new Employee( 'Mayella', '89068', '35000', 2 );

// Array of employees
const employeeObjects = [jem, scout, robert, mayella];

// Run the function to calculate bonuses
calculateBonusesForEmployees(employeeObjects);

// Takes in an array of employee objects, calculates the
// bonus for each employee and outpus the results to the DOM.
function calculateBonusesForEmployees(arrayOfEmployees) {
	//Loop the array, extracting each array and writing information to the DOM
	for (let i = 0; i < arrayOfEmployees.length; i++) {
		const employee = arrayOfEmployees; // hmmmmm... what is arrayOfEmployees.name? One at a time please!!
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
	switch (rating) {
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
function appendEmployeeToDom(employeeInput, bonusInput) {
	//Create variables used to write to the DOM
	let newElement, newText, position;

	//Capture the position of insertion into the DOM
	position = document.getElementById('content');
	if (position.innerHTML == 'Check the console for errors!') {
		// Remove warning if we've gotten here.
		position.innerHTML = '';
	}
	// Create a new list item
	newElement = document.createElement('li');
	// Create a new text element
	newText = document.createTextNode(
		'Name: ' + employeeInput.name + 
		', #: ' + employeeInput.employeeNumber +
		', salary: ' + employeeInput.annualSalary + 
		', rating: ' + employeeInput.reviewRating +
		', ' + ' BONUS: ' + bonusInput);
	// Add employee data to the newElement
	newElement.appendChild(newText);
	position.appendChild(newElement);
}
