//es palindrome
function palindromeChk(word) {
    var wordPalindr = word.split('');
    var wordPalindReverse = wordPalindr;
    wordPalindReverse = Object.assign([], wordPalindReverse);
    wordPalindReverse.reverse();
    wordPalindReverse = wordPalindReverse.join("");
    wordPalindr = wordPalindr.join("");
    console.log(wordPalindr, wordPalindReverse);

    if (wordPalindr === wordPalindReverse) {
        console.log("La parola è palindroma")
    } else {
        console.log("La parola non è palindroma");
    }


}

var wordPl = prompt("Inserisci una parola");
if (typeof wordPl === 'string') {
    palindromeChk(wordPl);
}