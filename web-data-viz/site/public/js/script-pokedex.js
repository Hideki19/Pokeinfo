var fetchPokemonStats = [];

async function datalistPokemon() { // Tentar colocar um card de aviso de como procurar alolan, galarian, hisuian forms
    for (index = 0; index < 1010; index++) {
        var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index+1}`);
        var data =  await response.json();
        listPokemon.innerHTML += `<option>${data.name}</option>`; 
        if (index%100 == 0) {
            console.log("Estou em " + index);
        }
    }
    console.log("Acabou");
    loading.style.display = 'none'
    iptPokemon.focus();
    fetchPokemon(1);
}

function randomPokemon() {
    var rndPokemon = Math.floor(Math.random() * 1009 + 1);
    fetchPokemon(rndPokemon);
}

async function fetchPokemon(id) {
    conteudo.style.display = 'flex'

    // Apagar o conteúdo das divs
    pokemonName.innerHTML = '';
    pokemonInfo.innerHTML = '';
    iptPokemon.value = '';
    pokemonEvolutionLine.innerHTML = ''
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

    // Colocar os tipos 

    // if (data.types.length == 1) { // Se o pokemon tiver apenas 1 tipo
    //     pokemonInfo.innerHTML += `<div class="divPokemonInfo"><span>Tipo</span><span>${(data['types']['0']['type']['name']).toUpperCase()}</span></div>`;
    // } else { // Se ele tiver 2 tipos
    //     pokemonInfo.innerHTML += `<div class="divPokemonInfo"><span>Tipo</span><span>${(data['types']['0']['type']['name']).toUpperCase()} ${(data['types']['1']['type']['name']).toUpperCase()}</span></div>`;
    // }
    var tipo1 = '';
    var tipo2 = '';
    
    for (i = 0; i < data.types.length; i++) {
        if(i == 0) {
            tipo1 = data['types'][i]['type']['name'];
            pokemonInfo.innerHTML += `<div class="divPokemonInfo"><span>Tipo ${i+1}</span><span id="pokemonType1">${tipo1.toUpperCase()} </span></div>`;
            if (data.types[i].type.name == 'normal') {
                pokemonType1.classList.add("normal");
            } else if (data.types[i].type.name == 'fire') {
                pokemonType1.classList.add("fire");
            } else if (data.types[i].type.name == 'water') {
                pokemonType1.classList.add("water");
            } else if (data.types[i].type.name == 'electric') {
                pokemonType1.classList.add("electric");
            } else if (data.types[i].type.name == 'grass') {
                pokemonType1.classList.add("grass");
            } else if (data.types[i].type.name == 'ice') {
                pokemonType1.classList.add("ice");
            } else if (data.types[i].type.name == 'fighting') {
                pokemonType1.classList.add("fighting");
            } else if (data.types[i].type.name == 'poison') {
                pokemonType1.classList.add("poison");
            } else if (data.types[i].type.name == 'ground') {
                pokemonType1.classList.add("ground");
            } else if (data.types[i].type.name == 'flying') {
                pokemonType1.classList.add("flying");
            } else if (data.types[i].type.name == 'psychic') {
                pokemonType1.classList.add("psychic");
            } else if (data.types[i].type.name == 'bug') {
                pokemonType1.classList.add("bug");
            } else if (data.types[i].type.name == 'rock') {
                pokemonType1.classList.add("rock");
            } else if (data.types[i].type.name == 'ghost') {
                pokemonType1.classList.add("ghost");
            } else if (data.types[i].type.name == 'dragon') {
                pokemonType1.classList.add("dragon");
            } else if (data.types[i].type.name == 'dark') {
                pokemonType1.classList.add("dark");
            } else if (data.types[i].type.name == 'steel') {
                pokemonType1.classList.add("steel");
            } else if (data.types[i].type.name == 'fairy') {
                pokemonType1.classList.add("fairy");
            }
        } else {
            tipo2 = data['types'][i]['type']['name'];
            pokemonInfo.innerHTML += `<div class="divPokemonInfo"><span>Tipo ${i+1}</span><span id="pokemonType2">${tipo2.toUpperCase()} </span></div>`;
            if (data.types[i].type.name == 'normal') {
                pokemonType2.classList.add("normal");
            } else if (data.types[i].type.name == 'fire') {
                pokemonType2.classList.add("fire");
            } else if (data.types[i].type.name == 'water') {
                pokemonType2.classList.add("water");
            } else if (data.types[i].type.name == 'electric') {
                pokemonType2.classList.add("electric");
            } else if (data.types[i].type.name == 'grass') {
                pokemonType2.classList.add("grass");
            } else if (data.types[i].type.name == 'ice') {
                pokemonType2.classList.add("ice");
            } else if (data.types[i].type.name == 'fighting') {
                pokemonType2.classList.add("fighting");
            } else if (data.types[i].type.name == 'poison') {
                pokemonType2.classList.add("poison");
            } else if (data.types[i].type.name == 'ground') {
                pokemonType2.classList.add("ground");
            } else if (data.types[i].type.name == 'flying') {
                pokemonType2.classList.add("flying");
            } else if (data.types[i].type.name == 'psychic') {
                pokemonType2.classList.add("psychic");
            } else if (data.types[i].type.name == 'bug') {
                pokemonType2.classList.add("bug");
            } else if (data.types[i].type.name == 'rock') {
                pokemonType2.classList.add("rock");
            } else if (data.types[i].type.name == 'ghost') {
                pokemonType2.classList.add("ghost");
            } else if (data.types[i].type.name == 'dragon') {
                pokemonType2.classList.add("dragon");
            } else if (data.types[i].type.name == 'dark') {
                pokemonType2.classList.add("dark");
            } else if (data.types[i].type.name == 'steel') {
                pokemonType2.classList.add("steel");
            } else if (data.types[i].type.name == 'fairy') {
                pokemonType2.classList.add("fairy");
            }
        }
    }

    // Colocar os tipos

    // Colocar a altura e o peso
    pokemonInfo.innerHTML += `<div class="divPokemonInfo"><span>Altura</span><span>${Number(data.height) / 10} m</span></div>`;
    pokemonInfo.innerHTML += `<div class="divPokemonInfo"><span>Peso</span><span>${Number(data.weight) / 10} kg</span></div>`;
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


    // Grafico para os status
    grafico();
    // Grafico para os status

    // Linha evolutiva
    var response = await fetch(data.species.url);
    var data = await response.json();
    console.log(response.url);

    var response = await fetch(data.evolution_chain.url);
    var data = await response.json();
    console.log(response.url);

    pokemonEvolutionLine.innerHTML += `<div id="evoLineTitulo"><span class="subtitulo">Linha evolutiva</span></div>`

    if (data.chain.evolves_to.length == 0) { //No evolution
        var firstEvo = data.chain.species.name;
        pokemonEvolutionLine.innerHTML += `<span class="subtitulo2">Esse pokemon não evolui</span>`
        console.log(firstEvo);
    } else if (data.chain.evolves_to[0].evolves_to.length == 0) { // One evolution
        if (data.chain.evolves_to.length == 2) { // One evolution two options
            var firstEvo = data.chain.species.name;
            var secondEvo1 = data.chain.evolves_to[0].species.name;
            var secondEvo2 = data.chain.evolves_to[1].species.name;
            console.log(firstEvo);
            console.log(secondEvo1);
            console.log(secondEvo2);

            var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${firstEvo}`);
            var data = await response.json();
            pokemonEvolutionLine.innerHTML += ` <div class="evoLinePokemon">
                                                    <span>Forma Básica</span>
                                                    <img class="evoLineImg" src="${data['sprites']['other']['official-artwork']['front_default']}" alt="">
                                                    <span>${firstEvo}</span>
                                                    <span>#${data.id}</span>
                                                </div>`;
            if (firstEvo == 'burmy') {
                var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${secondEvo1}-plant`);
                var data = await response.json();
                pokemonEvolutionLine.innerHTML += ` <div class="evoLinePokemon">
                                                        <span>Estágio 1</span>
                                                        <img class="evoLineImg" src="${data['sprites']['other']['official-artwork']['front_default']}" alt="">
                                                        <span>${secondEvo1}</span>
                                                        <span>#${data.id}</span>
                                                    </div>`;
                var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${secondEvo2}`);
                var data = await response.json();
                pokemonEvolutionLine.innerHTML += ` <span style="color: #2B2D42;font-size: 16px;">OU</span>
                                                    <div class="evoLinePokemon">
                                                        <span>Estágio 1</span>
                                                        <img class="evoLineImg" src="${data['sprites']['other']['official-artwork']['front_default']}" alt="">
                                                        <span>${secondEvo2}</span>
                                                        <span>#${data.id}</span>
                                                    </div>`;
            } else {
                var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${secondEvo1}`);
                var data = await response.json();
                pokemonEvolutionLine.innerHTML += ` <div class="evoLinePokemon">
                                                        <span>Estágio 1</span>
                                                        <img class="evoLineImg" src="${data['sprites']['other']['official-artwork']['front_default']}" alt="">
                                                        <span>${secondEvo1}</span>
                                                        <span>#${data.id}</span>
                                                    </div>`;

                var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${secondEvo2}`);
                var data = await response.json();
                pokemonEvolutionLine.innerHTML += ` <span style="color: #2B2D42;font-size: 16px;">OU</span>
                                                    <div class="evoLinePokemon">
                                                        <span>Estágio 1</span>
                                                        <img class="evoLineImg" src="${data['sprites']['other']['official-artwork']['front_default']}" alt="">
                                                        <span>${secondEvo2}</span>
                                                        <span>#${data.id}</span>
                                                    </div>`;
            }
        } else if (data.chain.evolves_to[0].evolution_details.length == 3) { // One evolution three options (rockruff)
            var firstEvo = data.chain.species.name;
            var secondEvo1 = data.chain.evolves_to[0].species.name + "-midday";
            var secondEvo2 = data.chain.evolves_to[0].species.name + "-midnight";
            var secondEvo3 = data.chain.evolves_to[0].species.name + "-dusk";
            console.log(firstEvo);
            console.log(secondEvo1);
            console.log(secondEvo2);
            console.log(secondEvo3);

            var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${firstEvo}`);
            var data = await response.json();
            pokemonEvolutionLine.innerHTML += ` <div class="evoLinePokemon">
                                                    <span>Forma Básica</span>
                                                    <img class="evoLineImg" src="${data['sprites']['other']['official-artwork']['front_default']}" alt="">
                                                    <span>${firstEvo}</span>
                                                    <span>#${data.id}</span>
                                                </div>`;
            var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${secondEvo1}`);
            var data = await response.json();
            pokemonEvolutionLine.innerHTML += ` <div class="evoLinePokemon">
                                                    <span>Estágio 1</span>
                                                    <img class="evoLineImg" src="${data['sprites']['other']['official-artwork']['front_default']}" alt="">
                                                    <span>${secondEvo1}</span>
                                                    <span>#${data.id}</span>
                                                </div>`;
            var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${secondEvo2}`);
            var data = await response.json();
            pokemonEvolutionLine.innerHTML += ` <span style="color: #2B2D42;font-size: 16px;">OU</span>
                                                <div class="evoLinePokemon">
                                                    <span>Estágio 1</span>
                                                    <img class="evoLineImg" src="${data['sprites']['other']['official-artwork']['front_default']}" alt="">
                                                    <span>${secondEvo2}</span>
                                                    <span>#${data.id}</span>
                                                </div>`;
            var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${secondEvo3}`);
            var data = await response.json();
            pokemonEvolutionLine.innerHTML += ` <span style="color: #2B2D42;font-size: 16px;">OU</span>
                                                <div class="evoLinePokemon">
                                                    <span>Estágio 1</span>
                                                    <img class="evoLineImg" src="${data['sprites']['other']['official-artwork']['front_default']}" alt="">
                                                    <span>${secondEvo3}</span>
                                                    <span>#${data.id}</span>
                                                </div>`;

        } else if (data.chain.evolves_to.length == 3) { // One evolution three options (tyrogue)
            var firstEvo = data.chain.species.name;
            var secondEvo = [];
            for (i = 0; i < data.chain.evolves_to.length; i++) {
                secondEvo.push(data.chain.evolves_to[i].species.name)
            }
            console.log(firstEvo);
            console.log(secondEvo[0]);
            console.log(secondEvo[1]);
            console.log(secondEvo[2]);

            var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${firstEvo}`);
            var data = await response.json();
            pokemonEvolutionLine.innerHTML += ` <div class="evoLinePokemon">
                                                    <span>Forma Básica</span>
                                                    <img class="evoLineImg" src="${data['sprites']['other']['official-artwork']['front_default']}" alt="">
                                                    <span>${firstEvo}</span>
                                                    <span>#${data.id}</span>
                                                </div>`;
            for (i = 0; i < secondEvo.length; i++) {
                var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${secondEvo[i]}`);
                var data = await response.json();
                if (i == 0) {
                    pokemonEvolutionLine.innerHTML += ` <div class="evoLinePokemon">
                                                            <span>Estágio 1</span>
                                                            <img class="evoLineImg" src="${data['sprites']['other']['official-artwork']['front_default']}" alt="">
                                                            <span>${secondEvo[i]}</span>
                                                            <span>#${data.id}</span>
                                                        </div>`;                                  
                } else {
                    pokemonEvolutionLine.innerHTML += ` <span style="color: #2B2D42;font-size: 16px;">OU</span>
                                                        <div class="evoLinePokemon">
                                                            <span>Estágio 1</span>
                                                            <img class="evoLineImg" src="${data['sprites']['other']['official-artwork']['front_default']}" alt="">
                                                            <span>${secondEvo[i]}</span>
                                                            <span>#${data.id}</span>
                                                        </div>`;
                }
            }
        } else if (data.chain.evolves_to.length > 3) { // Eevee 
            var firstEvo = data.chain.species.name;
            var secondEvo = [];
            for (i = 0; i < data.chain.evolves_to.length; i++) {
                secondEvo.push(data.chain.evolves_to[i].species.name)
            }
            console.log(firstEvo);
            console.log(secondEvo[0]);
            console.log(secondEvo[1]);
            console.log(secondEvo[2]);

            var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${firstEvo}`);
            var data = await response.json();
            pokemonEvolutionLine.innerHTML += ` <div class="evoLinePokemon">
                                                    <span>Forma Básica</span>
                                                    <img class="evoLineImg" src="${data['sprites']['other']['official-artwork']['front_default']}" alt="">
                                                    <span>${firstEvo}</span>
                                                    <span>#${data.id}</span>
                                                </div>`;
            for (i = 0; i < secondEvo.length; i++) {
                var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${secondEvo[i]}`);
                var data = await response.json();
                if (i == 0) {
                    pokemonEvolutionLine.innerHTML += ` <div class="evoLinePokemon">
                                                            <span>Estágio 1</span>
                                                            <img class="evoLineImg" src="${data['sprites']['other']['official-artwork']['front_default']}" alt="">
                                                            <span>${secondEvo[i]}</span>
                                                            <span>#${data.id}</span>
                                                        </div>`;                                  
                } else {
                    pokemonEvolutionLine.innerHTML += ` <span style="color: #2B2D42;font-size: 16px;">OU</span>
                                                        <div class="evoLinePokemon">
                                                            <span>Estágio 1</span>
                                                            <img class="evoLineImg" src="${data['sprites']['other']['official-artwork']['front_default']}" alt="">
                                                            <span>${secondEvo[i]}</span>
                                                            <span>#${data.id}</span>
                                                        </div>`;
                }
            }
        } else {
            var firstEvo = data.chain.species.name;
            var secondEvo = data.chain.evolves_to[0].species.name;
            console.log(firstEvo);
            console.log(secondEvo);

            var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${firstEvo}`);
            var data = await response.json();
            pokemonEvolutionLine.innerHTML += `<div class="evoLinePokemon">
                                                    <span>Forma Básica</span>
                                                    <img class="evoLineImg" src="${data['sprites']['other']['official-artwork']['front_default']}" alt="">
                                                    <span>${firstEvo}</span>
                                                    <span>#${data.id}</span>
                                                </div>`;
            var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${secondEvo}`);
            var data = await response.json();
            pokemonEvolutionLine.innerHTML += `<div class="evoLinePokemon">
                                                    <span>Estágio 1</span>
                                                    <img class="evoLineImg" src="${data['sprites']['other']['official-artwork']['front_default']}" alt="">
                                                    <span>${secondEvo}</span>
                                                    <span>#${data.id}</span>
                                                </div>`;            
        }
    } else if (data.chain.evolves_to[0].evolves_to[0].evolves_to.length == 0) { //Two evolutions
        if (data.chain.evolves_to[0].evolves_to.length == 2) { // Two evolutions two forms
            var firstEvo = data.chain.species.name;
            var secondEvo = data.chain.evolves_to[0].species.name;
            var thirdEvo = [];
            for (i = 0; i < data.chain.evolves_to[0].evolves_to.length; i++) {
                thirdEvo.push(data.chain.evolves_to[0].evolves_to[i].species.name);
            }
            console.log(firstEvo);
            console.log(secondEvo);
            console.log(thirdEvo[0]);
            console.log(thirdEvo[1]);

            var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${firstEvo}`);
            var data = await response.json();
            pokemonEvolutionLine.innerHTML += ` <div class="evoLinePokemon">
                                                    <span>Forma Básica</span>
                                                    <img class="evoLineImg" src="${data['sprites']['other']['official-artwork']['front_default']}" alt="">
                                                    <span>${firstEvo}</span>
                                                    <span>#${data.id}</span>
                                                </div>`;
            var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${secondEvo}`);
            var data = await response.json();
            pokemonEvolutionLine.innerHTML += ` <div class="evoLinePokemon">
                                                    <span>Estágio 1</span>
                                                    <img class="evoLineImg" src="${data['sprites']['other']['official-artwork']['front_default']}" alt="">
                                                    <span>${secondEvo}</span>
                                                    <span>#${data.id}</span>
                                                </div>`;
            for (i = 0; i < thirdEvo.length; i++) {
                var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${thirdEvo[i]}`);
                var data = await response.json();
                if (i == 0) {
                    pokemonEvolutionLine.innerHTML += ` <div class="evoLinePokemon">
                                                            <span>Estágio 2</span>
                                                            <img class="evoLineImg" src="${data['sprites']['other']['official-artwork']['front_default']}" alt="">
                                                            <span>${thirdEvo[i]}</span>
                                                            <span>#${data.id}</span>
                                                        </div>`;
                } else {
                    pokemonEvolutionLine.innerHTML += ` <span style="color: #2B2D42;font-size: 16px;">OU</span>
                                                        <div class="evoLinePokemon">
                                                            <span>Estágio 2</span>
                                                            <img class="evoLineImg" src="${data['sprites']['other']['official-artwork']['front_default']}" alt="">
                                                            <span>${thirdEvo[i]}</span>
                                                            <span>#${data.id}</span>
                                                        </div>`;
                }
            }


        } else if (data.chain.evolves_to.length == 2) { // Two evolutions two paths (Wurmple)
            var firstEvo = data.chain.species.name;
            var secondEvo = [];
            var thirdEvo = [];

            for (i = 0; i < data.chain.evolves_to.length; i++) {
                secondEvo.push(data.chain.evolves_to[i].species.name);
                thirdEvo.push(data.chain.evolves_to[i].evolves_to[0].species.name);
            }

            console.log(firstEvo);
            console.log(secondEvo[0]);
            console.log(secondEvo[1]);
            console.log(thirdEvo[0]);
            console.log(thirdEvo[1]);

            var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${firstEvo}`);
            var data = await response.json();
            pokemonEvolutionLine.innerHTML += ` <div class="evoLinePokemon">
                                                    <span>Forma Básica</span>
                                                    <img class="evoLineImg" src="${data['sprites']['other']['official-artwork']['front_default']}" alt="">
                                                    <span>${firstEvo}</span>
                                                    <span>#${data.id}</span>
                                                </div>`;             
            for (i = 0; i < secondEvo.length; i++) {
                var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${secondEvo[i]}`);
                var data = await response.json();
                if (i == 0) {
                    pokemonEvolutionLine.innerHTML += ` <div class="evoLinePokemon">
                                                            <span>Estágio 1</span>
                                                            <img class="evoLineImg" src="${data['sprites']['other']['official-artwork']['front_default']}" alt="">
                                                            <span>${secondEvo[i]}</span>
                                                            <span>#${data.id}</span>
                                                        </div>`;
                } else {
                    pokemonEvolutionLine.innerHTML += ` <span style="color: #2B2D42;font-size: 16px;">OU</span>
                                                        <div class="evoLinePokemon">
                                                            <span>Estágio 1</span>
                                                            <img class="evoLineImg" src="${data['sprites']['other']['official-artwork']['front_default']}" alt="">
                                                            <span>${secondEvo[i]}</span>
                                                            <span>#${data.id}</span>
                                                        </div>`;
                }
            }

            for (i = 0; i < thirdEvo.length; i++) {
                var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${thirdEvo[i]}`);
                var data = await response.json();
                if (i == 0) {
                    pokemonEvolutionLine.innerHTML += ` <div class="evoLinePokemon">
                                                            <span>Estágio 2</span>
                                                            <img class="evoLineImg" src="${data['sprites']['other']['official-artwork']['front_default']}" alt="">
                                                            <span>${thirdEvo[i]}</span>
                                                            <span>#${data.id}</span>
                                                        </div>`;
                } else {
                    pokemonEvolutionLine.innerHTML += ` <span style="color: #2B2D42;font-size: 16px;">OU</span>
                                                        <div class="evoLinePokemon">
                                                            <span>Estágio 2</span>
                                                            <img class="evoLineImg" src="${data['sprites']['other']['official-artwork']['front_default']}" alt="">
                                                            <span>${thirdEvo[i]}</span>
                                                            <span>#${data.id}</span>
                                                        </div>`;
                }
            }
        } else {
            var firstEvo = data.chain.species.name;
            var secondEvo = data.chain.evolves_to[0].species.name;
            var thirdEvo = data.chain.evolves_to[0].evolves_to[0].species.name;
            console.log(firstEvo);
            console.log(secondEvo);
            console.log(thirdEvo);

            var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${firstEvo}`);
            var data = await response.json();
            pokemonEvolutionLine.innerHTML += ` <div class="evoLinePokemon">
                                                        <span>Forma Básica</span>
                                                        <img class="evoLineImg" src="${data['sprites']['other']['official-artwork']['front_default']}" alt="">
                                                        <span>${firstEvo}</span>
                                                        <span>#${data.id}</span>
                                                    </div>`;

            var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${secondEvo}`);
            var data = await response.json();
            pokemonEvolutionLine.innerHTML += ` <div class="evoLinePokemon">
                                                    <span>Estágio 1</span>
                                                    <img class="evoLineImg" src="${data['sprites']['other']['official-artwork']['front_default']}" alt="">
                                                    <span>${secondEvo}</span>
                                                    <span>#${data.id}</span>
                                                </div>`;
            var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${thirdEvo}`);
            var data = await response.json();
            pokemonEvolutionLine.innerHTML += ` <div class="evoLinePokemon">
                                                    <span>Estágio 2</span>
                                                    <img class="evoLineImg" src="${data['sprites']['other']['official-artwork']['front_default']}" alt="">
                                                    <span>${thirdEvo}</span>
                                                    <span>#${data.id}</span>
                                                </div>`;
        }
    }

    // Linha evolutiva

    pokedexTypeChart(tipo1, tipo2); // pokedex.html    

}

function grafico() {
    pokemonStats.innerHTML = ''
    pokemonStats.innerHTML = '<canvas id="pokemonStatsGraph" width=500px height=300px></canvas>'

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
        labels: ['HP', 'ATK', 'DEF', 'SPATK', 'SPDEF', 'SPEED'],
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
                    beginAtZero: true,
                    recomendedMax: 100 // ----------------------------------------------------------------------------------
                }
            }
        }
    });
}

