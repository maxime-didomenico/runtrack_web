const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function handleNumbers() {
    readline.question('Veuillez entrer le premier nombre : ', num1 => {
        readline.question('Veuillez entrer le deuxième nombre : ', num2 => {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);

            if(isNaN(num1) || isNaN(num2)) {
                console.log("Veuillez vous assurer que vous entrez des nombres.");
                handleNumbers();
            } else {
                console.log(`Addition : ${num1 + num2}`);
                console.log(`Soustraction : ${num1 - num2}`);
                console.log(`Multiplication : ${num1 * num2}`);
                console.log(`Division : ${num1 / num2}`);
                handleStrings();
            }
        });
    });
}

function handleStrings() {
    readline.question("Veuillez entrer une chaine de caractère : ", str => {
        readline.question("Veuillez entrer une seconde chaine de caractère : ", str2 => {
            if(str !== "" && str2 !== "") {
                let strConc = str + str2;
                console.log(`La concaténation des deux chaines est : ${strConc}`);
                readline.close();
            } else {
                console.log("Veuillez vous assurer que vous entrez des chaines de caractères.");
                handleStrings();
            }
        });
    });
}

handleNumbers();
