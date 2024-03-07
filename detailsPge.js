const pokemonContainer = document.getElementById("pokemon-card-container");
const pokemonTitle = document.getElementById("pokemon-name");
const pokemonImg = document.getElementById("pokemon-img");
const pokemonTypesContainer = document.getElementById("pokemon-type");
const pokemonAbilitiesContainer = document.getElementById("pokemon-abilities");
const pokemonHeight = document.getElementById("pokemon-height");
const pokemonStats = document.getElementById("pokemon-stats");

async function getPokemonDetails(name) {
  if (!name) {
    return null;
  }

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    return data;
  } catch (error) {
    return null;
  }
}

async function displayPokemonDetails() {
  const searchParams = new URLSearchParams(window.location.search);
  console.log(window.location.search);
  const name = searchParams.get("name");

  const data = await getPokemonDetails(name);
  console.log(data);
  if (!data) {
    pokemonContainer.textContent = "Error fetching pokemon details";
    return;
  }

  pokemonTitle.textContent = data.name;
  console.log(data);
  console.log(data.forms.name);
  // data.forms.forEach((forms, index) => {
  //   if (index == 0) {
  //     console.log(forms.forms);
  //   } else {
  //     console.log(forms.forms);
  //   }
  // });
  pokemonImg.src = data.sprites.front_default;

  data.types.forEach((type, index) => {
    if (index == 0) {
      pokemonTypesContainer.textContent += " " + type.type.name;
    } else {
      pokemonTypesContainer.textContent += " " + " - " + type.type.name;
    }
  });

  data.abilities.forEach((ability, index) => {
    if (index == 0) {
      pokemonAbilitiesContainer.innerHTML += `<div class="property">${ability.ability.name}</div>`;
    } else {
      pokemonAbilitiesContainer.innerHTML += `<div class="property">${ability.ability.name}</div>`;
    }
  });
  pokemonHeight.innerHTML += `<div class="property">${data.height}</div>`;

  data.stats.forEach((stats, index) => {
    if (index == 0) {
      pokemonStats.innerHTML += `<div class="property">${stats.stat.name}: ${stats.base_stat}</div>`;
    } else {
      pokemonStats.innerHTML += `<div class="property">${stats.stat.name}: ${stats.base_stat}</div>`;
    }
  });
}

displayPokemonDetails();
