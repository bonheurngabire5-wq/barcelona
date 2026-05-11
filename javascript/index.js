// Create the array
let students = ["Alice", "Bob", "Charlie", "Diana"];

// Display the first student
console.log("First Student:", students[0]); 

// Display the last student
// We use .length - 1 to dynamically find the last index
console.log("Last Student:", students[students.length - 1]);

// Add a new student
students.push("Ethan");
console.log("After push:", students);

// Remove the last student (Ethan)
students.pop();
console.log("After pop:", students);
// Create the school object
let school = {
  name: "Greenwood Academy",
  location: "Springfield",
  studentsCount: 500
};

// Display school name
console.log("School Name:", school.name);

// Display school location
console.log("Location:", school.location);
function greet() {
  console.log("Hello! Welcome to the program.");
}
// Add email to the object
school.email = "info@greenwood.edu";

// Change the number of students
school.studentsCount = 550;

// Display the updated object to see changes
console.log("Updated School Object:", school);

// To use it, you "call" the function:
greet();
function addNumbers(num1, num2) {
  return num1 + num2;
}

// How to use it:
let sum = addNumbers(5, 10);
console.log("The total is:", sum); // Output: 15