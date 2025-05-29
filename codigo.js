var numberToFind = 0;
var attemps = 0

function refresh(){
    //gera um número aleatório
    numberToFind = parseIny(Math.random() * 100)
console.log(numberToFind)
}

function verifyNumber(){
    var bet = document.getElementById('bet').value;
    if(bet > 100 || bet < 1)
    {
        alert('Aposta Inválida');
        return;
    }

alert('Aposta válida');
}

refresh();
