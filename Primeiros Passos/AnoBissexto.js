let ano = 1992;

const bissexto = (ano % 4) === 0;

if (bissexto)
{
    console.log("O ano é bissexto");
}
else
{
    console.log("O ano não é bissexto");
}