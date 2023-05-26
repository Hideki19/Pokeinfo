var fetchPokemonStats = [];

async function fetchPokemon(id) {
    divTexto.innerHTML = '';
    iptPokemon.value = '';
    fetchPokemonStats = [];
    var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    var data = await response.json();
    console.log(data);
    if (data.types.length == 1) {
        divTexto.innerHTML += `${data.id}. ${(data.name).charAt(0).toUpperCase() + (data.name).slice(1)}<br>${(data['types']['0']['type']['name']).toUpperCase()}`;
    } else {
        divTexto.innerHTML += `${data.id}. ${(data.name).charAt(0).toUpperCase() + (data.name).slice(1)}<br>${(data['types']['0']['type']['name']).toUpperCase()} ${(data['types']['1']['type']['name']).toUpperCase()}`;
    }
    imgPokemon.src = data['sprites']['other']['official-artwork']['front_default'];

    for (i = 0; i < data.stats.length; i++) {
        fetchPokemonStats.push(data['stats'][i]['base_stat']);
    }
    console.log(fetchPokemonStats);
    grafico();
}

function grafico() {
    divStats.innerHTML = ''
    divStats.innerHTML = '<canvas id="pokemonStats"></canvas>' 
    const ctx = document.getElementById('pokemonStats');    
    const graphData = {
        labels: ['HP', 'ATK', 'DEF','SPATK', 'SPDEF','SPEED'],
        datasets: [{
            label: 'STATS',
            data: fetchPokemonStats,
            borderWidth: 1
        }]
    }

    new Chart(ctx, {
        type: 'radar',
        data: graphData,
        options: {
            scales: {
                r: {
                    angleLines: {
                        display: false
                    },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            }
        }
    });
}

// async function fetchEvoLine(id) {
//     var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
//     var data = await response.json();
//     console.log(data);
    
// }