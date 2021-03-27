// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit
                 
//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2
                  
//  persistence(4) === 0 // because 4 is already a one-digit number

function persistence(num) {
    let first = String(num).split('').reduce((a, b) => a * b)
    let second = String(first).split('').reduce((a, b) => a * b)
    let third = String(second).split('').reduce((a, b) => a * b)
    let fourth = String(third).split('').reduce((a, b) => a * b)
    let fifth = String(fourth).split('').reduce((a, b) => a * b)
    let sixth = String(fifth).split('').reduce((a, b) => a * b)

    if (num < 10){
        return 0
    } else if(first < 10){
        return 1
    } else if(second < 10){
        return 2
    } else if (third < 10){
        return 3
    } else if (fourth < 10){
        return 4
    } else if (fifth < 10){
        return 5
    } else if(sixth < 10) {
        return 6
    } else {
        return 7
    }
}
