let altura = 1.6;
let peso = 80;
let imc = peso/(altura*altura);

if (imc < 18.5)
{
    console.log("Abaixo do peso");
}
else
{
    if (imc > 18.5 && imc < 25)
    {
        console.log("Peso ideal");
    }
    else
    {
        if (imc > 25 && imc < 30)
        {
            console.log("Acima do peso");
        }
        else
        {
            if (imc > 30 && imc < 40)
            {
                console.log("Obeso");
            }
            else
            {
                console.log("Emagrecer urgente");
            }
        }
    }
}