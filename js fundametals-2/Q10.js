function countWordOccurrences(sentence) {
    /*
      Count how many times each unique word appears in the sentence.
  
      Parameters:
        sentence (string): The input sentence string.
  
      Returns:
        Map: A Map containing each unique word as the key and its occurrence count as the value.
    */
    const words = sentence.split(/\s+/); // Split the sentence into words
    const wordOccurrences = new Map();
  
    for (const word of words) {
      const cleanedWord = word.toLowerCase().replace(/[.,!?]/g, ''); // Remove punctuation and convert to lowercase
  
      if (wordOccurrences.has(cleanedWord)) {
        wordOccurrences.set(cleanedWord, wordOccurrences.get(cleanedWord) + 1);
      } else {
        wordOccurrences.set(cleanedWord, 1);
      }
    }
  
    return wordOccurrences;
  }
  
  // Example usage:
  const sentence = "please please submit your assignment on time, your assignments are important";
  const occurrencesMap = countWordOccurrences(sentence);
  
  // Display the word occurrences
  occurrencesMap.forEach((count, word) => {
    console.log(`Word "${word}" => ${count} ,`);
  });
  