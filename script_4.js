const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

function filtre() {
	var naissance = [];
	for (var i = 0 ; i < entrepreneurs.length ; i++) { //selection dans l'array
		if (entrepreneurs[i].year < 1980 && entrepreneurs[i].year > 1970) { //selectionne tous les naissance de l'année 70
			naissance.push(entrepreneurs[i]);
		}
	}
	console.log(naissance);
}

filtre();
	
function affichage() {
	var affiche = [];
	for (var i = 0 ; i < entrepreneurs.length ; i++) { //selection dans l'array
		affiche.push({first: entrepreneurs[i].first, last: entrepreneurs[i].last})
	}
	console.log(affiche);
}

affichage()

function age() {
	var ageToday = [];
	for (var i = 0 ; i < entrepreneurs.length ; i++) { //selection dans l'array
		age = 2019 - entrepreneurs[i].year
		name = entrepreneurs[i].first + entrepreneurs[i].last
	ageToday.push(`{${name} à ${age} aujourd'hui}`)
	}
	console.log(ageToday);
}

age()

function triage() {
	var trie = [];
	for (var i = 0 ; i < entrepreneurs.length ; i++) { //selection dans l'array
	trie.push({last: entrepreneurs[i].last})
	}
	console.log(trie.sort());
}

triage()