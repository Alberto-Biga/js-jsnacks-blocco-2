//array per nomi e cognomi
let nomi = ["Modestino", "Abdelhamid" ,"Andrea","Alberto","Vincenzo","Gerardo" ,"Luca","Tancredi","Valentino","Ludovica","Davide","Nizar","Alessandro","Gabriele" ,"Stefano","Angelo","Caterina","Sergio","Clara","Matteo","Simone" ,"Noemi","Roberto","Andrea","Andrea","Simone" ,"Samuele" ,"Vera","Ivan","Michael","Simone Luca","Francesco"];
let cognomi = ["Arpa","Ayadi","Bellucci","Biga","Borriello","Calia","Carbone","Carluccio","De Stefano","Di Benedetto","Di Pietro","Fergag","Fonzi","Magni","Maiorchini","Melotti","Moccia","Nifosi","Nocilla","Nuvoloni","Pavone","Pintaldi","Piva","Pontillo","Rosellini","Saputo","Spadaro","Sprinceana","Toselli","Wachnicki","Zaino","Natoli"];
//conto numeri elementi array (nomi e cognomi avranno lo stesso numeor di elementi)
let numeroInvitati = nomi.length;
//creo array vuoto che conterrà lista
let lista = [];
//ciclo for per unire nomi e cognomi in ordine (lista vera)
for ( let i = 0; i < numeroInvitati; i++){
    lista.push(nomi[i] + " " + cognomi[i]);
}
console.log(lista)
//ciclo for per unire nomi e cognomi a caso (lista falsa)
let listaFalsa = []
for ( let i = 0; i < numeroInvitati; i++ ){
    //scelgo nome casuale
    let x = Math.floor(Math.random()* (nomi.length));
    //scelgo cognome casuale
    let y = Math.floor(Math.random()* (cognomi.length));
    //push nella lista
    listaFalsa.push(nomi[x] + " " + cognomi[y])
    //teoricamente con .splice non ho duplicati
    nomi.splice(x,1)
    cognomi.splice(y,1)
}
console.log(listaFalsa)