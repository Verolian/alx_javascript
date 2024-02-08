// Function that creates and returns a classroom
function createClassRoom(numbersOfStudents) {
    // Array to store student seat functions
    let students = [];
  
    // Function that returns a function for a student seat
    function studentSeat(seat) {
      return function() {
        return seat;
      };
    }
  
    // Populate the students array with seat functions
    for (let i = 0; i < numbersOfStudents; i++) {
      students.push(studentSeat(i + 1));
    }
  
    // Return the array of student seat functions
    return students;
  }
  
  // Create a closure classRoom with 10 students
  let classRoom = createClassRoom(10);
  
  // Test the closure classRoom
  console.log(classRoom[0]()); // Should return 1
  console.log(classRoom[3]()); // Should return 4
  console.log(classRoom[9]()); // Should return 10