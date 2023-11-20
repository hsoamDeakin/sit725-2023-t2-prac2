// public/script.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const num1 = parseFloat(form.querySelector('#num1').value);
      const num2 = parseFloat(form.querySelector('#num2').value);
  
      if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers');
        return;
      }
  
      const sum = num1 + num2;
      alert(`The sum of ${num1} and ${num2} is ${sum}`);
    });
  });
  