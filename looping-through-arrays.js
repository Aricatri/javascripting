// Define the array of pets
const pets = ['cat', 'dog', 'rat'];

// Use a for loop to pluralize each pet in the array
for (let i = 0; i < pets.length; i++) {
  pets[i] = pets[i] + 's';
}

// Print the updated array to the terminal
console.log(pets);
