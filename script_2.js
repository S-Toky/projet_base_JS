let answer = "";
answer =  prompt("De quel nombre veut tu calculer la factorielle ?");

function factorial(answer) {
  return (answer != 1) ? answer * factorial(answer - 1) : 1;
}

console.log(`Le résultat est : ${factorial(answer)}`)