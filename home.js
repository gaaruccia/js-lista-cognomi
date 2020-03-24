//Chiedi all’utente il cognome, inseriscilo in un array con altri cognomi e stampa la lista ordinata alfabeticamente.
var cognomeUtente = prompt("Qual è il tuo congome?");
var cognomeMaiuscolo = cognomeUtente.charAt(0).toUpperCase() + cognomeUtente.slice(1);
var listaCognomi = ["Rizzati", "Orabona", "Fregni", "Molea", "DiBonaventura", "Ottaviani"];
listaCognomi.push(cognomeMaiuscolo);
listaCognomi.sort()
document.getElementById('mio_id').innerHTML = listaCognomi.sort();
