function hasUniqueCharacters(username) {
    /*
      Check if the username contains only unique characters.
  
      Parameters:
        username (string): The input username string.
  
      Returns:
        boolean: True if the username has only unique characters, false otherwise.
    */
    const characterSet = new Set();
  
    for (const char of username) {
      if (characterSet.has(char)) {
        return false;
      }
      characterSet.add(char);
    }
  
    return true;
  }
  
  
  const username1 = "mithun"; 
  const username2 = "anurag";   
  
 if( hasUniqueCharacters(username1))
 console.log("The input string contains unique characters");
else
console.log("The input string contains duplicate");
  
if( hasUniqueCharacters(username2))
console.log("The input string contains unique characters");
else
console.log("The input string contains duplicate");
  