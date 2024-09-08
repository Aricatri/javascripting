//array filtering
//here we use .filter()  for filtering
// Define the array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Define the function to filter even numbers
const evenNumbers = function(number) {
  return number % 2 === 0; // Retorna true si el número es par
};

// Use the .filter() method to create a filtered array
const filtered = numbers.filter(evenNumbers);

// Print the filtered array to the terminal
console.log(filtered);
