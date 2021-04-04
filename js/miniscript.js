let pokemonRepository = (function () {
  let t = [],
    e = "https://pokeapi.co/api/v2/pokemon/?limit=980";
  function o(e) {
    "object" == typeof e && "name" in e
      ? t.push(e)
      : console.log("pokemon is not correct");
  }
  function n(t) {
    pokemonRepository.loadDetails(t).then(function () {
      console.log(t), i(t);
    });
  }
  function i(t) {
    let e = $(".modal-body"),
      o = $(".modal-title");
    $(".modal-header"), $("#modal-container");
    o.empty(), e.empty();
    let n = $("<h1>" + t.name + "</h1>"),
      i = $('<img class="modal-img" style="width:50%">');
    i.attr("src", t.imageUrl);
    let a = $('<img class="modal-img" style="width:50%">');
    a.attr("src", t.imageUrlOld);
    let l = $("<p>height : " + t.height + "</p>"),
      p = $("<p>weight : " + t.weight + "</p>"),
      r = $("<p>types : " + t.types + "</p>"),
      s = $("<p>abilities : " + t.abilities + "</p>");
    o.append(n),
      e.append(i),
      e.append(a),
      e.append(l),
      e.append(p),
      e.append(r),
      e.append(s);
  }
  return {
    add: o,
    getAll: function () {
      return t;
    },
    addListItem: function (t) {
      pokemonRepository.loadDetails(t).then(function () {
        let e = $(".row"),
          o = $('<div class="card" style="width:400px"></div>'),
          i = $(
            '<img class="card-img-top" alt="Card image" style="width:20%" />'
          );
        i.attr("src", t.imageUrl);
        let a = $('<div class="card-body"></div>'),
          l = $("<h4 class='card-title' >" + t.name + "</h4>"),
          p = $(
            '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">See Profile</button>'
          );
        e.append(o),
          o.append(i),
          o.append(a),
          a.append(l),
          a.append(p),
          p.on("click", function (e) {
            n(t);
          });
      });
    },
    loadList: function () {
      return fetch(e)
        .then(function (t) {
          return t.json();
        })
        .then(function (t) {
          t.results.forEach(function (t) {
            let e = { name: t.name, detailsUrl: t.url };
            o(e), console.log(e);
          });
        })
        .catch(function (t) {
          console.error(t);
        });
    },
    loadDetails: function (t) {
      let e = t.detailsUrl;
      return fetch(e)
        .then(function (t) {
          return t.json();
        })
        .then(function (e) {
          (t.imageUrl = e.sprites.other.dream_world.front_default),
            (t.imageUrlOld = e.sprites.front_default),
            (t.height = e.height),
            (t.weight = e.weight),
            (t.types = []),
            (t.abilities = []),
            (t.order = e.order),
            e.types.forEach(function (e) {
              t.types.push(e.type.name);
            }),
            e.abilities.forEach(function (e) {
              t.abilities.push(e.ability.name);
            });
        })
        .catch(function (t) {
          console.error(t);
        });
    },
    showDetails: n,
    showModal: i,
  };
})();
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (t) {
    pokemonRepository.addListItem(t);
  });
});
