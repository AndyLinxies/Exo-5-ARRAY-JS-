//Exo 1
let Mavar = 'Ma variable';
let tabExo = ['Bonjour',Mavar,29,42,true];
console.log(tabExo)

//Exo 2
console.log(tabExo.length);

//EXo 3
//tabExo.splice(4,1); //Reasignement du tableau ou
tabExo.pop()
console.log(tabExo); //Afficher le tableau réassigné 
//Si je fais console.log(tabExo.splice(4,1)) Il m'afiche le true qu'il a enlevé

//Exo 4
//tabExo.splice(0,1) // ou
tabExo.shift();
console.log(tabExo);

//Exo5
tabExo.push('LOL','HEY')
console.log(tabExo);

//Exo 6
tabExo.unshift('numero','chien','dog')
console.log(tabExo);

//Exo 7
tabExo.reverse()
console.log(tabExo)

//Exo 8
let Elias = [];
Elias.push('Objet1');
Elias.push('Objet2');
alert(Elias);
Elias.unshift('Objet3'); //va devant les autres
alert(Elias)
Elias.unshift('Objet4','Objet5','Objet6');
alert(Elias);
Elias.splice(-3); //A partir de la fin de l'index il enlève 3
alert(Elias);
Elias.push('Objet7');
alert(Elias.length);
Elias.splice(0,2); //Les 2 derniers obj
Elias.splice(-2); //Les 2 premiers objets
alert(Elias);


