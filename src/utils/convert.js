const lessThan20 = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen'
]

const tens = [
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety'
]

const weights = [
    'hundred',
    'thousand',
    'million',
    'billion',
    'trillion'
]

const TEN = 10;
const HUNDRED = 100;
const THOUSAND = 1000;
const MILLION = 1000000;
const BILLION = 1000000000;
const TRILLION = 1000000000000n;

function convertTensToIndex(number) {
    // Return a pure integer
    return Math.floor((number - 20) / 10)
}

// for our weight counter
let weightCounter = 0

// for resetting our weight counter
function resetWeightCounter() {
    weightCounter = 0
}

// function changeToWords(number) {

    // if (number < 20) {
    //     return lessThan20[number]
    // } 
    // else if (number < 100) {
    //     if (number % 10 === 0) {
    //         // We need a way to breakdown 20 into index 0, 30 into index 1, and so on.
    //         return tens[convertTensToIndex(number)]
    //     }
    //     else return `${tens[convertTensToIndex(number)]} ${lessThan20[number % 10]}`
    // }
//     else if (number < 1000) {
        // if (number % 100 === 0) {
        //     return `${lessThan20[number / 100]} ${weights[0]}`
        // }
        // else return `${lessThan20[Math.floor(number / 100)]} ${weights[0]} and ${changeToWords(number%100)}`
    
//     }

//     return convertLargerNumbers(number)
// }


// // An abstraction to avoid the changeToWords function from getting too large
// function convertLargerNumbers(number) {
//     // first, let us break the string down.
    // let allExceptLast3Numbers = Math.floor(number / 1000)
    // let last3Numbers = number % 1000
    // let last3NumbersInWords = ``

    // if (last3Numbers === 0){
    //     last3NumbersInWords = ``
    // }
    // else if (last3Numbers < 100){
    //     last3NumbersInWords = ` and ${changeToWords(last3Numbers)}`
    // } else {
    //     last3NumbersInWords = `, ${changeToWords(last3Numbers)}`
    // }

//     const allExceptLast3NumbersInWords = `${changeToWords(allExceptLast3Numbers)}`

//     return `${allExceptLast3NumbersInWords} ${weights[++weightCounter]}${last3NumbersInWords}`
// }

function changeToWords(number) {
    if (number < HUNDRED) 
        return convertTens(number)
    if (number < THOUSAND)
        return convertHundreds(number);
    if (number < MILLION)
        return convertThousands(number);
    if (number < BILLION)
        return convertMillions(number);
    if (number < TRILLION)
        return convertBillions(number);

    return ''
    
}

function convertTens(number){
    if (number < 20) {
        return lessThan20[number]
    } 
    else if (number < 100) {
        if (number % 10 === 0) {
            // We need a way to breakdown 20 into index 0, 30 into index 1, and so on.
            return tens[convertTensToIndex(number)]
        }
        else return `${tens[convertTensToIndex(number)]} ${lessThan20[number % 10]}`
    }
}

function convertHundreds(number){
    if (number % 100 === 0) {
        return `${lessThan20[number / 100]} ${weights[0]}`
    }
    else return `${lessThan20[Math.floor(number / 100)]} ${weights[0]} and ${changeToWords(number%100)}`
}

function convertThousands(number){
    let allExceptLast3Numbers = Math.floor(number / 1000)
    let last3Numbers = number % 1000
    let numbersInWords = ``

    numbersInWords += changeToWords(allExceptLast3Numbers) + ' thousand'
    if (!(last3Numbers === 0)){
        if (last3Numbers % 100 === 0) {
            return `${numbersInWords}, ${lessThan20[number / 100]} ${weights[0]}`
        }
        else if (last3Numbers > 100) {
            return `${numbersInWords}, ${changeToWords(last3Numbers)}`
        }
        else return `${numbersInWords} and ${changeToWords(last3Numbers)}`
    }
    return numbersInWords
    
}

function convertMillions(number){
    let output = ``

    let millions = Math.floor(number/MILLION)
    let remainder = number%MILLION

    output += changeToWords(millions) + ' million'

    if (!(changeToWords(remainder) === "zero")){
        if (remainder < 100) {
            return output += ' and ' + changeToWords(remainder) 
        }
        return output += ', ' + changeToWords(remainder)
    }

    return output
}

function convertBillions(number){
    let output = ``

    let billions = Math.floor(number/BILLION)
    let remainder = number%BILLION

    output += changeToWords(billions) + ' billion'

    if (!(changeToWords(remainder) === "zero")){
        if (remainder < 100) {
            return output += ' and ' + changeToWords(remainder) 
        }
        return output += ', ' + changeToWords(remainder)
    }
    
    return output
}

function validateNumber(number) {
    if (number < 1000000000000) {
        return changeToWords(number)
    }
    else throw "Number is too large"
}

function convert(number) {
    try {
        if (Number.isInteger(parseInt(number))) {
            return validateNumber(parseInt(number))
        }
        else throw "Not a number"
    }
    catch (e) {
        throw (e)
    }
}

module.exports = {
    convert,
}