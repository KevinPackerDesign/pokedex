let pokemonList = [
  { name: "Bulbasaur", height: 0.7, type: ["grass", "poison"] },
  { name: "Ivysaur", height: 1, type: ["grass", "poison"] },
  { name: "Venusaur", height: 2, type: ["grass", "poison"] },
  { name: "Charmandar", height: 0.6, type: ["fire"] },
  { name: "Charmeleon", height: 1.1, type: ["fire"] },
  { name: "Squirtle", height: 0.5, type: ["water"] },
  { name: "Wartortle", height: 1, type: ["water"] },
  { name: "Blastoise", height: 1.6, type: ["water"] },
  { name: "Caterpie", height: 0.3, type: ["bug"] },
  { name: "Metapod", height: 0.7, type: ["bug"] },
  { name: "Butterfree", height: 1.1, type: ["bug", "flying"] },
  { name: "Weedle", height: 0.3, type: ["bug", "poison"] },
  { name: "Kakuna", height: 0.6, type: ["bug", "poison"] },
  { name: "Beedrill", height: 1, type: ["bug", "poison"] },
  { name: "Pidgey", height: 0.3, type: ["flying", "normal"] },
  { name: "Pidgeotto", height: 1.1, type: ["flying", "normal"] },
  { name: "Pidgeot", height: 1.5, type: ["flying", "normal"] },
  { name: "Rattata", height: 0.3, type: ["normal"] },
  { name: "Raticate", height: 0.7, type: ["normal"] },
  { name: "Spearow", height: 0.3, type: ["flying", "normal"] },
  { name: "Fearow", height: 1.2, type: ["flying", "normal"] },
  { name: "Ekans", height: 2, type: ["poison"] },
  { name: "Arbok", height: 3.5, type: ["poison"] },
  { name: "Pikachu", height: 0.4, type: ["electric"] },
  { name: "Raichu", height: 0.8, type: ["electric"] },
  { name: "Sandshrew", height: 0.6, type: ["ground"] },
  { name: "Sandslash", height: 1, type: ["ground"] },
  { name: "NidoranF", height: 0.4, type: ["poison"] },
  { name: "Nidorina", height: 0.8, type: ["poison"] },
  { name: "Nidoqueen", height: 1.3, type: ["ground", "poison"] },
  { name: "NidoranM", height: 0.5, type: ["poison"] },
  { name: "Nidorino", height: 0.9, type: ["poison"] },
  { name: "Nidoking", height: 1.4, type: ["ground", "poison"] },
  { name: "Clefairy", height: 0.6, type: ["fairy"] },
  { name: "Clefable", height: 1.3, type: ["fairy"] },
  { name: "Vulpix", height: 0.6, type: ["fire"] },
  { name: "Ninetales", height: 1.1, type: ["fire"] },
  { name: "Jigglypuff", height: 0.5, type: ["fairy", "normal"] },
  { name: "Wigglytuff", height: 1, type: ["fairy", "normal"] },
  { name: "Zubat", height: 0.8, type: ["poison", "flying"] },
  { name: "Golbat", height: 1.6, type: ["poison", "flying"] },
  { name: "Oddish", height: 0.5, type: ["grass", "poison"] },
  { name: "Gloom", height: 0.8, type: ["grass", "poison"] },
  { name: "Vileplume", height: 1.2, type: ["grass", "poison"] },
  { name: "Paras", height: 0.3, type: ["grass", "bug"] },
  { name: "Parasect", height: 1, type: ["grass", "bug"] },
  { name: "Venonat", height: 1, type: ["bug", "poison"] },
  { name: "Venomoth", height: 1.5, type: ["bug", "poison"] },
  { name: "Diglett", height: 0.2, type: ["ground"] },
];
//this will list all the names of the pokemon
for (i = 0; i < pokemonList.length; i++) {
  //This will show what pokemon is the largest
  if (pokemonList[i].height > 2) {
    document.write(
      " " +
        pokemonList[i].name +
        " size(" +
        pokemonList[i].height +
        ")" +
        " WOW... Thats a big Pokemon!!!" +
        "<br>"
    );
  }
  //this will list all the pokemon
  else {
    document.write(
      " " +
        pokemonList[i].name +
        " size(" +
        pokemonList[i].height +
        ")" +
        "<br>"
    );
  }
}
