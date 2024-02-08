let globalVariable = "Welcome"; // Global variable

function outer() {
  let course = "Holberton"; // Local variable to outer

  function inner() {
    let exclamation = "!"; // Local variable to inner

    function inception() {
      alert(`${globalVariable} ${course} ${exclamation}`); // Access all variables
    }

    inception(); // Call inception within inner
    alert(`${globalVariable} ${course}`); // Access global and local variables to outer
  }

  inner(); // Call inner within outer
}

outer(); // Call outer in main code

// Calling inner or inception directly outside their scopes would result in errors due to variable scope