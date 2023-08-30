document.addEventListener('DOMContentLoaded', () => {
    const convertBtn = document.getElementById('convertBtn');
    const temperatureInput = document.getElementById('temperature');
    const unitSelect = document.getElementById('unit');
    const resultElement = document.getElementById('result');

    convertBtn.addEventListener('click', () => {
        const temperature = parseFloat(temperatureInput.value);
        if (!isNaN(temperature)) {
            const selectedUnit = unitSelect.value;
            let convertedTemperature, convertedUnit;

            if (selectedUnit === 'celsius') {
                convertedTemperature = temperature;
                convertedUnit = '°C';
            } else if (selectedUnit === 'fahrenheit') {
                convertedTemperature = (temperature * 9/5) + 32;
                convertedUnit = '°F';
            } else if (selectedUnit === 'kelvin') {
                convertedTemperature = temperature + 273.15;
                convertedUnit = 'K';
            }

            resultElement.textContent = `${temperature.toFixed(2)}°C is equal to ${convertedTemperature.toFixed(2)}${convertedUnit}`;
        } else {
            resultElement.textContent = 'Please enter a valid temperature.';
        }
    });
});
