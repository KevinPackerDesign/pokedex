var mainTitle = document.querySelector("h1");
console.log(mainTitle.innerText); // -> <h1></h1>
mainTitle.innerText = "POKEDEX";
console.log(mainTitle.innerText); // -> <h1>THIS IS EPIC</h1>

// IIFE function keep array as a local object
let pokemonRepository = (function () {
  // pokemon list api
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";
  //adding a pokemon object
  function add(pokemon) {
    if (typeof pokemon === "object" && "name" in pokemon) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  //gets the pokemon
  function getAll() {
    return pokemonList;
  }
  //creats the list elements
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listPokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button");
    listPokemon.appendChild(button);
    listPokemon.classList.add("list");
    pokemonList.appendChild(listPokemon);
    button.addEventListener("click", function (event) {
      showDetails(pokemon);
    });
  }
  //displays the pokemon
  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
          console.log(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }
  //finds the details from the api ids them
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.imageUrl = details.sprites.other.dream_world.front_default;
        item.height = details.height;
        item.types = [];
        item.order = details.order;
        details.types.forEach(function (pokemonType) {
          item.types.push(pokemonType.type.name);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }
  //shows the pokemon in the modal
  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function () {
      console.log(pokemon);
      showModal(pokemon);
    });
  }

  function showModal(pokemon) {
    let modalContainer = document.querySelector("#modal-container");

    //deletes the modal that was open last
    modalContainer.innerHTML = "";

    let modal = document.createElement("div");
    modal.classList.add("modal");

    // uses the IDed info from the api to dispaly in the modal
    let closeButtonElement = document.createElement("button");
    closeButtonElement.classList.add("modal-close");
    closeButtonElement.innerText = "Close";
    closeButtonElement.addEventListener("click", hideModal);

    let pokemonName = document.createElement("h1");
    pokemonName.innerText = pokemon.name;

    let pokemonImage = document.createElement("img");
    pokemonImage.classList.add("modal-img");
    pokemonImage.setAttribute("src", pokemon.imageUrl);

    let pokemonHeight = document.createElement("p");
    pokemonHeight.innerText = "Height: " + pokemon.height;

    let pokemonTypes = document.createElement("p");
    pokemonTypes.innerText = "Types: " + pokemon.types;

    let pokemonOrder = document.createElement("p");
    pokemonOrder.innerText = "Order: " + pokemon.order;

    modal.appendChild(closeButtonElement);
    modal.appendChild(pokemonName);
    modal.appendChild(pokemonImage);
    modal.appendChild(pokemonHeight);
    modal.appendChild(pokemonTypes);
    modal.appendChild(pokemonOrder);
    modalContainer.appendChild(modal);

    modalContainer.classList.add("is-visible");
  }
  //hides the modal
  function hideModal() {
    let modalContainer = document.querySelector("#modal-container");
    modalContainer.classList.remove("is-visible");
  }
  //hides the modal when the close button or the escape button is pressed
  window.addEventListener("keydown", (e) => {
    let modalContainer = document.querySelector("#modal-container");
    if (e.key === "Escape" && modalContainer.classList.contains("is-visible")) {
      hideModal();
    }
  });

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal,
    hideModal: hideModal,
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
//blocked this out so that it will be easier to check site, with out input popping up all the time
// let name = prompt("please enter your name");
// console.log(name);
