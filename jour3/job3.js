let tab = [1, 2, 3, 4, 5];

//while funtion
function whilePrintNumbers() {
    let i = 0;
    while (i < tab.length) {
        console.log(tab[i]);
        i++;
    }
}

//forEach function
function forPrintNumbers() {
    tab.forEach(element => {
        console.log(element);
    });
}
console.log("while :");
whilePrintNumbers();
console.log("forEach :");
forPrintNumbers();