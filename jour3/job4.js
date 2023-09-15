function sommeDeuxNombres(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return null;
    }
    return num1 + num2;
}

const longueurChaine = str => {
    if (typeof str !== 'string' || str.length === 0) {
        return null;
    }
    return str.length;
}

console.log(sommeDeuxNombres("a", "b"));
console.log(longueurChaine("test"));