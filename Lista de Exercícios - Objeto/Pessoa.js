class Pessoa
{
    nome;
    altura;
    peso;

    constructor(nome,peso,altura)
    {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    CalcularIMC()
    {
        return this.peso/Math.pow(this.altura,2);
    }

    ClassificarIMC()
    {
        const imc = this.CalcularIMC();

        if (imc < 18.5)
        {
            return 'Abaixo do peso';
        }
        else if (imc >= 18.5 && imc < 25)
        {
            return 'Peso saudavel';
        }
        else if (imc >= 25 && imc < 30)
        {
            return 'Acima do peso';
        }
        else if (imc >= 30 && imc < 40)
        {
            return 'Obesidade I';
        }
        else
        {
            return 'Obesidade II';
        }
    }
}
let Jose = new Pessoa('José', 70, 1.75);
console.log(Jose);
console.log(Jose.CalcularIMC(70,1.75));
console.log(Jose.ClassificarIMC());