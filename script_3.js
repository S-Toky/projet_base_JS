let answer = "";
answer =  prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

function pyramid(n) {
	n = answer;
  for(let i=1; i<= n; i++){
    let blank = ' '.repeat(n-i);
    let full = '#'.repeat(i)
    console.log(blank + full);
  }
}

pyramid(answer);