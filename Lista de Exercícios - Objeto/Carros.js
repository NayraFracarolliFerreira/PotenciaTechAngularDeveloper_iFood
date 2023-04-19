class carros 
{
    marca;
    cor;
    gasto_medio;

    constructor (marca, cor, gasto_medio)
    {
        this.marca = marca;
        this.cor = cor;
        this.gasto_medio = gasto_medio;
    }

    CalcularPercurso(dist,vcomb)
    {      
       return dist * vcomb * this.gasto_medio;
    }
}

const uno = new carros('Fiat', 'Roxo', 0.8);
console.log(uno);
console.log(uno.CalcularPercurso(100, 5));