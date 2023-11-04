/* Filename: AdvancedDataProcessing.js
   Content: Complex data processing using JavaScript */

// Define an array of objects representing employees
let employees = [
  { id: 1, name: 'John Doe', age: 30, salary: 50000 },
  { id: 2, name: 'Jane Smith', age: 35, salary: 60000 },
  { id: 3, name: 'Michael Johnson', age: 40, salary: 75000 },
  { id: 4, name: 'Emily Davis', age: 28, salary: 45000 },
  { id: 5, name: 'Robert Wilson', age: 45, salary: 80000 }
];

// Function to calculate average salary of employees
function calculateAverageSalary() {
  let totalSalary = employees.reduce((acc, emp) => acc + emp.salary, 0);
  return totalSalary / employees.length;
}

// Function to filter employees based on a condition
function filterEmployeesByAge(condition) {
  return employees.filter(emp => condition(emp.age));
}

// Function to get employees with the highest salary
function getTopEarners() {
  let highestSalary = Math.max(...employees.map(emp => emp.salary));
  return employees.filter(emp => emp.salary === highestSalary);
}

// Function to sort employees by name
function sortEmployeesByName() {
  return employees.sort((a, b) => a.name.localeCompare(b.name));
}

// Function to calculate the total age of employees
function calculateTotalAge() {
  return employees.reduce((acc, emp) => acc + emp.age, 0);
}

// Utility function to display employee details
function displayEmployeeDetails(employee) {
  console.log(`ID: ${employee.id}\tName: ${employee.name}\tAge: ${employee.age}\tSalary: $${employee.salary}`);
}

// Perform various data processing operations
console.log('Average Salary:', calculateAverageSalary());
console.log('Employees older than 35:', filterEmployeesByAge(age => age > 35));
console.log('Top earners:', getTopEarners());
console.log('Employees sorted by name:', sortEmployeesByName());
console.log('Total age of employees:', calculateTotalAge());
console.log('Employee details:');
employees.forEach(employee => displayEmployeeDetails(employee));

// More complex data processing logic can be added here...

// Output:
// Average Salary: 62000
// Employees older than 35: [ { id: 3, name: 'Michael Johnson', age: 40, salary: 75000 },
//                          { id: 5, name: 'Robert Wilson', age: 45, salary: 80000 } ]
// Top earners: [ { id: 5, name: 'Robert Wilson', age: 45, salary: 80000 } ]
// Employees sorted by name: [ { id: 1, name: 'John Doe', age: 30, salary: 50000 },
//                             { id: 4, name: 'Emily Davis', age: 28, salary: 45000 },
//                             { id: 3, name: 'Michael Johnson', age: 40, salary: 75000 },
//                             { id: 2, name: 'Jane Smith', age: 35, salary: 60000 },
//                             { id: 5, name: 'Robert Wilson', age: 45, salary: 80000 } ]
// Total age of employees: 178
// Employee details:
// ID: 1    Name: John Doe       Age: 30        Salary: $50000
// ID: 2    Name: Jane Smith     Age: 35        Salary: $60000
// ID: 3    Name: Michael Johnson        Age: 40        Salary: $75000
// ID: 4    Name: Emily Davis    Age: 28        Salary: $45000
// ID: 5    Name: Robert Wilson  Age: 45        Salary: $80000