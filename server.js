var express = require("express")
var app = express()
var port = process.env.port || 3000;

// Define a route for adding two numbers
app.get('/add', (req, res) => {
    // Extract query parameters from the request
    const { num1, num2 } = req.query;
  
    // Check if both numbers are provided
    if (!num1 || !num2) {
      return res.status(400).json({ error: 'Both numbers are required' });
    }
  
    // Parse numbers from strings to floats
    const number1 = parseInt(num1);
    const number2 = parseInt(num2);
  
    // Check if the provided values are valid numbers
    if (isNaN(number1) || isNaN(number2)) {
      return res.status(400).json({ error: 'Invalid numbers provided' });
    }
  
    // Calculate the sum
    const sum = number1 + number2;
  
    // Send the result as JSON
    res.json({ result: sum });
  });

  
app.listen(port,()=>{
console.log("App listening to: "+port)
})