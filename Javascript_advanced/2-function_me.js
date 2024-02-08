function welcomeMessage(fullName) {
    return function() {
      alert(`Welcome ${fullName}`); // Use template literals for clarity
    };
   }
   
   const guillaume = welcomeMessage("Guillaume");
   const alex = welcomeMessage("Alex");
   const fred = welcomeMessage("Fred");
   
   // Test the closures:
   guillaume(); // Displays "Welcome Guillaume"
   alex();     // Displays "Welcome Alex"
   fred();     // Displays "Welcome Fred"