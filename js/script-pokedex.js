var fetchPokemonStats = [];

async function fetchPokemon(id) {

    // Apagar o conteúdo das divs
        pokemonName.innerHTML = '';
        pokemonInfo.innerHTML = '';
        iptPokemon.value = '';
        fetchPokemonStats = [];
    // Apagar o conteúdo das divs
    
    // Pegar os dados da API
        var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        var data = await response.json();
        console.log(data);
    // Pegar os dados da API

    // Colocar o nome na pokemonName
        pokemonName.innerHTML = `${(data.name).charAt(0).toUpperCase() + (data.name).slice(1)}`
    // Colocar o nome na pokemonName

    // Colocar a imagem do pokemon na pokemonImg
        pokemonImg.src = data['sprites']['other']['official-artwork']['front_default'];
    // Colocar a imagem do pokemon na pokemonImg    

    // Colocar as informações do pokemon na pokemonInfo
        // Colocar o id
            pokemonInfo.innerHTML += `<div style="margin-top: 16px;" class="divPokemonInfo"><span>Nº</span><span id="pokemonId">#${data.id}</span></div>`;
        // Colocar o id

        // Colocar os tipos (*Tentar colocar cores nos tipos*)
            if (data.types.length == 1) { // Se o pokemon tiver apenas 1 tipo
                pokemonInfo.innerHTML += `<div class="divPokemonInfo"><span>Tipo</span><span>${(data['types']['0']['type']['name']).toUpperCase()}</span></div>`;
            } else { // Se ele tiver 2 tipos
                pokemonInfo.innerHTML += `<div class="divPokemonInfo"><span>Tipo</span><span>${(data['types']['0']['type']['name']).toUpperCase()} ${(data['types']['1']['type']['name']).toUpperCase()}</span></div>`;
            }
        // Colocar os tipos

        // Colocar a altura e o peso
            pokemonInfo.innerHTML += `<div class="divPokemonInfo"><span>Altura</span><span>${Number(data.height)/10} m</span></div>`;
            pokemonInfo.innerHTML += `<div class="divPokemonInfo"><span>Peso</span><span>${Number(data.weight)/10} kg</span></div>`;
        // Colocar a altura e o peso

        // Colocar as habilidades
            if (data.abilities.length == 3) { // Caso tenha 3 habilidades (2 normais + hidden)
                pokemonInfo.innerHTML += `<div class="divPokemonInfo"><span>Habilidade 1</span><span>${data.abilities[0].ability.name}</span></div>`;
                pokemonInfo.innerHTML += `<div class="divPokemonInfo"><span>Habilidade 2</span><span>${data.abilities[1].ability.name}</span></div>`;
                pokemonInfo.innerHTML += `<div class="divPokemonInfo"><span>Habilidade Secreta</span><span>${data.abilities[2].ability.name}</span></div>`;
            } else if (data.abilities.length == 2) { // Caso tenha 2 habilidades (1 normal + hidden)
                pokemonInfo.innerHTML += `<div class="divPokemonInfo"><span>Habilidade 1</span><span>${data.abilities[0].ability.name}</span></div>`;
                pokemonInfo.innerHTML += `<div class="divPokemonInfo"><span>Habilidade 2</span><span>-</span></div>`;
                pokemonInfo.innerHTML += `<div class="divPokemonInfo"><span>Habilidade Secreta</span><span>${data.abilities[1].ability.name}</span></div>`;
            } else { // Caso tenha 1 habilidade (1 normal)
                pokemonInfo.innerHTML += `<div class="divPokemonInfo"><span>Habilidade 1</span><span>${data.abilities[0].ability.name}</span></div>`;
                pokemonInfo.innerHTML += `<div class="divPokemonInfo"><span>Habilidade 2</span><span>-</span></div>`;
                pokemonInfo.innerHTML += `<div class="divPokemonInfo"><span>Habilidade Secreta</span><span>-</span></div>`;
            }
        // Colocar as habilidades
        
    // Colocar as informações do pokemon na pokemonInfo

    // Pegar os stats do pokemon
        for (i = 0; i < data.stats.length; i++) {
            fetchPokemonStats.push(data['stats'][i]['base_stat']);
        }
        console.log(fetchPokemonStats);
    // Pegar os stats do pokemon
    
    grafico();
}

function grafico() {                // *Tentar exibir a speed na parte de baixo* //
    pokemonStats.innerHTML = ''
    pokemonStats.innerHTML = '<canvas id="pokemonStatsGraph" width=500px></canvas>' 
    
    // Cores do gráfico relativa aos valores dos stats
        var coresGrafico = [];
        var coresGraficoHover = []
 
        for (i = 0; i < fetchPokemonStats.length; i++) { 
            if (fetchPokemonStats[i] >= 120) {
                coresGrafico.push('rgba(0, 102, 0, 0.7)');
            } else if (fetchPokemonStats[i] >= 80) {
                coresGrafico.push('rgba(27, 200, 0, 0.7)');
            } else if (fetchPokemonStats[i] >= 60) {
                coresGrafico.push('rgba(255, 255, 0, 0.7)');
            } else if (fetchPokemonStats[i] >= 40) {
                coresGrafico.push('rgba(255, 128, 0, 0.7)');
            } else {
                coresGrafico.push('rgba(204, 0, 0, 0.7)');
            }
        }

        for (i = 0; i < fetchPokemonStats.length; i++) {
            coresGraficoHover.push(coresGrafico[i].replace(0.7, 1));
        }
    // Cores do gráfico relativa aos valores dos stats


    const ctx = document.getElementById('pokemonStatsGraph');    
    const graphData = {
        labels: ['HP', 'ATK', 'DEF','SPATK', 'SPDEF','SPEED'],
        datasets: [{
            label: 'STATS',
            data: fetchPokemonStats,
            backgroundColor: coresGrafico,
            hoverBackgroundColor: coresGraficoHover,
            borderWidth: 1
        }]
    }

    new Chart(ctx, {
        type: 'bar',
        data: graphData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
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