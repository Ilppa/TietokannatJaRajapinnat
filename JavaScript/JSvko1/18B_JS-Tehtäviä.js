const word = prompt("Anna sana:");

function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

if (isPalindrome(word)) {
    alert(`${word} sana on palindromi`);
} else {
    alert(`${word} sana ei ole palindromi`);
}