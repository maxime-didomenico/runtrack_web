const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let tab = [1, 2, 3, 4, 5];

function handleNumbers() {
    readline.question('Veuillez entrer le premier nombre : ', num1 => {
        readline.question('Veuillez entrer le deuxième nombre : ', num2 => {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);

            if(isNaN(num1) || isNaN(num2)) {
                console.log("Veuillez vous assurer que vous entrez des nombres.");
                handleNumbers();
            } else {
                console.log(tab);
                tab[0] = num1;
                tab[tab.length - 1] = num2;

                let newTab = tab.slice(1);
                console.log(newTab);
                console.log(tab[tab.length - 1]);
            }
            readline.close();
        });
    });
}
handleNumbers();