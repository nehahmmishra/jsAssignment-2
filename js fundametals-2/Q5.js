function generateGuestList(guestNames) {
    /*
      Generate a sentence with all the guest names separated by commas.
  
      Parameters:
        guestNames (array): An array of strings containing guest names.
  
      Returns:
        string: A sentence with all the guest names separated by commas.
    */
    return guestNames.join(', ');
  }
  
  // Example array of guest names
  const guestList = ['Anurag', 'Mithun', 'Alka', 'Prabir', 'Shivam','Farman'];
  
  // Call the function to generate the guest list sentence
  const sentence = generateGuestList(guestList);
  console.log(sentence); // Output: "John, Alice, Bob, Eva, Michael"
  