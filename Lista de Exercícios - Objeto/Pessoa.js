class Pessoa
{
    nome;
    altura;
    peso;

    constructor(nome,altura,peso)
    {
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
    }

    CalcularIMC(peso,altura)
    {
        return this.peso/Math.pow(this.altura,2);
    }
}

const Jose = new Pessoa('José', 1.75, 70);
console.log(Jose);
console.log(Jose.CalcularIMC(70,1.75));