let mainTitle = document.querySelector("h1");
console.log(mainTitle.innerText); // -> <h1></h1>
mainTitle.innerText = "POKEDEX";
console.log(mainTitle.innerText); // -> <h1>THIS IS EPIC</h1>

// IIFE function keep array as a local object
let pokemonRepository = (function () {
  // pokemon list array
  let pokemonList = [
    { name: "Bulbasaur", height: 0.7, type: ["grass", " poison"] },
    { name: "Ivysaur", height: 1, type: ["grass", " poison"] },
    { name: "Venusaur", height: 2, type: ["grass", " poison"] },
    { name: "Charmandar", height: 0.6, type: ["fire"] },
    { name: "Charmeleon", height: 1.1, type: ["fire"] },
    { name: "Squirtle", height: 0.5, type: ["water"] },
    { name: "Wartortle", height: 1, type: ["water"] },
    { name: "Blastoise", height: 1.6, type: ["water"] },
    { name: "Caterpie", height: 0.3, type: ["bug"] },
    { name: "Metapod", height: 0.7, type: ["bug"] },
    { name: "Butterfree", height: 1.1, type: ["bug", " flying"] },
    { name: "Weedle", height: 0.3, type: ["bug", " poison"] },
    { name: "Kakuna", height: 0.6, type: ["bug", " poison"] },
    { name: "Beedrill", height: 1, type: ["bug", " poison"] },
    { name: "Pidgey", height: 0.3, type: ["flying", " normal"] },
    { name: "Pidgeotto", height: 1.1, type: ["flying", " normal"] },
    { name: "Pidgeot", height: 1.5, type: ["flying", " normal"] },
    { name: "Rattata", height: 0.3, type: ["normal"] },
    { name: "Raticate", height: 0.7, type: ["normal"] },
    { name: "Spearow", height: 0.3, type: ["flying", " normal"] },
    { name: "Fearow", height: 1.2, type: ["flying", " normal"] },
    { name: "Ekans", height: 2, type: ["poison"] },
    { name: "Arbok", height: 3.5, type: ["poison"] },
    { name: "Pikachu", height: 0.4, type: ["electric"] },
    { name: "Raichu", height: 0.8, type: ["electric"] },
    { name: "Sandshrew", height: 0.6, type: ["ground"] },
    { name: "Sandslash", height: 1, type: ["ground"] },
    { name: "NidoranF", height: 0.4, type: ["poison"] },
    { name: "Nidorina", height: 0.8, type: ["poison"] },
    { name: "Nidoqueen", height: 1.3, type: ["ground", " poison"] },
    { name: "NidoranM", height: 0.5, type: ["poison"] },
    { name: "Nidorino", height: 0.9, type: ["poison"] },
    { name: "Nidoking", height: 1.4, type: ["ground", " poison"] },
    { name: "Clefairy", height: 0.6, type: ["fairy"] },
    { name: "Clefable", height: 1.3, type: ["fairy"] },
    { name: "Vulpix", height: 0.6, type: ["fire"] },
    { name: "Ninetales", height: 1.1, type: ["fire"] },
    { name: "Jigglypuff", height: 0.5, type: ["fairy", " normal"] },
    { name: "Wigglytuff", height: 1, type: ["fairy", " normal"] },
    { name: "Zubat", height: 0.8, type: ["poison", " flying"] },
    { name: "Golbat", height: 1.6, type: ["poison", " flying"] },
    { name: "Oddish", height: 0.5, type: ["grass", " poison"] },
    { name: "Gloom", height: 0.8, type: ["grass", " poison"] },
    { name: "Vileplume", height: 1.2, type: ["grass", " poison"] },
    { name: "Paras", height: 0.3, type: ["grass", " bug"] },
    { name: "Parasect", height: 1, type: ["grass", " bug"] },
    { name: "Venonat", height: 1, type: ["bug", " poison"] },
    { name: "Venomoth", height: 1.5, type: ["bug", " poison"] },
    { name: "Diglett", height: 0.2, type: ["ground"] },
  ];
  function add(pokemon) {
    {
      pokemonList.push(pokemon);
    }
  }
  function getAll() {
    return pokemonList;
  }
  function showDetails(pokemon) {
    console.log(pokemon);
  }
  function addListItem(pokemon) {
    let element = document.querySelector(".pokemon-list");
    let listPokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button");
    listPokemon.appendChild(button);
    listPokemon.classList.add("list");
    element.appendChild(listPokemon);
    button.addEventListener("click", function (button) {
      showDetails(pokemon);
    });
  }
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
  };
})();

// add function to add new pokemon to new array
pokemonRepository.add({ name: "Dugtrio", height: 0.7, type: ["ground"] });
//show pokemon in console
console.log(pokemonRepository.getAll());
//loop function to show pokemon on site
// let element = document.querySelector(".pokemon-list");
pokemonRepository.getAll().forEach(function (pokemon) {
  {
    pokemonRepository.addListItem(pokemon);
  }
});
//blocked this out so that it will be easier to check site, with out input popping up all the time
// let name = prompt("please enter your name");
// console.log(name);
