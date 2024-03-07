const pokemonsContainer = document.getElementById("pokemon-list");

async function getPokemons() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    console.log(data);

    return data.results;
  } catch (error) {
    return null;
  }
  console.log(data);
}

async function displayPokemons() {
  const pokemons = await getPokemons();

  if (!pokemons) {
    pokemonContainer.textContent = "Error fetching pokemons";
    return;
  }

  pokemons.forEach((pokemon) => {
    const pokemonCard = document.createElement("div");
    const pokemonEgg = document.createElement("img");
    pokemonEgg.src = "./img/egg 1.png";
    pokemonCard.classList.add("pokemon-card");
    pokemonEgg.classList.add("eggs");
    pokemonCard.textContent = pokemon.name;
    pokemonCard.appendChild(pokemonEgg);
    pokemonCard.addEventListener("click", () => {
      window.location.href = `./pokemon-details.html?name=${pokemon.name}`;
    });

    pokemonsContainer.appendChild(pokemonCard);
  });
}

displayPokemons();

const searchBtn = document.getElementById("search-pok");

searchBtn.addEventListener("click", (event) => {
  const searchValue = document.getElementById("pokNameInput").value;

  window.location.href = `./pokemon-details.html?name=${searchValue.toLowerCase()}`;
});
