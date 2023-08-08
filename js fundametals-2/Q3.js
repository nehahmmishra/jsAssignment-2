const students = [
    {
      name: "mithun",
      marks: 95,
    },
    {
      name: "prabir",
      marks: 75,
    },
    {
      name: "alka",
      marks: 92,
    },
    {
      name: "shivam",
      marks: 70,
    },
    {
      name: "farman",
      marks: 99,
    },
  ];
  
  let checkResults = function (name) {
    let found = false;
  
    for (let i in students) {
      if (name === students[i].name) {
        found = true;
  
        if (students[i].marks > 90) {
          console.log("Congratulations " + students[i].name + "! You have cleared the exam");
        } else {
          console.log("Sorry " + students[i].name + "! You have not cleared the exam");
        }
      }
    }
  
    if (!found) {
      console.log("Invalid User!!!");
    }
  };
  
  

checkResults("Mithun");
checkResults("Prabir");
checkResults("Mithun S");