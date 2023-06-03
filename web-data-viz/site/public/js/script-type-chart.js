// var typeReletion = [{
//     tipo: 'immune',
//     relacao: 0
// }, {
//     tipo: 'not-very-effective',
//     relacao: 1/2
// }, {
//     tipo: 'normal',
//     relacao: 1
// }, {
//     tipo: 'super-effective',
//     relacao: 2
// }
// ]

var types = ['normal', 'fire', 'water', 'electric', 'grass', 'ice', 'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'];

var typeChartOffensive = {
    normal: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 1, 1, 1, 1],
    fire: [1, 1/2, 1/2, 1, 2, 2, 1 , 1 ,1 , 1 ,1 ,2 ,1/2 ,1 ,1/2 ,1 ,2 ,1],
    water: [1 ,2 ,1 / 2 ,1 ,1 / 2 ,1 ,1 ,1 ,2 ,1 ,1 ,1 ,2 ,1 ,1 / 2 ,1 ,1 ,1],
    electric: [1 ,1 ,2 ,1 / 2 ,1 / 2 ,1 ,1 ,1 ,0 ,2 ,1 ,1 ,1 ,1 ,1 / 2 ,1 ,1 ,1],
    grass: [1 ,1 / 2 ,2 ,1 ,1 / 2 ,1 ,1 ,1 / 2 ,2 ,1 / 2 ,1 ,1 / 2 ,2 ,1 ,1 / 2 ,1 ,1 / 2 ,1],
    ice: [1 ,1 / 2 ,1 / 2 ,1 ,2 ,1 / 2 ,1 ,1 ,2 ,2 ,1 ,1 ,1 ,1 ,2 ,1 ,1 / 2 ,1],
    fighting: [2 ,1 ,1 ,1 ,1 ,2 ,1 ,1 / 2 ,1 ,1 / 2 ,1 / 2 ,1 / 2 ,2 ,0 ,1 ,2 ,2 ,1 / 2],
    poison: [1 ,1 ,1 ,1 ,2 ,1 ,1 ,1 / 2 ,1 / 2 ,1 ,1 ,1 ,1 / 2 ,1 / 2 ,1 ,1 ,0 ,2],
    ground: [1 ,2 ,1 ,2 ,1 / 2 ,1 ,1 ,2 ,1 ,0 ,1 ,1 / 2 ,2 ,1 ,1 ,1 ,2 ,1],
    flying: [1 ,1 ,1 ,1 / 2 ,2 ,1 ,2 ,1 ,1 ,1 ,1 ,2 ,1 / 2 ,1 ,1 ,1 ,1 / 2 ,1],
    psychic: [1 ,1 ,1 ,1 ,1 ,1 ,2 ,2 ,1 ,1 ,1 / 2 ,1 ,1 ,1 ,1 ,0 ,1 / 2 ,1 / 2],
    bug: [1 ,1 / 2 ,1 ,1 ,2 ,1 ,1 / 2 ,1 / 2 ,1 ,1 / 2 ,2 ,1 ,1 ,1 / 2 ,1 ,2 ,1 / 2 ,1 / 2],
    rock: [1 ,2 ,1 ,1 ,1 ,2 ,1 / 2 ,1 ,1 / 2 ,2 ,1 ,2 ,1 ,1 ,1 ,1 ,1 / 2 ,1],
    ghost: [0 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,2 ,1 ,1 ,2 ,1 ,1 / 2 ,1 ,1],
    dragon: [1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,2 ,1 ,1 / 2 ,0],
    dark: [1 ,1 ,1 ,1 ,1 ,1 ,1 / 2 ,1 ,1 ,1 ,2 ,1 ,1 ,2 ,1 ,1 / 2 ,1 ,1 / 2],
    steel: [1 ,1 / 2 ,1 / 2 ,1 / 2 ,1 ,2 ,1 ,1 ,1 ,1 ,1 ,1 ,2 ,1 ,1 / 2 ,1 ,1 / 2 ,2],
    fairy: [1 ,1 / 2 ,1 ,1 ,1 ,1 ,2 ,1 / 2 ,1 ,1 ,1 ,1 ,1 ,1 ,2 ,2 ,1 / 2 ,1 ]
}

var typeChartDefensive = {
    normal: [1,1,1,1,1,1,2,1,1,1,1,1,1,0,1,1,1,1],
    fire: [1,1 / 2,2,1,1 / 2,1,1,1,2,1,1,1 / 2,2,1,1,1,1 / 2,1 / 2],
    water: [1,1 / 2,1 / 2,2, 2, 1 / 2,1,1,1,1,1,1,1,1,1,1,1 / 2,1],
    electric: [1,1,1,1 / 2, 1, 1,1,1,2,1 / 2,1,1,1,1,1,1,1 / 2,1],
    grass: [1,2,1 / 2,1 / 2, 1 / 2, 2,1,2,1 / 2,2,1,2,1,1,1,1,1,1],
    ice: [1,2,1,1, 1, 1 / 2,2,1,1,1,1,1,2,1,1,1,2,1],
    fighting: [1,1,1,1, 1, 1,1,1,1,2,2,1 / 2,1 / 2,1,1,1 / 2,1,2],
    poison: [1,1,1,1, 1 / 2, 1,1 / 2,1 / 2,2,1,2,1 / 2,1,1,1,1,1,1 / 2],
    ground: [1,1,2,0, 2, 2,1,1 / 2,1,1,1,1,1 / 2,1,1,1,1,1],
    flying: [1,1,1,2, 1 / 2, 2,1 / 2,1,0,1,1,1 / 2,2,1,1,1,1,1],
    psychic: [1,1,1,1, 1, 1,1 / 2,1,1,1,1 / 2,2,1,2,1,2,1,1],
    bug: [1,2,1,1, 1 / 22, 1,1 / 2,1,1 / 2,2,1,1,2,1,1,1,1,1],
    rock: [1 / 2,1 / 2,2,1, 2, 1,2,1 / 2,2,1 / 2,1,2,1,1,1,1,2,1],
    ghost: [0,1,1,1, 1, 1,0,1 / 2,1,1,1,1 / 2,1,2,1,2,1,1],
    dragon: [1,1 / 2,1 / 2,1 / 2, 1 / 2, 2,1,1,1,1,1,1,1,1,2,1,1,2],
    dark: [1,1,1,1, 1, 1,2,1,1,1,0,2,1,1 / 2,1,1 / 2,1,2],
    steel: [1 / 2,2,1,1, 1 / 2, 1 / 2,2,0,2,1 / 2,1 / 2,1 / 2,1 / 2,1,1 / 2,1,1 / 2,1 / 2],
    fairy: [1,1,1,1, 1, 1,1 / 2,2,1,1,1,1 / 2,1,1,0,1 / 2,2,1],

}

var normalGraf = document.getElementById("normalOff");

// for (i = 0; i < typeChartOffensive.normal.length; i++) {
//     if (i == 0) {
//         typeChart.innerHTML += ``
//     }
//     //normalGraf.innerHTML += `<td>${typeChartOffensive.normal[i].normal}</td>`; 
// }

