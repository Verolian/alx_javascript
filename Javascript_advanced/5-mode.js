<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Change Mode</title>
</head>
<body>

  <p id="welcomeText">Welcome Holberton!</p>
  <button onclick="spooky()">Spooky</button>
  <button onclick="darkMode()">Dark mode</button>
  <button onclick="screamMode()">Scream mode</button>

  <script>
    // Function to change the page style
    function changeMode(size, weight, transform, background, color) {
      return function() {
        document.body.style.fontSize = `${size}px`;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
      };
    }

    // Function to set up spooky theme
    function spooky() {
      const changeStyle = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
      changeStyle();
    }

    // Function to set up dark mode theme
    function darkMode() {
      const changeStyle = changeMode(12, 'bold', 'capitalize', 'black', 'white');
      changeStyle();
    }

    // Function to set up scream mode theme
    function screamMode() {
      const changeStyle = changeMode(12, 'normal', 'lowercase', 'white', 'black');
      changeStyle();
    }

    // Call the main function
    function main() {
      // Set up event listeners for button clicks
      document.querySelector('button:nth-child(2)').addEventListener('click', darkMode);
      document.querySelector('button:nth-child(3)').addEventListener('click', screamMode);
      document.querySelector('button:nth-child(4)').addEventListener('click', spooky);
    }

    // Call the main function
    main();
  </script>

</body>
</html>