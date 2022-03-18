//scelta numero
let numero = parseInt(prompt('Pensa e digita un numero a scelta'))
//numero pari o dispari?
if( numero % 2 == 0 ){
    //se numero pari
    document.getElementById("target").innerHTML = `Dato che il numero è pari stampo ${numero}`    
}else{
    //se numero dispari
    document.getElementById("target").innerHTML = `Dato che il numero è dispari stampo il numero successivo, cioè ${numero + 1}`
}