const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    /* Previne o comportamento padrão do evento submit do JS, ou seja,
    impede o recarregamento da página */
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (weight / (height * height)).toFixed(2); // duas casas dps da vírgula

    if (!isNaN(bmi)) {
        const value = document.getElementById('value');
        let description = '';

        value.classList.add('attention');
        
        document.getElementById('infos').classList.remove('hidden');
    
        if (bmi < 18.5){
            description = 'Careful! You are underweight!';
        } 

        else if (bmi >= 18.5 && bmi <= 25) {
            description = "You are at your ideal weight!";
            value.classList.remove('attention');
            value.classList.add('normal');
        }

        else if (bmi > 25 && bmi <= 30) {
            description = "Careful! You are overweight!";
        }

        else if (bmi > 30 && bmi <= 35) {
            description = "Careful! You are moderately obese!";
        }

        else if (bmi > 35 && bmi <= 40) {
            description = "Careful! You are severely obese!";
        }

        else {
            description = "Careful! You are morbidly obese!";
        }

        value.textContent = bmi.replace('.', ',');
        document.getElementById('description').textContent = description;
    }
});

form.addEventListener('keypress', function(event) {
    if (event.key === 'press') {
        document.getElementById('#calculate').click();
    }
});