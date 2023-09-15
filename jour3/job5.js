let personne = {
    nom: "Payet",
    prenom: "Dimitri",
    age: 31,
    ville: "Marseille",
    biographie: function() {
        return `Mon nom est ${this.prenom} ${this.nom}, j'ai ${this.age} ans et je vis à ${this.ville}.`;
    }
}
console.log(personne.biographie());