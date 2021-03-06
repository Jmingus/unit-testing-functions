'use strict';
var _ = require('lodash')

/*
 * PROBLEM `checkData`: (normal)
 * Write a function that takes a string and checks to make sure that the string
 * has a length of exactly three. Return true if the string length is three or
 * false if it is not three.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function checkData(inputString) {
    if (typeof  inputString !== "string"){
        throw 'Invalid Input'
    }
	if (inputString.length === 3){
        return true;
    }else{
        return false
    }
}

/*
 * PROBLEM `concatenateArrays`: (normal)
 * Write a function that, given two arrays of integers a and b, returns an array
 * that is formed by the elements of a followed by the elements of b.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function concatenateArrays(a, b) {
    if(!_.isArray(a) && !_.isArray(b)){
        throw 'Invalid Input'
    }
    for(var i = 0; i < a.length; i++){
        if(typeof a[i] !== 'number'){
            throw 'Invalid Input'
        }
    }
    for(var i = 0; i < b.length; i++){
        if(typeof b[i] !== 'number'){
            throw 'Invalid Input'
        }
    }
	var newArray = a.concat(b)
    return newArray;
}

/*
 * PROBLEM `fixProperNoun`: (normal)
 * Proper nouns always begin with a capital letter, followed by small letters.
 * Write a function called `fixProperNoun` that takes a potentially improperly
 * capitalized proper noun and returns the same noun with the proper
 * capitalization.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function fixProperNoun(noun) {
    if( typeof noun !== 'string'){
        throw 'Invalid Input'
    }

    var firstLetter = noun.substring(0,1).toUpperCase();
    var cleanedNoun = firstLetter + noun.substring(1).toLowerCase()
    return cleanedNoun
}

/*
 * PROBLEM `sortLetters`: (normal)
 * Write a function called `sortLetters` that returns a string that sorts all
 * the letters from a given string in the alphabetical order.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function sortLetters(inputString) {
    if( typeof inputString !== 'string'){
        throw 'Invalid Input'
    }
    var sortedString = inputString.split('').sort().join('')
    return sortedString;
}

/*
 * PROBLEM `absVal`: (normal)
 * Write a function called `absVal` that return the absolute value of a given
 * integer. Don't use Math.abs(...)
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function absVal(integer) {
    if( typeof integer !== 'number'){
        throw 'Invalid Input'
    }
    var cleanedInteger = null;
    if(integer < 0){
        cleanedInteger = Math.ceil(integer) * -1
    }else{
        cleanedInteger = Math.ceil(integer)
    }
    return cleanedInteger
}

/*
 * PROBLEM `myMin`: (normal)
 * Write a function called `myMin` that takes two integers and returns the
 * smaller of the two numbers.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function myMin(integer1, integer2){
    if( typeof integer1 !== 'number' && typeof integer2 !== 'number'){
        throw 'Invalid Input'
    }
    if( integer1 < integer2){
        return integer1
    }else{
        return integer2
    }
}

/*
 * PROBLEM `myMax`: (normal) - Actual Interview Question
 * Write a function called `myMax` that takes an array of integers ans returns
 * the largest.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 *
 * Insane mode: do this without using a for loop.
 */
function myMax(arrayOfIntegers){
    if(!_.isArray(arrayOfIntegers)){
        throw 'Invalid Input'
    }
    for(var i = 0; i < arrayOfIntegers.length; i++){
        if(typeof arrayOfIntegers[i] !== 'number'){
            throw 'Invalid Input'
        }
    }
    var sortedArray = arrayOfIntegers.sort(function (a, b) {
        return a - b;
    });
    var largestInt = sortedArray.reverse()[0]
    return largestInt;
}
/*
 * PROBLEM `getMonth`: (normal)
 * Write a function called `getMonth` that maps a given integer to a month.
 *
 * For example:
 * getMonth(1) == 'January'
 * getMonth(3) == 'March'
 * etc.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function getMonth(integer) {
    var months = {
        0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December"
    }
    if(typeof integer !== 'number'){
        throw 'Invalid Input'
    }
    if(integer < 1 || integer > 12){
        throw 'Invalid Input'
    }
    return months[integer - 1]
}
/*
 * PROBLEM `randomElement`: (normal)
 * Create a function called `randomElement` that takes an array of values and
 * returns one randomly selected value from that array.
 */
function randomElement(arrayOfValues){

    var newArray = (arrayOfValues[Math.floor(Math.random() * (arrayOfValues.length - 0) - 0)])
    return newArray

}
/*
 * PROBLEM `studentPairs`: (normal)
 * Create a javascript function called `studentPairs` that takes an array of
 * student names and returns an array of randomly selected pairs of students
 * (array of arrays).
 */
function studentPairs(studentNames){
    var pairedNames = []
    if(!_.isArray(studentNames)){
        throw 'Invalid Input'
    }
    for(var i = 0; i < studentNames.length; i++){
        if(typeof studentNames[i] !== 'string'){
            throw 'Invalid Input'
        }
    }
    for(var j = 0; j < studentNames.length; j++){
        var singleStudent = studentNames[Math.floor(Math.random() * (studentNames.length - 0))]
        while(_.includes(pairedNames,singleStudent)){
            singleStudent = studentNames[Math.floor(Math.random() * (studentNames.length - 0))]
        }
        pairedNames.push(singleStudent);
    }

    return _.chunk(pairedNames, 2)

}
/*
 * PROBLEM `sumSquares`: (normal)
 * Write a function called `sumSquares` that returns the sum of squares of all
 * integers from 1 up to and including a given positive, non-zero integer N.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function sumSquares(integer){
    var thingsToBeSum = []
    if(!_.isNumber(integer)){
        throw 'Invalid Input'
    }
    if(integer < 1){
        throw 'Invalid Input'
    }
    for(var i = 1; i < integer + 1; i++){
        var squared = i * i
        thingsToBeSum.push(squared)
    }
    return _.sum(thingsToBeSum)
}
/* 
 * PROBLEM `findMaxDiff`: (normal)
 * Given an array of integers, write a function called `findMaxDiff` that finds
 * the maximal difference between any two adjacent elements.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function findMaxDiff(arrayOfIntegers){
    var values = []
    if(!_.isArray(arrayOfIntegers)){
        throw 'Invalid Input'
    }
    for(var i = 0; i < arrayOfIntegers.length; i++){
        if(!_.isNumber(arrayOfIntegers[i])){
            throw 'Invalid Input'
        }
    }
    var chunked = _.chunk(arrayOfIntegers, 2)
    for(var j = 0; j < arrayOfIntegers.length; j++){
        var max = _.max(chunked[0])
        var min = _.min(chunked[0])
        var result = max - min
        values.push(result)
        chunked = _.flatten(chunked)
        chunked = _.drop(chunked)
        chunked = _.chunk(chunked,2)
    }
    var maxDiff = _.max(values)
    return maxDiff
}
/*
 * PROBLEM `insertDashes`: (normal)
 * Write a function called `insertDashes` that transforms a given sentence into
 * a new one with dashes between each two consecutive letters.
 * For example: insertDashes('abba test') => a-b-b-a t-e-s-t
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function insertDashes(string){
    var finalArray = []
    if(!_.isString(string)){
        throw 'Invalid Input'
    }
    var split = string.split(' ')
    for(var i = 0; i < split.length;i++ ){
       var dashedWord = split[i].split('').join('-')
       finalArray.push(dashedWord)
    }
    return finalArray.join(' ')
}
/*
 * PROBLEM `mySubstring`: (normal)
 * Implement a function called `mySubstring` that can output the substring of
 * the given string within specified bounds.
 *
 * For example: mySubstring('abcde', 2, 3) === 'cd'
 *
 * Don't use String.substring in your solution.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function mySubstring(string, a, b){
    if(!_.isString(string)){
        throw 'Invalid Input'
    }
    if(!_.isNumber(a)||!_.isNumber(b)){
        throw 'Invalid Input'
    }
    if( a > b){
       var newString = string.slice(b,a)
    }else{
       var newString = string.slice(a,b)
    }
    return newString
}
/*
 * PROBLEM `splitSwap`: (hard)
 * Write a function called `splitSwap` that swaps two halves of a given array.
 * If the array has an odd number of elements the array should be split in half
 * by rounding down the number of elements divided by two.
 *
 * For example: splitSwap([1,2,3,4,5]) === [3,4,5,1,2]
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function splitSwap(array){
    var result = []
    if(!_.isArray(array)){
        throw 'Invalid Input'
    }
    var separator = array.length;
    if(separator % 2 === 0){
       var split = _.chunk(array, separator/2);
       result.push(split[1])
       result.push(split[0])
    }else {
       var halfSlice = Math.floor(separator/2);
        var split = _.chunk(array, halfSlice)
        result.push(split[1])
        result.push(split[2])
        result.push(split[0])
    }
    return _.flatten(result);
}
/*
 * PROBLEM `smallMultiples`: (hard)
 * For given n and k write a function called `smallMultiples` that returns the
 * count of the number of multiples of k that are not greater than n.
 *
 * For example smallMultiples(4, 1) === 3 because 1*2, 1*3 and 1*4 are not
 * greater than 4.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function smallMultiples(n, k){
    var multipleCounter = 0
    if(!_.isNumber(n) || !_.isNumber(k)){
        throw 'Invalid Input'
    }
    for(var i = 1; i < n + 1; i++){
        var currentValue = i * k
        if( currentValue < n){
            multipleCounter ++
        }
    }
    return multipleCounter
}
/*
 * PROBLEM `rot13`: (hard)
 * Create a function called `rot13` that takes an unencrypted string and returns
 * the [ROT-13](http://en.wikipedia.org/wiki/ROT13) version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */
function rot13(a,b){

}

/*
 * PROBLEM `derot13`: (hard)
 * Create a function called `derot13` that takes a ROT-13 encrypted string and
 * returns the decrypted version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `rotn`: (hard)
 * Create a function called `rotn` that takes an unencrypted string and an
 * integer (n) and returns the ROT-N version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `findBoth`: (hard)
 * Write a function called `findBoth` that takes two arrays of integers a and b
 * returns an array that includes only the elements that appear in both a and b.
 * A value should not appear more than once in the returned array.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `countBoth`: (hard)
 * Write a function called `countBoth` that takes two arrays of integers a and
 * b. The function should return the number of elements that exist in both a and
 * b.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `isDiagonalMatrix`: (nightmare)
 * In linear algebra, a square matrix (array of arrays) is called a diagonal
 * matrix if all entries outside the main diagonal are zero (the diagonal from
 * the upper left to the lower right).
 * For example:
 * [
 *   [1, 0, 0],
 *   [0, 2, 0],
 *   [0, 0, 3]
 * ]
 * is a diagonal matrix.
 *
 * [
 *   [1, 0, 2],
 *   [0, 2, 0],
 *   [0, 0, 3]
 * ]
 * is not a diagonal matrix.
 *
 * [
 *   [1, 0, 0],
 *   [0, 2, 0]
 * ]
 * is not a diagonal matrix.
 *
 * Write a function called `isDiagonalMatrix` that takes a matrix and returns
 * true if the matrix is a diagonal matrix. Otherwise return false.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `isAnagram`: (nightmare) - Actual Interview Question
 * An anagram is a type of word play, the result of rearranging the letters of a
 * word or phrase to produce a new word or phrase, using all the original
 * letters exactly once.
 *
 * Write a function called `isAnagram` that takes two arrays of strings of equal
 * lengths arr1 and arr2. The function should return a new array of the same
 * length as the input with boolean values at each position i. The boolean value
 * at position i of the result array should be true if the strings at position i
 * in arr1 and arr2 are anagrams of each other. Otherwise the boolean at
 * position i of the result array should be false.
 *
 * For example:
 * isAnagram(
 * 		['cinema', 'shot', 'aba', 'rain'],
 * 		['iceman', 'hots', 'bab', 'train']
 * ) === [true, true, false, false];
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `validateParentheses`: (nightmare) - Actual Interview Question
 * Write a function called `validateParentheses` that takes a string of
 * parentheses. The string can contain the following characters repeated any
 * number of times in any order: ()[]{}
 *
 * The function should return true if the parentheses are in a valid order and
 * false if they are not. One type of parentheses cannot close before it has
 * been opened and one type of parentheses cannot be closed while a different
 * type of parentheses is open. All parentheses that are opened must also be
 * closed.
 *
 * For example:
 * validateParentheses(']') === false;
 * validateParentheses('[') === false;
 * validateParentheses('[]') === true;
 * validateParentheses('{[]}') === true;
 * validateParentheses('([)]') === false;
 * validateParentheses('{[(){()}]}') === true;
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `flattenArray`: (nightmare) - Actual Interview Question
 * Write a function called flattenArray that takes an array of any type of
 * element, and flattens it, such that any element in the given array that is an
 * array is converted to a list of non-arrays. For example:
 *
 * flattenArray([1, {a: [2, 3]}, 4, [5, [6]], [[7], 8, 9], 10])
 * === [1, {a: [2, 3]}, 4, 5, 6, 7, 8, 9, 10]
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 *
 * Insane mode: do this without recursion.
 */

/*
 * Do not modify the code below
 */
module.exports = {
	checkData: 				typeof checkData === 'undefined' ? undefined : checkData,
	concatenateArrays: 		typeof concatenateArrays === 'undefined' ? undefined : concatenateArrays,
	fixProperNoun: 			typeof fixProperNoun === 'undefined' ? undefined : fixProperNoun,
	sortLetters: 			typeof sortLetters === 'undefined' ? undefined : sortLetters,
	absVal: 				typeof absVal === 'undefined' ? undefined : absVal,
	myMin: 					typeof myMin === 'undefined' ? undefined : myMin,
	myMax: 					typeof myMax === 'undefined' ? undefined : myMax,
	getMonth: 				typeof getMonth === 'undefined' ? undefined : getMonth,
	randomElement: 			typeof randomElement === 'undefined' ? undefined : randomElement,
	studentPairs: 			typeof studentPairs === 'undefined' ? undefined : studentPairs,
	sumSquares: 			typeof sumSquares === 'undefined' ? undefined : sumSquares,
	findMaxDiff: 			typeof findMaxDiff === 'undefined' ? undefined : findMaxDiff,
	insertDashes: 			typeof insertDashes === 'undefined' ? undefined : insertDashes,
	mySubstring: 			typeof mySubstring === 'undefined' ? undefined : mySubstring,
	splitSwap: 				typeof splitSwap === 'undefined' ? undefined : splitSwap,
	smallMultiples: 		typeof smallMultiples === 'undefined' ? undefined : smallMultiples,
	rot13: 					typeof rot13 === 'undefined' ? undefined : rot13,
	derot13: 				typeof derot13 === 'undefined' ? undefined : derot13,
	rotn: 					typeof rotn === 'undefined' ? undefined : rotn,
	findBoth: 				typeof findBoth === 'undefined' ? undefined : findBoth,
	countBoth: 				typeof countBoth === 'undefined' ? undefined : countBoth,
	isDiagonalMatrix: 		typeof isDiagonalMatrix === 'undefined' ? undefined : isDiagonalMatrix,
	isAnagram: 				typeof isAnagram === 'undefined' ? undefined : isAnagram,
	validateParentheses:	typeof validateParentheses === 'undefined' ? undefined : validateParentheses,
	flattenArray: 			typeof flattenArray === 'undefined' ? undefined : flattenArray
};