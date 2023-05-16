async function fetchPokemon(id) {
    divContent.innerHTML = '';
    iptPokemon.value = '';
    var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    var data = await response.json();
    console.log(data);
    if (data.types.length == 1) {
        divContent.innerHTML += `${data.id}. ${(data.name).charAt(0).toUpperCase() + (data.name).slice(1)}<br>${(data['types']['0']['type']['name']).toUpperCase()}`;
    } else {
        divContent.innerHTML += `${data.id}. ${(data.name).charAt(0).toUpperCase() + (data.name).slice(1)}<br>${(data['types']['0']['type']['name']).toUpperCase()} ${(data['types']['1']['type']['name']).toUpperCase()}`;
    }
    imgPokemon.src = data['sprites']['other']['official-artwork']['front_default'];
}

