let totale = 0;
function prodotto() {
  let prezzo = prompt("inserisci il prodotto");
  prezzo = parseFloat(prezzo);
  if (prezzo != null && prezzo != "") {
    if (prezzo > 0) {
      totale += prezzo;
      console.log("prezzo totale della spesa: " + totale + "€");
    }
  }
}
