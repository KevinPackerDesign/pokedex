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

  function addListItem(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function () {
      let $row = $(".row");

      let $card = $('<div class="card" style="width:400px"></div>');
      let $image = $(
        '<img class="card-img-top" alt="Card image" style="width:20%" />'
      );
      $image.attr("src", pokemon.imageUrl);
      let $cardBody = $('<div class="card-body"></div>');
      let $cardTitle = $("<h4 class='card-title' >" + pokemon.name + "</h4>");
      let $seeProfile = $(
        '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">See Profile</button>'
      );

      $row.append($card);
      //Append the image to each card
      $card.append($image);
      $card.append($cardBody);
      $cardBody.append($cardTitle);
      $cardBody.append($seeProfile);

      $seeProfile.on("click", function (event) {
        showDetails(pokemon);
      });
    });
  }
  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      console.log(item);
      showModal(item);
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
        item.imageUrlOld = details.sprites.front_default;
        item.height = details.height;
        item.weight = details.weight;
        item.types = [];
        item.abilities = [];
        item.order = details.order;
        details.types.forEach(function (pokemonType) {
          item.types.push(pokemonType.type.name);
        });
        details.abilities.forEach(function (pokemonAbilities) {
          item.abilities.push(pokemonAbilities.ability.name);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function showModal(pokemon) {
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");
    let modalHeader = $(".modal-header");
    let $modalContainer = $("#modal-container");
    //clear existing content of the model
    // modalHeader.empty();
    modalTitle.empty();
    modalBody.empty();

    //creating element for name in modal content
    let nameElement = $("<h1>" + pokemon.name + "</h1>");
    // // creating img in modal content
    let imageElementFront = $('<img class="modal-img" style="width:50%">');
    imageElementFront.attr("src", pokemon.imageUrl);
    let imageElementOld = $('<img class="modal-img" style="width:50%">');
    imageElementOld.attr("src", pokemon.imageUrlOld);
    // //creating element for height in modal content
    let heightElement = $("<p>" + "height : " + pokemon.height + "</p>");
    // //creating element for weight in modal content
    let weightElement = $("<p>" + "weight : " + pokemon.weight + "</p>");
    // //creating element for type in modal content
    let typesElement = $("<p>" + "types : " + pokemon.types + "</p>");
    // //creating element for abilities in modal content
    let abilitiesElement = $(
      "<p>" + "abilities : " + pokemon.abilities + "</p>"
    );

    modalTitle.append(nameElement);
    modalBody.append(imageElementFront);
    modalBody.append(imageElementOld);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    modalBody.append(typesElement);
    modalBody.append(abilitiesElement);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal,
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
