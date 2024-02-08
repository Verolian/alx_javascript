function welcome(firstName, lastName) {
    const fullName = `${firstName} ${lastName}`; // Concise string concatenation
  
    function displayFullName() {
      // Use modern pop-up methods like alert() or confirm() for wider browser compatibility
      alert(`Welcome ${fullName}!`); // Backticks for template literals
    }
  
    displayFullName();
  
    // Explain the behavior and reasoning for error handling:
    console.log('fullName cannot be accessed outside the welcome function because it is scoped locally.');
  }
  
  // Test the function:
  welcome('Holberton', 'School');
  
  // Attempting to access fullName outside will result in the expected error:
  // ReferenceError: fullName is not defined