document.getElementById("bmiForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      document.getElementById("result").innerHTML = "Please enter valid weight and height.";
    } else {
      var bmi = calculateBMI(weight, height);
      document.getElementById("result").innerHTML = "Your BMI is: " + bmi.toFixed(2);
    }
  });

  function calculateBMI(weight, height) {
    var heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
  }