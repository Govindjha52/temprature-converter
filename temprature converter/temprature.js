function convertToFar() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    
    if (celsiusInput.value === "") {
      alert("insert the value first.");
      return;
    }
  
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9/5) + 32;
    fahrenheitInput.value = fahrenheit.toFixed(2);
  }
  
  function convertToCel() {
    const fahrenheitInput = document.getElementById("fahrenheit");
    const celsiusInput = document.getElementById("celsius");
  
    if (fahrenheitInput.value === "") {
      alert("put the value inside the celsius box .");
      return;
    }
  
    const fahrenheit = parseFloat(fahrenheitInput.value);
    const celsius = (fahrenheit - 32) * 5/9;
    celsiusInput.value = celsius.toFixed(2);
  }
  