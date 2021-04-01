// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

function alphabetPosition(text) {
    let alphaNum = []
    let tArr = text.toLowerCase().split('')
    tArr.map(letter => {
        if (letter === 'a'){
            alphaNum.push(1)
        } else if (letter === 'b'){
            alphaNum.push(2)
        } else if (letter === 'c'){
            alphaNum.push(3)
        } else if (letter === 'd'){
            alphaNum.push(4)
        } else if (letter === 'e'){
            alphaNum.push(5)
        } else if (letter === 'f'){
            alphaNum.push(6)
        } else if (letter === 'g'){
            alphaNum.push(7)
        } else if (letter === 'h'){
            alphaNum.push(8)
        } else if (letter === 'i'){
            alphaNum.push(9)
        } else if (letter === 'j'){
            alphaNum.push(10)
        } else if (letter === 'k'){
            alphaNum.push(11)
        } else if (letter === 'l'){
            alphaNum.push(12)
        } else if (letter === 'm'){
            alphaNum.push(13)
        } else if (letter === 'n'){
            alphaNum.push(14)
        } else if (letter === 'o'){
            alphaNum.push(15)
        } else if (letter === 'p'){
            alphaNum.push(16)
        } else if (letter === 'q'){
            alphaNum.push(17)
        } else if (letter === 'r'){
            alphaNum.push(18)
        } else if (letter === 's'){
            alphaNum.push(19)
        } else if (letter === 't'){
            alphaNum.push(20)
        } else if (letter === 'u'){
            alphaNum.push(21)
        } else if (letter === 'v'){
            alphaNum.push(22)
        } else if (letter === 'w'){
            alphaNum.push(23)
        } else if (letter === 'x'){
            alphaNum.push(24)
        } else if (letter === 'y'){
            alphaNum.push(25)
        } else if (letter === 'z'){
            alphaNum.push(26)
        }
    })
    return alphaNum.join(' ')
  }