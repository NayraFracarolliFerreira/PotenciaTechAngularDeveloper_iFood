const nayra = {
    fname: 'Nayra',
    lname: 'Fracarolli Ferreira',
    age: 31,
    describe: function ()    {
        console.log(`My name is ${this.fname} and I am ${this.age}`);
    }
};

/*nayra.heigth = 1.6;

delete nayra.lname;

console.log(nayra);
console.log(nayra.lname);
console.log(nayra.fname);
console.log(nayra.age);
console.log(nayra.heigth);*/

nayra.describe();

console.log(nayra['lname']);