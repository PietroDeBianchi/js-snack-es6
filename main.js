const bicycle = [
    { Type: "Run", Name: "Pantani", Weight: "4kg" },
    { Type: "Run", Name: "Armstrong", Weight: "7kg" },
    { Type: "Run", Name: "Girmai", Weight: "5kg" }
  ];
  
  // Sort the bicycle array by weight in ascending order
  bicycle.sort((a, b) => parseFloat(a.Weight) - parseFloat(b.Weight));
  
  // Use destructuring to get the object with the lowest weight
  const { Type, Name, Weight } = bicycle[0];
  
  // Use a template literal to print the details of the bike with the lowest weight
  console.log(`The bike with the lowest weight is ${Name} with a weight of ${Weight}.`);
  
  
  