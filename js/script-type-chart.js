var typeReletion = [{
    tipo: 'super-effective',
    relacao: 2
}, {
    tipo: 'not-very-effective',
    relacao: 1/2
}, {
    tipo: 'immune',
    relacao: 0
}, {
    tipo: 'normal',
    relacao: 1
}

]

var typeChartOffensive = {
    normal: [],
    fire: ['grass', 'bug', 'ice'],
    water: ['fire', 'ground', 'rock'],
    grass: ['ground', 'rock', ],
    electric: ['flying', 'water', ],
    bug: ['dark', 'psychic', 'grass'],
    rock: ['bug', 'flying', /*'fire'*/],
    ground: ['electric', 'rock', ],
    
}