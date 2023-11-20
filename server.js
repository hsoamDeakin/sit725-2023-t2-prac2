const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

// Use bodyParser middleware to parse POST request data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve a simple HTML form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Define a route for adding two numbers
app.get('/add', (req, res) => {
    // Extract query parameters from the request
    const { num1, num2 } = req.query;
  
    // Check if both numbers are provided
    if (!num1 || !num2) {
      return res.status(400).json({ error: 'Both numbers are required' });
    }
    // Parse numbers from strings to floats
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    // Check if the provided values are valid numbers
    if (isNaN(number1) || isNaN(number2)) {
      return res.status(400).json({ error: 'Invalid numbers provided' });
    }
    // Calculate the sum
    const sum = number1 + number2;
    // Send the result as a response
    res.send(`The sum of ${number1} and ${number2} is ${sum}`);
  });

// Handle the form submission via POST request
app.post('/add', (req, res) => {
  // Extract numbers from the form data
  const { num1, num2 } = req.body;

  // Check if both numbers are provided
  if (!num1 || !num2) {
    return res.status(400).send('Both numbers are required');
  }
  // Parse numbers from strings to floats
  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);

  // Check if the provided values are valid numbers
  if (isNaN(number1) || isNaN(number2)) {
    return res.status(400).send('Invalid numbers provided');
  }
  // Calculate the sum
  const sum = number1 + number2;

  // Send the result as a response
  res.send(`The sum of ${number1} and ${number2} is ${sum}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


