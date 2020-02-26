class Greek {
    constructor(hairColor, hello) {
        this.nationality = 'Greece';
        this.hairColor = hairColor;
    }
}

class Person extends Greek {
    constructor(hairColor, firstName, lastName, bankAccountInDollar, countryOfResidence, dollarToLocal){
        super(hairColor);
        this.firstName = firstName;
        this.lastName = lastName;
        this.bankAccountInDollar = bankAccountInDollar;
        this.countryOfResidence = countryOfResidence;
        this.dollarToLocal = dollarToLocal;
        this.convertToLocal2 = () => { // method
            this.localMoney = this.bankAccountInDollar * this.dollarToLocal;
        };
    }
    convertToLocal = () => { // method
        this.localMoney = this.bankAccountInDollar * this.dollarToLocal;
    };
}
const jake = new Person('grey', 'Konstantinos', 'Diakogiannis', 1000, 'Greece', 0.86);
const gidday = new Person('blue', 'Meuron', 'Gidday', 2000, 'Australia', 1.83);
const steffan = new Person('blonde', 'Steffen', 'Effenberg', 5000, 'Switzerland', 0.96);
console.log(jake);
jake.convertToLocal();
console.log(jake.localMoney);
gidday.convertToLocal2();
console.log(gidday);

