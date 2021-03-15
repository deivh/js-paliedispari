//es palindrome versione 1 non valida perché ho applicato funzioni ancora non studiate
// function palindromeChk(word) {
//     var wordPalindr = word.toLowerCase();
//     wordPalindr = wordPalindr.split('');

//     var wordPalindReverse = wordPalindr;
//     wordPalindReverse = Object.assign([], wordPalindReverse);
//     wordPalindReverse.reverse();
//     wordPalindReverse = wordPalindReverse.join("");
//     wordPalindr = wordPalindr.join("");
//     console.log(wordPalindr, wordPalindReverse);

//     if (wordPalindr === wordPalindReverse) {
//         console.log("La parola è palindroma")
//     } else {
//         console.log("La parola non è palindroma");
//     }

// }

// var wordPl = prompt("Inserisci una parola");
// if (typeof wordPl === 'string') {
//     palindromeChk(wordPl);
// }


//es palindromo versione 2 usando cicli e validation
// function palindrome(word) {
// var wordUser = word.toLowerCase(); //modifica tutti i caratteri in minuscolo
// wordUserStr = wordUser.split(""); //trasforma la parola in un array di caratteri
// wordUserStr = wordUserStr.reverse(); //ribalta l'array di caratteri
// wordUserStr = wordUserStr.join(''); // ritrasformo l'array ribaltato in una parola in modo tale da avere la parola scritta al contrario
// console.log(wordUser, wordUserStr);
// if (wordUser === wordUserStr) {  //se le due parole(quella inserita e la stessa ribaltata) sono uguali allora la parola inserita è palindroma
//     console.log('La parola è palindroma')
// } else {
//     console.log('La parola non è palindroma');
// }
// }

//  var wordPl = prompt("Inserisci una parola"); 
//  if (typeof wordPl === 'string') {
//      palindrome(wordPl); }

// }

//es palindromo versione 3 con ciclo
// function isPalindrome(word){
//     var lng = word.length;
//     var palLng = Math.floor(lng / 2);
//     for (var i=0; i<palLng; i++)
//     var finalI = lng - i - 1;
//     var charI = word.charAt(i);
//     var charFinalI = word.charAt(finalI);
//     if (charI != charFinalI) {
//         return false;
//     }
// }
//     return true;
// }

// function es1() {
//     var word = 'anbna';
//     var isWordPalindrom = isPalindrom(word);
//     console.log(word, isWordPalindrom);
//     }



//es tiro dei dadi
function getRandomNum(min, max) {
    var minRnd = min;
    var maxRnd = max - minRnd + 1;
    var rnd1 = Math.floor(Math.random() * maxRnd) + minRnd; 
    return rnd1;
}

// non va/ non controllava la somma ma il tiro
// function diceRoll() {
//     var winningCondition = prompt("Pari o dispari?")
//     winningCondition = winningCondition.toLowerCase();
//     if (winningCondition === "pari" || winningCondition === "dispari") {
//         var numUser = parseInt(prompt("Inserisci un numero compreso tra 1 e 5"));
//         if (numUser < 1 || numUser > 5) {
//             console.log("Hai inserito un numero non valido");
//             return;
//         } else {
//             var numComputer = getRandom(1,5);
//             console.log(numComputer);
//             var numComputerChk = numComputer % 2;
//             var numUserChk = numUser % 2;
//         }
//     } else {
//         console.log("La condizione di vittoria stabilita non è valida");
//     }
//     if (winningCondition == "pari") {
//         if (numComputerChk && !numUserChk) {
//             console.log("Ha vinto il computer");
//         } else if (!numComputerChk && numUserChk) {
//             console.log("Hai vinto tu! Complimenti!");
//         } else if (numComputerChk && numUserChk) {
//             console.log("E' patta!");
//         }
//     } else if (winningCondition == "dispari") {
//         if (numComputerChk && !numUserChk) {
//             console.log("Hai vinto tu! Complimenti!");
//         } else if (!numComputerChk && numUserChk) {
//             console.log("Ha vinto il computer");
//         } else if (!numComputerChk && !numUserChk) {
//             console.log("E' patta!");
//         }
//     }
// }

//secondo tentativo
function diceSum() {
    var winCond = prompt("La somma dei due numeri sarà pari o dispari?").toLowerCase();
    var numUser = parseInt(prompt("Inserisci un numero compreso tra 1 e 5")); 
    console.log(winCond , numUser);
    // if ( (winCond !== "pari") || (winCond !== "dispari") || (numUser < 1) || (numUser > 5)) {
    //     console.log("Hai inserito dei dati non validi");
    // } else {
        var numPC = getRandomNum(1 , 5);
        var sum = numUser + numPC;
        var sumChk = sum % 2;
        if (sumChk == 0) {
            var sumPair = true;
        } else { 
            var sumOdd = true;
        }
        console.log(numUser, numPC, sum , sumPair, sumOdd);
            var win = console.log("Complimenti hai vinto! Il numero inserito è " + numUser + " , il numero generato dal computer è " + numPC + " e la loro somma è " + sum); 
        if ((sumPair) && winCond == "pari") {
            win;
        } else if ((sumOdd) && winCond == "dispari") {
            win;
        } else {
            console.log("Mi dispiace hai perso!")
        }
    // }
}


diceSum();