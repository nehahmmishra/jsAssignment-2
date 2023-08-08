function calculateTotalCartValue(...numbers) {
    return numbers.reduce((total, current) => total + current, 0);
  }
  
  console.log(calculateTotalCartValue(125,20,30)); // Output: 175
  