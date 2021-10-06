//=================================================//
//=============== Century From Year ===============//
//=================================================//

// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

// Example

// For year = 1905, the output should be
// centuryFromYear(year) = 20;
// For year = 1700, the output should be
// centuryFromYear(year) = 17.

// Solution:

// function centuryFromYear(year) {
//     if(year % 100 === 0) {
//         return year/100
//     } else {
//         return Math.ceil(year/100)
//     }
// }


//=================================================//
//=========== Adjacent Elements Product ===========//
//=================================================//

// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// Example

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// adjacentElementsProduct(inputArray) = 21.

// 7 and 3 produce the largest product.

// Solution:

// function adjacentElementsProduct(inputArray) {
//     let largest = inputArray[0] * inputArray[1]
//     for(let i = 0; i <= inputArray.length -1; i++){
//         let sum = inputArray[i] * inputArray[i + 1]
//         if(sum > largest){
//             largest = sum
//         }
//     }
//     console.log(largest)
//     return largest
// }

//=================================================//
//================== Shape Area ===================//
//=================================================//

// Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

// A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.

// ShapeArea photo here **


// Example

// For n = 2, the output should be
// shapeArea(n) = 5;
// For n = 3, the output should be
// shapeArea(n) = 13.

// Solution:

// function shapeArea(n) {
//     return n**2 + (n - 1)**2
// }

//=================================================//
//=========== Make Array Consecutive 2 ============//
//=================================================//

// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

// Example

// For statues = [6, 2, 3, 8], the output should be
// makeArrayConsecutive2(statues) = 3.

// Ratiorg needs statues of sizes 4, 5 and 7.

// Solution: 

// function makeArrayConsecutive2(statues) {
//     let difference = Math.max(...statues) - Math.min(...statues)
//     return (difference + 1) - statues.length
// }


//=================================================//
//========== Almost Increasing Sequence ===========//
//=================================================//

// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

// Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

// Example

// For sequence = [1, 3, 2, 1], the output should be
// almostIncreasingSequence(sequence) = false.

// There is no one element in this array that can be removed in order to get a strictly increasing sequence.

// For sequence = [1, 3, 2], the output should be
// almostIncreasingSequence(sequence) = true.

// You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

// Solution: 

// function almostIncreasingSequence(seq) {
//   var bad=0
//   for(var i=1;i<seq.length;i++) if(seq[i]<=seq[i-1]) {
//     bad++
//     if(bad>1) return false
//     if(seq[i]<=seq[i-2]&&seq[i+1]<=seq[i-1]) return false
//   }
//   return true
// }

//=================================================//
//============== Matrix Elements Sum ==============//
//=================================================//

// Posted on linkedIn

// Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).

// Solution:

// function matrixElementsSum(matrix) {
//     let columnsOfZero = []
//     let y = 0
//     let count = 0
//     for(array of matrix){
//         for(elem of array){
//            if(elem === 0){
//                columnsOfZero.push(y)
//            } else if (elem !== 0 && !columnsOfZero.includes(y)){
//                count += elem
//            }
//            y+=1
//         }
//         y = 0
//     }
        
//     return count
// }


//=================================================//
//============== All Longest Strings ==============//
//=================================================//

// Given an array of strings, return another array containing all of its longest strings.

// Solution: 

// function allLongestStrings(inputArray) {
//     let longest = [];
//     for(string of inputArray){
//         if(longest.length === 0){
//             longest.push(string)
//         } else if(longest.length > 0 && longest[0].length < string.length){
//             longest = [];
//             longest.push(string)
//         } else if(longest[0].length === string.length){
//             longest.push(string)
//         }
//     }
//     return longest
// }


//=================================================//
//============= Common Character Count ============//
//=================================================//


// Given two strings, find the number of common characters between them.

// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".


// Solution: 

// function commonCharacterCount(s1, s2) {
//     for (let i = 0; i < s1.length; i++) {
//         s2 = s2.replace(s1[i], "!");
//     }
//     return s2.replace(/[^!]/g, "").length;
    
// }

//=================================================//
//==================== Is Lucky ===================//
//=================================================//


// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

// Example

// For n = 1230, the output should be
// isLucky(n) = true;
// For n = 239017, the output should be
// isLucky(n) = false.

// Solution: 

// function isLucky(n) {
//     let reducer = (prev, curr) => prev + curr;
//     let num = n.toString().split('')
//     let first = num.slice(0, num.length / 2).map(Number).reduce(reducer)
//     let second = num.slice(num.length / 2).map(Number).reduce(reducer)
//     console.log(first, second)
//     if (first === second){
//         return true
//     } else {
//         return false
//     }
    
// }