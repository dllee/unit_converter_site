const unitConversions = {
    length: {
        units: {
            meter: 1,
            kilometer: 0.001,
            centimeter: 100,
            millimeter: 1000,
            mile: 0.000621371,
            yard: 1.09361,
            foot: 3.28084,
            inch: 39.3701
        },
        convert: (value, fromUnit, toUnit) => (value / unitConversions.length.units[fromUnit]) * unitConversions.length.units[toUnit]
    },
    weight: {
        units: {
            gram: 1,
            kilogram: 0.001,
            milligram: 1000,
            pound: 0.00220462,
            ounce: 0.035274
        },
        convert: (value, fromUnit, toUnit) => (value / unitConversions.weight.units[fromUnit]) * unitConversions.weight.units[toUnit]
    },
    volume: {
        units: {
            liter: 1,
            milliliter: 1000,
            gallon: 0.264172,
            quart: 1.05669,
            pint: 2.11338,
            cup: 4.22675,
            tablespoon: 67.628,
            teaspoon: 202.884
        },
        convert: (value, fromUnit, toUnit) => (value / unitConversions.volume.units[fromUnit]) * unitConversions.volume.units[toUnit]
    },
    temperature: {
        units: {
            celsius: 'celsius',
            fahrenheit: 'fahrenheit',
            kelvin: 'kelvin'
        },
        convert: (value, fromUnit, toUnit) => {
            if (fromUnit === toUnit) return value;
            if (fromUnit === 'celsius') {
                if (toUnit === 'fahrenheit') return value * 9/5 + 32;
                if (toUnit === 'kelvin') return value + 273.15;
            } else if (fromUnit === 'fahrenheit') {
                if (toUnit === 'celsius') return (value - 32) * 5/9;
                if (toUnit === 'kelvin') return (value - 32) * 5/9 + 273.15;
            } else if (fromUnit === 'kelvin') {
                if (toUnit === 'celsius') return value - 273.15;
                if (toUnit === 'fahrenheit') return (value - 273.15) * 9/5 + 32;
            }
        }
    }
};

function populateUnits() {
    const category = document.getElementById('category').value;
    const inputUnitSelect = document.getElementById('inputUnit');
    const outputUnitSelect = document.getElementById('outputUnit');
    
    inputUnitSelect.innerHTML = '';
    outputUnitSelect.innerHTML = '';

    const units = Object.keys(unitConversions[category].units);
    units.forEach(unit => {
        const option1 = document.createElement('option');
        option1.value = unit;
        option1.textContent = unit;
        inputUnitSelect.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = unit;
        option2.textContent = unit;
        outputUnitSelect.appendChild(option2);
    });
}

function convert() {
    const category = document.getElementById('category').value;
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    const result = unitConversions[category].convert(inputValue, inputUnit, outputUnit);
    
    document.getElementById('result').textContent = `${inputValue} ${inputUnit} = ${result} ${outputUnit}`;
}

window.onload = () => {
    populateUnits();
};
