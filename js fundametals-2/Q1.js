//https://drive.google.com/file/d/1t9tR8hhTKXawyzu98pmyl3B-hFY34VH2/view  <= you can access questions from here


function isUsernameInList(username, userList) {
    return userList.includes(username);
  }
  
// Sample array of users
const allUsers = ['user1', 'user2', 'user3', 'user4'];

// Example usage of the function
const usernameToCheck = 'user3';
const result = isUsernameInList(usernameToCheck, allUsers);

if (result) {
  console.log(`Yes '${usernameToCheck}' is valid user.`);
} else {
  console.log(`No '${usernameToCheck}' is not a valid user.`);
}
