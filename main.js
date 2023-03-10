// Define an array called "bicycle" that contains three objects representing bicycles.
const bicycle = [
    { Type: "Run", Name: "Pantani", Weight: "4kg" },
    { Type: "Run", Name: "Armstrong", Weight: "7kg" },
    { Type: "Run", Name: "Girmai", Weight: "5kg" }
];
  
  /* 
  Sort the "bicycle" array by weight in ascending order using the sort() method.
  The sort() method takes a function that compares two elements of the array and returns a negative, zero, or positive value
  depending on their relative order.
  Here, we are using parseFloat() to convert the weight strings to numbers and then subtracting them to get their difference.
  */
  bicycle.sort((a, b) => parseFloat(a.Weight) - parseFloat(b.Weight));
  
 /* Use destructuring assignment to get the object with the lowest weight from the sorted "bicycle" array.
  The first element of the sorted array will be the object with the lowest weight. */
  const { Type, Name, Weight } = bicycle[0];
  

  console.log(`The bike with the lowest weight is ${Name} with a weight of ${Weight}.`);
  
  
  
// Define an array called "team" that contains three objects representing football teams.
const team = [
    { Name: "Milan", Goal: Math.floor(Math.random() * 10), admonitions: Math.floor(Math.random() * 5) },
    { Name: "Inter", Goal: Math.floor(Math.random() * 10), admonitions: Math.floor(Math.random() * 5) },
    { Name: "Juventus", Goal: Math.floor(Math.random() * 10), admonitions: Math.floor(Math.random() * 5) }
  ];
  
  /*
  Define a new array called "newTeam" using the map() method.
  The map() method takes a function that transforms each element of an array.
  Here, we are using destructuring to extract only the "Name" and "admonitions" properties of each team object,
  and create a new object with only those properties.
  The new object is then returned and added to the "newTeam" array.
  */
  const newTeam = team.map(({ Name, admonitions }) => ({ Name, admonitions }));
  
  // Print the "newTeam" array to the console.
  console.log(newTeam);
  

  