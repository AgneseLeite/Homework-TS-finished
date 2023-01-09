import { ids } from "webpack";

/**
 * Task 1
 * Write a function that takes two numbers (a and b) as argument
 * Sum a and b
 * Return the result
 */


const add = (num1: number, num2: number): number => num1 + num2;

console.log(add(1, 2)); // 3
console.log(add(1, 10)); // 11
console.log(add(99, 1)); // 100


/**
 * Task 2
 * 
 * Write a function that takes a value as argument
 * Return the type of the value
 */

const getType = (value: any): string => {
    return typeof value;
}

console.log(getType(1)); // "number"
console.log(getType(false)); // "boolean"
console.log(getType({})); // "object"
console.log(getType(null)); // "object"
console.log(getType("string")); // "string"
console.log(getType(["array"])); // "object"


/**
 * Task 3
 * 
 * Write a function that takes two values, say a and b, as arguments
 * Return true if the two values are equal and of the same type
 */

const areEqual = (a: any, b: any): boolean => {
    return (a === b);
}

console.log(areEqual(2, 3)); // false
console.log(areEqual(3, 3)); // true
console.log(areEqual(1, '1')); // false
console.log(areEqual('10', '10')); // true


/**
 * Task 4
 * 
 * Write a function that takes a string (a) and a number (n) as arguments
 * Return the nth character of 'a'
 */

const getCharacter = (str: string, num: number): string => {
    return str[num-1];
}

console.log(getCharacter('abcd', 1)); // 'a'
console.log(getCharacter('zyxbwpl', 5)); // 'w'
console.log(getCharacter('gfedcba', 3)); // 'e'


/**
 * Task 5
 * 
 * Write a function that takes a string (a) as argument
 * Remove the first 3 characters of a
 * Return the result
 */

const sliceString = (str: string): string => {
    return str.slice(3);
}

console.log(sliceString('abcdefg')); // 'defg'
console.log(sliceString('1234')); // '4'
console.log(sliceString('fgedcba')); // 'dcba'


/**
 * Task 6
 * 
 * Write a function that takes a string as argument
 * Extract the last 3 characters from the string
 * Return the result
 */

const getLastThree = (str: string): string => {
    const lastThree = str.substring(str.length - 3);
    return lastThree;
}

console.log(getLastThree('abcdefg')); // 'efg'
console.log(getLastThree('1234')); // '234'
console.log(getLastThree('fgedcba')); // 'cba'


/**
 * Task 7
 * 
 * Write a function that takes a string (a) as argument
 * Get the first 3 characters of a
 * Return the result
 */

const getFirstThree = (str: string): string => {
    const firstThree = str.substring(0, 3);
    return firstThree;
}

console.log(getFirstThree('abcdefg')); // 'abc'
console.log(getFirstThree('1234')); // '123'
console.log(getFirstThree('fgedcba')); // 'fge'


/**
 * Task 8
 * 
 * Write a function that takes a string (a) as argument
 * Extract the first half a
 * Return the result
 */

const getFirstHalf = (str: string): string => {
    const half = str.length / 2;
    const firstHalf = str.substring(0, half);
    return firstHalf;
}

console.log(getFirstHalf('abcdefgh')); // 'abcd'
console.log(getFirstHalf('1234'));  // '12'
console.log(getFirstHalf('gedcba')); // 'ged'


/**
 * Task 9
 * 
 * Write a function that takes a string (a) as argument
 * Remove the last 3 characters of a
 * Return the result
 */

const removeLastThree = (str: string): string => {
    const remainder = str.slice(0, -3);
    return remainder;
}

console.log(removeLastThree('abcdefg')); // 'abcd'
console.log(removeLastThree('1234')); // '1'
console.log(removeLastThree('fgedcba')); // 'fged'


/**
 * Task 10
 * 
 * Write a function that takes two numbers (a and b) as argument
 * Return b percent of a
 */

const getPercentage = (num1: number, num2: number): number => {
    return (num2 / 100) * num1;
}

console.log(getPercentage(100, 50)); // 50
console.log(getPercentage(10, 1)); // 0.1
console.log(getPercentage(500, 25)); // 125


/**
 * Task 11
 * 
 * Write a function that takes 6 values (a,b,c,d,e,f) as arguments
 * Sum a and b
 * Then substract by c
 * Then multiply by d and divide by e
 * Finally raise to the power of f and return the result
 * Tip: mind the order
 */

const result = (a: number, b: number, c: number, d: number, e: number, f: number): number => {
    const sum = a + b;
    const subtraction = sum - c;
    const multiplication = subtraction * d;
    const division = multiplication / e;
    const final = Math.pow(division, f);
    return final;
}

console.log(result(6,5,4,3,2,1)); // 10.5
console.log(result(6,2,1,4,2,3)); // 2744
console.log(result(2, 3, 6, 4, 2, 3)) // -8


/**
 * Task 12
 * 
 * Write a function that takes a number as argument
 * If the number is even, return true
 * Otherwise, return false
 */

const isEven = (num: number): boolean => {
    return (num % 2 === 0);
}

console.log(isEven(10)); // true
console.log(isEven(-4)); // true
console.log(isEven(5)); // false
console.log(isEven(-111)); // false


/**
 * Task 13
 * 
 * Write a function that takes two strings (a and b) as arguments
 * Return the number of times a occurs in b
 */

const getOccurences = (str1: string, str2: string): number => {
    return str2.split(str1).length - 1;
}

console.log(getOccurences('m', 'how many times does the character occur in this sentence?')); // 2
console.log(getOccurences('h', 'how many times does the character occur in this sentence?')); // 4
console.log(getOccurences('?', 'how many times does the character occur in this sentence?')); // 1
console.log(getOccurences('z', 'how many times does the character occur in this sentence?')); // 0

/**
 * Task 14
 * 
 * Write a function that takes a number (a) as argument
 * If a is a whole number (has no decimal place), return true
 * Otherwise, return false
 */

const isWhole = (num: number): boolean => {
    return Number.isInteger(num);
}

console.log(isWhole(4)); // true
console.log(isWhole(1.123)); // false
console.log(isWhole(1048)); // true
console.log(isWhole(10.48)); // false


/**
 * Task 15
 * 
 * Write a function that takes two numbers (a and b) as arguments
 * If a is smaller than b, divide a by b
 * Otherwise, multiply both numbers
 * Return the resulting value
 */

const numberValue = (num1: number, num2: number): number => {
    if (num1 < num2) {
        return num1 / num2;
    } else {
        return num1 * num2;
    }
}

console.log(numberValue(10, 100)); // 0.1
console.log(numberValue(90, 45)); // 4050
console.log(numberValue(8, 20)); // 0.4
console.log(numberValue(2, 0.5)); // 1


/**
 * Task 16
 * 
 * Write a function that takes two strings (a and b) as arguments
 * If a contains b, append b to the beginning of a
 * If not, append it to the end
 * Return the concatenation
 */

const concatStrings = (str1: string, str2: string): string => {
    if (str1.includes(str2)) {
        return str2 + str1;
    } else {
        return str1 + str2;
    }
}

console.log(concatStrings('cheese', 'cake')); // 'cheesecake'
console.log(concatStrings('lips', 's')); // 'slips'
console.log(concatStrings('Java', 'script')); // 'Javascript'
console.log(concatStrings(' think, therefore I am', 'I')); // 'I think, therefore I am'


/**
 * Task 17
 * 
 * Write a function that takes a number (a) as argument
 * Round a to the 2nd digit after the comma
 * Return the rounded number
 */

const roundedNumber = (num: number): number => {
    return parseFloat(num.toFixed(2));
}

console.log(roundedNumber(2.12397)); // 2.12
console.log(roundedNumber(3.136)); // 3.14
console.log(roundedNumber(1.12397)); // 1.12
console.log(roundedNumber(26.1379)); // 26.14


/**
 * Task 18
 * 
 * Write a function that takes a number (a) as argument
 * Split a into its individual digits and return them in an array
 * Tip: you might want to change the type of the number for the splitting
 */

const splitNumber = (num: number): number[] => {
    return num.toString().split("").map(Number);
}

console.log(splitNumber(10)); // [1, 0]
console.log(splitNumber(931)); // [9, 3, 1]
console.log(splitNumber(193278)); // [1,9,3,2,7,8]


/**
 * Task 19
 * 
 * It seems like something happened to these strings
 * Can you figure out how to clear up the chaos?
 * Write a function that joins these strings together such that they form the following words:
 * 'Javascript', 'Countryside', and 'Downtown'
 * You might want to apply basic JS string methods such as replace(), split(), slice() etc.
 */

const clearWords = (str1: string, str2: string): string => {
    const clearedA = str1.replace("%", "");
    const clearedB = str2.replace("%", "");
    const newB = clearedB.split("").reverse().join("");
    const newString = clearedA + newB;
    return newString.charAt(0).toUpperCase() + newString.slice(1);
}

console.log(clearWords('java', 'tpi%rcs')); // 'Javascript'
console.log(clearWords('c%ountry', 'edis')); // 'Countryside'
console.log(clearWords('down', 'nw%ot')); // 'Downtown'


/**
 * Task 20
 * 
 * This challenge is a little bit more complex
 * Write a function that takes a number (a) as argument
 * If a is prime, return a
 * If not, return the next higher prime number
 */

const prime = (num: number): number => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return prime(num + 1)
        }
    }
    return num;
};

console.log(prime(38)); // 41
console.log(prime(7)); // 7
console.log(prime(115)); // 127
console.log(prime(2000)); // 2003


/**
 * Task 21
 * 
 * Write a function that takes two numbers, say x and y, as arguments
 * Check if x is divisible by y
 * If yes, return x
 * If not, return the next higher natural number that is divisible by y
 */

 const isDivisible = (num1: number, num2: number): number => {
    while(num1 % num2 !== 0) {
      num1++;
    }
    return num1;
}

console.log(isDivisible(1, 23)); // 23
console.log(isDivisible(23, 23)); // 23
console.log(isDivisible(7, 3)); // 9
console.log(isDivisible(-5, 7)); // 0


/**
 * Task 22
 * 
 * Write a function that takes two strings (a and b) as arguments
 * Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
 * Return the resulting string
 */

const insertedString = (str1: string, str2: string): string => {
    let reversed = str1.split('').reverse().join('');
    let matches = reversed.match(/.{1,2}/g);
    let joined = matches.join(str2);
    let result = joined.split('').reverse().join('');
    return result;
}

console.log(insertedString('1234567','.')); // '1.234.567'
console.log(insertedString('abcde','$')); // 'ab$cde'
console.log(insertedString('zxyzxyzxyzxyzxyz','w')); // 'zwxyzwxyzwxyzwxyzwxyz'


/**
 * Task 23
 * 
 * Write a function that takes a string as argument
 * As it is, the string has no meaning
 * Increment each letter to the next letter in the alphabet
 * Return the correct word
 */

// Calculate the letter by parsing a character, 
// get the value in a 36 numbers system and add one. 
// Take the rest of 36 and if zero add ten to get an 'a' (this was a 'z' before).

const getNextLetter = (str: string): string => {
    let result = '';
    for (const letter of str) {
        result += (((parseInt(letter, 36) + 1)  % 36) || 10).toString(36);
    }
    return result;
}

getNextLetter('bnchmf'); // 'coding'
getNextLetter('bgddrd'); // 'cheese'
getNextLetter('sdrshmf'); // 'testing'


/**
 * Task 24
 * 
 * Write a function that takes an array (a) and a value (n) as argument
 * Return the nth element of 'a'
 */

const getElement = (numberArr: number[], num: number): number => {
    let returnedValue = numberArr[num - 1];
    return returnedValue;
}

console.log(getElement([1,2,3,4,5],3)); // 3
console.log(getElement([10,9,8,7,6],5)); // 6
console.log(getElement([7,2,1,6,3],1)); // 7


/**
 * Task 25
 * 
 * Write a function that takes an array (a) as argument
 * Remove the first 3 elements of 'a'
 * Return the result
 */

const getThreeElements = (arr: number[]): number[] => {
    arr.splice(0, 3); 
    return arr; 
}

getThreeElements([1,2,3,4]); // [4]
getThreeElements([5,4,3,2,1,0]); // [2,1,0]
getThreeElements([99,1,1]); // []


/**
 * Task 26
 * 
 * Write a function that takes an array (a) as argument
 * Extract the last 3 elements of a
 * Return the resulting array
 */

 const getLastElements = (arr: number[]): number[] => {
    return arr.slice(-3);    
}

console.log(getLastElements([1,2,3,4])); // [2, 3, 4]
console.log(getLastElements([5,4,3,2,1,0])); // [2, 1, 0]
console.log(getLastElements([99,1,1])); // [99, 1, 1]


/**
 * Task 27
 * 
 * Write a function that takes an array (a) as argument
 * Extract the first 3 elements of a
 * Return the resulting array
 */

const firstThreeElements = (arr: number[]): number[] => {
    let threeElements = arr.slice(0, 3);
    return threeElements;
}

console.log(firstThreeElements([1,2,3,4])); // [1, 2, 3]
console.log(firstThreeElements([5,4,3,2,1,0])); // [5, 4, 3]
console.log(firstThreeElements([99,1,1])); // [99,1,1]


/**
 * Task 28
 * 
 * Write a function that takes an array (a) and a number (n) as arguments
 * It should return the last n elements of a
 */

const lastElements = (arr: number[], num: number): number[] => {
    return arr.slice(-num);
}

console.log(lastElements([1, 2, 3, 4, 5], 2)); // [4, 5]
console.log(lastElements([1, 2, 3], 6)); // [1, 2, 3]
console.log(lastElements([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [6, 7, 8]


/**
 * Task 29 
 * 
 * Write a function that takes an array (a) and a value (b) as argument
 * The function should clean a from all occurrences of b
 * Return the filtered array
 */

const cleanedArray = (arr: any[], val: any): number[] | string[] => {
    let filteredArray = arr.filter(function(value, index, arr){
        return value !== val;
    });
    return filteredArray;
}

console.log(cleanedArray([1,2,3], 2)); // [1, 3]
console.log(cleanedArray([1,2,'2'], '2')); // [1, 2]
console.log(cleanedArray([false,'2',1], false)); // ['2', 1]
console.log(cleanedArray([1,2,'2',1], 1)); // [2, '2']


/**
 * Task 30
 * 
 * Write a function that takes an array (a) as argument
 * Return the number of elements in a
 */

const getElNumber = (numArr: number[]): number => {
    let count: number = 0;
    for (let i = 0; i < numArr.length; i ++) {
        count++;
    }
    return count;
}

console.log(getElNumber([1,2,2,4])); // 4
console.log(getElNumber([9,9,9])); // 3
console.log(getElNumber([4,3,2,1,0])); // 5


/**
 * Task 31 
 * 
 * Write a function that takes an array of numbers as argument
 * Return the number of negative values in the array
 */

const getNegatives = (arr: number[]): number => {
    let count = 0;
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] < 0) {
            count++;
        }
    }
    return count;
}

console.log(getNegatives([1,-2,2,-4])); // 2
console.log(getNegatives([0,9,1])); // 0
console.log(getNegatives([4,-3,2,1,0])); // 1


/**
 * Task 32
 * 
 * Write a function that takes an array of numbers as argument
 * It should return an array with the numbers sorted in descending order
 */

const sortedArray = (arr: number[]): number[] => {
    return arr.sort((a, b) => b - a);
}

console.log(sortedArray([1,3,2])); // [3,2,1]
console.log(sortedArray([4,2,3,1])); // [4,3,2,1]


/**
 * Task 33
 * 
 * Write a function that takes an array of strings as argument
 * Sort the array elements alphabetically
 * Return the result
 */

const sortedAlphabetArr = (arr: string[]): string[] => {
    return arr.sort();
}

console.log(sortedAlphabetArr(['b', 'c', 'd', 'a'])); // ['a', 'b', 'c', 'd']
console.log(sortedAlphabetArr(['z', 'c', 'd', 'a', 'y', 'a', 'w'])); // ['a', 'a', 'c', 'd', 'w', 'y', 'z']


/**
 * Task 34 
 * 
 * Write a function that takes an array of numbers as argument
 * It should return the average of the numbers
 */

const getAverageNum = (arr: number[]): number => {
    let sum = arr.reduce(function(x, z) {
        return (x + z);
    });
    return sum / arr.length;
}

console.log(getAverageNum([10,100,40])); // 50
console.log(getAverageNum([10,100,1000])); // 370
console.log(getAverageNum([-50,0,50,200])); // 50


/**
 * Task 35 
 * 
 * Write a function that takes an array of strings as argument
 * Return the longest string
 */

const getLongestString = (arr: string[]): string => {
    let longest = arr.sort(function(a, b) {
        return b.length - a.length;
    }) [0];
    return longest;
}

console.log(getLongestString(['help', 'me'])); // 'help'
console.log(getLongestString(['I', 'need', 'candy'])); // 'candy'


/**
 * Task 36
 * 
 * Write a function that takes an array as argument
 * It should return true if all elements in the array are equal
 * It should return false otherwise
 */

const areEqualElements = (arr: any[]): boolean => {
    const result = arr.every(element => {
        if (element === arr[0]) {
            return true;
        }
    });
    return result;
}

console.log(areEqualElements([true, true, true, true])); // true
console.log(areEqualElements(['test', 'test', 'test'])); // true
console.log(areEqualElements([1,1,1,2])); // false
console.log(areEqualElements(['10',10,10,10])); // false

/**
 * Task 37
 * 
 * Write a function that takes arguments an arbitrary number of arrays
 * It should return an array containing the values of all arrays
 */

const combinedArray = (...arrays: any[]) => {
    let combined: any[] = [];
    arrays.forEach(array => {
        combined = combined.concat(array);
    })
    return combined;
}

console.log(combinedArray([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(combinedArray(['a', 'b', 'c'], [4, 5, 6])); // ['a', 'b', 'c', 4, 5, 6]
console.log(combinedArray([true, true], [1, 2], ['a', 'b'])); // [true, true, 1, 2, 'a', 'b']


/**
 * Task 38 ???????
 * 
 * Write a function that takes an array of objects as argument
 * Sort the array by property b in ascending order
 * Return the sorted array
 */

const sortedObjArray = (objArr: {a: number, b: number}[]) => {
    let sortedArr = objArr.sort(function(a, b) {
        return +b - +a;
    }) 
    return sortedArr;
}

console.log(sortedObjArray([{a:1,b:2},{a:5,b:4}])); // [{a:1,b:2},{a:5,b:4}]
console.log(sortedObjArray([{a:2,b:10},{a:5,b:4}])); // [{a:5,b:4},{a:2,b:10}]
console.log(sortedObjArray([{a:1,b:7},{a:2,b:1}])); // [{a:2,b:1},{a:1,b:7}]


/**
 * Task 39
 * 
 * Write a function that takes two arrays as arguments
 * Merge both arrays and remove duplicate values
 * Sort the merge result in ascending order
 * Return the resulting array
 */

const mergedArrays = (arr1: number[], arr2: number[]): number[] => {
    let mergedArr = arr1.concat(arr2);
    let uniqueArr: number[] = [];
    mergedArr.forEach(element => {
        if (!uniqueArr.includes(element)) {
            uniqueArr.push(element)
        }
    });
    uniqueArr.sort(function(a, b) {
        return a - b;
    });
    return uniqueArr;
}

console.log(mergedArrays([1, 2, 3], [3, 4, 5])); // [ 1, 2, 3, 4, 5 ]
console.log(mergedArrays([-10, 22, 333, 42], [-11, 5, 22, 41, 42])); // [ -11, -10, 5, 22, 41,  42, 333]


/**
 * Task 40
 * 
 * Write a function that takes an array (a) and a number (b) as arguments
 * Sum up all array elements with a value greater than b
 * Return the sum 
 */

const elementSum = (arr: number[], num: number): number => {
    let sum = 0;
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] > num) {
            sum += arr[i];
        }
    }
    return sum;
}

console.log(elementSum([1, 2, 3, 4, 5, 6, 7], 2)); // 25
console.log(elementSum([-10, -11, -3, 1, -4], -3)); // 1
console.log(elementSum([78, 99, 100, 101, 401], 99)); // 602


/**
 * Task 41 
 * 
 * Write a function that takes two numbers (min and max) as arguments
 * Return an array of numbers in the range min to max
 */

const getRangeArray = (minNum: number, maxNum: number): number[] => {
    let range = [...Array(maxNum - minNum + 1).keys()].map(x => x + minNum);
    return range;
}

console.log(getRangeArray(2, 10)); // [2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(getRangeArray(1, 3)); // [1, 2, 3]
console.log(getRangeArray(-5, 5)); // [-5, -4, -3, -2, -1, 0,  1,  2,  3,  4, 5]
console.log(getRangeArray(2, 7)); // [2, 3, 4, 5, 6, 7]


/**
 * Task 42 
 * 
 * Write a function that takes an array of strings as argument
 * Group those strings by their first letter
 * Return an object that contains properties with keys representing first letters
 * The values should be arrays of strings containing only the corresponding strings
 * For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
 * { a: ['Alf', 'Alice'], b: ['Ben']}
 */

const getSortedArrays = (array: string[]) => {
    let sortedObj: {[key: string]: string[]} = {};
    for (let i = 0; i < array.length; i++) {
        let currentWord = array[i];
        let char: string = currentWord[0].toLowerCase();
        let groupArray = [];
        if (sortedObj[char] === undefined) {
            groupArray.push(currentWord);
           sortedObj[char] = groupArray
         }else {
           sortedObj[char].push(currentWord)
         }
       }
       return sortedObj;
    }


console.log(getSortedArrays(['Alf', 'Alice', 'Ben'])); // { a: ['Alf', 'Alice'], b: ['Ben']}
console.log(getSortedArrays(['Ant', 'Bear', 'Bird'])); // { a: ['Ant'], b: ['Bear', 'Bird']}
console.log(getSortedArrays(['Berlin', 'Paris', 'Prague'])); // { b: ['Berlin'], p: ['Paris', 'Prague']}


/**
* Task 43 
* 
* Write a function that takes an array with arbitrary elements and a number as arguments
* Return a new array, the first element should be either the given number itself
* or zero if the number is smaller than 6
* The other elements should be the elements of the original array
* Try not to mutate the original array
*/

const mixedArray = (arr: any[], num: number): any[] => {
    if (num >= 6) {
        arr.unshift(num);
    } else {
        arr.unshift(0);
    }
    return arr;
}

console.log(mixedArray([1,2,3], 6)); // [6,1,2,3]
console.log(mixedArray(['a','b'], 2)); // [0,'a','b']
console.log(mixedArray([null,false], 11)); // [11,null,false]


/**
 * Task 44
 * 
 * Write a function that takes an array (a) and a value (n) as arguments
 * Save every nth element in a new array
 * Return the new array
 */

 const getNewArray = (arr: number[], value: number): number[] => {
    let newArray = [];
    for (let i = value; i <= arr.length; i += value) {
        newArray.push(arr[i-1]);
    }
    return newArray;
}

console.log(getNewArray([1,2,3,4,5,6,7,8,9,10],3)); // [3, 6, 9]
console.log(getNewArray([10,9,8,7,6,5,4,3,2,1],5)); // [6, 1]
console.log(getNewArray([7,2,1,6,3,4,5,8,9,10],2)); // [2, 6, 4, 8, 10]


/**
 * Task 45
 * 
 * Write a function that takes an object with two properties as argument
 * It should return the value of the property with key country
 */

const getCountryValue = (obj: {continent: string, country: string}): string => {
    return obj.country;
}

console.log(getCountryValue({  continent: 'Asia',  country: 'Japan'}) ); // 'Japan'
console.log(getCountryValue({  country: 'Sweden',  continent: 'Europe'}) ); // 'Sweden'


/**
 * Task 46
 * 
 * Write a function that takes an object with two properties as argument
 * It should return the value of the property with key 'prop-2'
 * Tip: you might want to use the square brackets property accessor
 */
interface props {
    [key: string]: string | number;
}

const getPropValue = ( obj: props): number | string => {
    return obj["prop-2"];
}

console.log(getPropValue({ one: 1, 'prop-2': 2}) ); // 2
console.log(getPropValue({  'prop-2': 'two',  prop: 'test'}) ); // 'two'


/**
 * Task 47 
 * 
 * Write a function that takes an object with two properties and a string as arguments
 * It should return the value of the property with key equal to the value of the string
 */

const getKeyValue = (obj: {[key: string]: string }, value: string): string => {
    return obj[value];
}

console.log(getKeyValue({  continent: 'Asia',  country: 'Japan'}, 'continent') ); // 'Asia'
console.log(getKeyValue({  country: 'Sweden',  continent: 'Europe'}, 'country') ); // 'Sweden'


/**
 * Task 48
 * 
 * Write a function that takes an object (a) and a string (b) as argument
 * Return true if a has a property with key b
 * Return false otherwise
 */

 interface objValue {
    [key: string]: string | number;
}

const checkProperty = (obj: objValue, str: string): boolean => {
    return obj.hasOwnProperty(str);
}

console.log(checkProperty({a:1,b:2,c:3},'b')); // true
console.log(checkProperty({x:'a',y:'b',z:'c'},'a')); // false
console.log(checkProperty({x:'a',y:'b',z:'c'},'z')); // true


/**
 * Task 49
 * 
 * Write a function that a string (a) as argument
 * Create an object that has a property with key 'key' and a value of a
 * Return the object
 */

const createObj = (str: string): {key: string} => {
    let obj = {
        key: str
    }
    return obj;
}

console.log(createObj('a')); // {key:'a'}
console.log(createObj('z')); // {key:'z'}
console.log(createObj('b')); // {key:'b'}


/**
 * Task 50
 * 
 * Write a function that takes two strings (a and b) as arguments
 * Create an object that has a property with key 'a' and a value of 'b'
 * Return the object
 */

const createObj2 = (str1: string, str2: string): {[key: string]: string} => {
    let obj = {
        [str1]: str2
    };
    return obj;
}

console.log(createObj2('a','b')); // {a:'b'}
console.log(createObj2('z','x')); // {z:'x'}
console.log(createObj2('b','w')); // {b:'w'}


/**
 * Task 51
 * 
 * Write a function that takes two arrays (a and b) as arguments
 * Create an object that has properties with keys 'a' and corresponding values 'b'
 * Return the object
 */

const createObj3 = (arr1: any[], arr2: any[]): {[key: string | number]: string | number} => {
    let obj3: {[key: string | number]: string | number} = {};
    arr1.forEach((key, index) => obj3[key] = arr2[index]);
    return obj3;
}

console.log(createObj3(['a','b','c'],[1,2,3])); //{a:1,b:2,c:3}
console.log(createObj3(['w','x','y','z'],[10,9,5,2])); // {w:10,x:9,y:5,z:2}
console.log(createObj3([1,'b'],['a',2])); // {1:'a',b:2}


/**
 * Task 52
 * 
 * Write a function that takes an object (a) as argument
 * Return an array with all object keys
 */

const objKeyArray = (obj: {[key: string]: string | number} ): string[] => {
    return Object.keys(obj);
}

console.log(objKeyArray({a:1,b:2,c:3})); // ['a','b','c']
console.log(objKeyArray({j:9,i:2,x:3,z:4})); // ['j','i','x','z']
console.log(objKeyArray({w:15,x:22,y:13})); // ['w','x','y']


/**
 * Task 53
 * 
 * Write a function that takes an object (a) as argument
 * Return the sum of all object values
 */

const addObjValues = (obj: {[key: string]: number}): number => {
    let numberValues = Object.values(obj);
    let total = numberValues.reduce(function(a, b) {
        return a + b;
    });
    return total;
}

console.log(addObjValues({a:1,b:2,c:3})); // 6
console.log(addObjValues(({j:9,i:2,x:3,z:4}))); // 18
console.log(addObjValues({w:15,x:22,y:13})); // 50


/**
 * Task 54
 * 
 * Write a function that takes an object as argument
 * It should return an object with all original object properties
 * except for the property with key 'b'
 */

const removedPropObject = (obj: {[key: string]: number}): {[key: string]: number} => {
    delete obj.b;
    return obj;
}

console.log(removedPropObject({ a: 1, b: 7, c: 3 })); // { a: 1, c: 3 }
console.log(removedPropObject({ b: 0, a: 7, d: 8 })); // { a: 7, d: 8 }
console.log(removedPropObject({ e: 6, f: 4, b: 5, a: 3 })); // { e: 6, f: 4, a: 3 }


/**
 * Task 55
 * 
 * Write a function that takes two objects as arguments
 * Unfortunately, the property 'b' in the second object has the wrong key
 * should be named 'd' instead
 * Merge both objects and correct the wrong property name
 * Return the resulting object
 * It should have the properties 'a', 'b', 'c', 'd', and 'e'
 */

const correctedObject = (obj1: {[key: string]: number}, obj2: {[key: string]: number}): {[key: string]: number} => {
    obj2.d = obj2.b;
    delete obj2.b;
    let mergedObject = {
        ...obj1,
        ...obj2
    }
    return mergedObject;
} 

console.log(correctedObject({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })); // { a: 1, b: 2, c: 3, e: 5, d: 4}
console.log(correctedObject({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })); // { a: 5, b: 4, c: 3, e: 2, d: 1}


/**
 * Task 56
 * 
 * Write a function that takes an object (a) and a number (b) as arguments
 * Multiply all values of 'a' by 'b'
 * Return the resulting object
 */

const multipliedObject = (obj: {[key: string]: number}, num: number): {[key: string]: number} => {
    let multipliedValues: {[key: string]: number} = {};
    for (let value in obj) {
        multipliedValues[value] = obj[value] * num;
    }
    return multipliedValues;
}

console.log(multipliedObject({a:1,b:2,c:3},3)); // {a:3,b:6,c:9}
console.log(multipliedObject({j:9,i:2,x:3,z:4},10)); // {j:90,i:20,x:30,z:40}
console.log(multipliedObject({w:15,x:22,y:13},6)); // {w:90,x:132,y:78}


/**
 * Task 57
 * 
 * Write a function that takes an object as argument
 * Somehow, the properties and keys of the object got mixed up
 * Swap the Javascript object's key with its values and return the resulting object
 */

const swapObject = (obj: {[key: string | number]: string | number} ): {[key: string | number]: string | number} => {
    let swappedProps: {[key: string | number]: string | number} = {};
    for (let key in obj) {
        swappedProps[obj[key]] = key;
    }
    return swappedProps;
}

console.log(swapObject({z:'a',y:'b',x:'c',w:'d'})); // {a:'z',b:'y',c:'x',d:'w'}
console.log(swapObject({2:'a',4:'b',6:'c',8:'d'})); // {a:'2',b:'4',c:'6',d:'8'}
console.log(swapObject({a:1,z:24})); // {1:'a',24:'z'}


/**
 * Task 58
 * 
 * Write a function that takes an object as argument
 * Some of the property values contain empty strings
 * Replace empty strings and strings that contain only whitespace with null values
 * Return the resulting object
 */

const getNullPropObject = (obj: {[key: string]: any}) => {
    Object.keys(obj).forEach(function(key) {
        if (obj[key] == ' ' || obj[key] == '') {
            obj[key] = null;
        }
    })
    return obj;
}


console.log(getNullPropObject({ a: 'a', b: 'b', c: '' })); // { a: 'a', b: 'b', c: null }
console.log(getNullPropObject({ a: '', b: 'b', c: ' ', d: 'd' })); // { a: null, b: 'b', c: null, d: 'd' }
console.log(getNullPropObject({ a: 'a', b: 'b ', c: ' ', d: '' })); // { a: 'a', b: 'b ', c: null, d: null }


/**
 * Task 59
 * 
 * Write a function that takes an object as argument containing properties with personal information
 * Extract firstName, lastName, size, and weight if available
 * If size or weight is given transform the value to a string
 * Attach the unit cm to the size
 * Attach the unit kg to the weight
 * Return a new object with all available properties that we are interested in
 */

type ObjType = {
    fn: string,
    In: string,
    age: number,
    size: number,
    weight: number
}

const changePersonalInfo = (obj: ObjType | any) => {
    let filteredObj: {[key: string]: string | number} = ['fn', 'ln', 'size', 'weight'].reduce((result: any, key: string | number) => { result[key] = obj[key]; return result; }, {});
    let converted = Object.fromEntries(Object.entries(filteredObj).map(([key, value]) => [key, value + ""]));
    converted.size +="cm";
    converted.weight += "kg";
    return converted;
}


console.log(changePersonalInfo({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67})); 
// {fn: 'Lisa', ln: 'Müller', size: '175cm', weight: '67kg'}
console.log(changePersonalInfo({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102})); 
// {fn: 'Martin', ln: 'Harper', weight: '102kg'}
console.log(changePersonalInfo({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71}));
// {fn: 'Andrew', ln: 'Harper', size: '175cm', weight: '71kg'}
console.log(changePersonalInfo({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'})); 
// {fn: 'Matthew', ln: 'Müller'};

/**
 * Task 60
 * 
 * Write a function that takes an array of objects and a string as arguments
 * Add a property with key 'continent' and value equal to the string to each of the objects
 * Return the new array of objects
 * Tip: try not to mutate the original array
 */

const addContinent = (arr: {[key: string]: string}[], value: string): {[key: string]: string}[] => {
    let newContinentArr = arr.map(obj => ({...obj, 'continent': value}));
    return newContinentArr;
}

console.log(addContinent([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia')); 
// [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]
console.log(addContinent([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe'));
// [{ city: 'Stockholm', country: 'Sweden', continent: 'Europe' }, { city: 'Paris', country: 'France', continent: 'Europe' }]


/**
 * Task 61
 * 
 * Write a function that takes an array of numbers as argument
 * Convert the array to an object
 * It should have a key for each unique value of the array
 * The corresponding object value should be the number of times the key occurs within the array
 */

const numberValueObj = (array: number[]): {[key: number]: number} => {
    let count: {[key: number]: number} = {};
    for (let num of array) {
        count[num] = count[num] ? count[num] + 1 : 1;
    }
    return count;
}

console.log(numberValueObj([1,2,2,3])); // {1:1,2:2,3:1}
console.log(numberValueObj([9,9,9,99])); // {9:3,99:1}
console.log(numberValueObj([4,3,2,1])); // {1:1,2:1,3:1,4:1}


/**
 * Task 62
 * 
 * Write a function that takes two date instances as arguments
 * It should return true if the dates are equal
 * It should return false otherwise
 */

const equalDates = (date1: Date, date2: Date): boolean => {
    return date1.getTime() === date2.getTime();
}

console.log(equalDates(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))); // false
console.log(equalDates(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))); // true
console.log(equalDates(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))); // false


/**
 * Task 63
 * 
 * Write a function that takes two date instances as argument
 * It should return the number of days that lies between those dates
 */

const dayRange = (date1: Date, date2: Date): number => {
    let days = (+date2 - +date1) / (1000 * 60 * 60 * 24);
    return days;
}

console.log(dayRange(new Date('2020-06-11'), new Date('2020-06-01'))); // 10
console.log(dayRange(new Date('2000-01-01'), new Date('2020-06-01'))); // 7457


/**
 * Task 64
 * 
 * Write a function that takes two date instances as argument
 * It should return true if they fall on the exact same day
 * It should return false otherwise
 */

const equalDays = (date1: Date, date2: Date): boolean => {
    return date1.getTime() === date2.getTime();
}

console.log(equalDays(new Date('2000/01/01'), new Date('2000/01/01'))); // true
console.log(equalDays(new Date('2000/01/01'), new Date('2000/01/02'))); // false
console.log(equalDays(new Date('2001/01/01'), new Date('2000/01/01'))); // false
console.log(equalDays(new Date('2000/11/01'), new Date('2000/01/01'))); // false


/**
 * Task 65
 * 
 * Write a function that takes two number arrays as parameters 
 * and return an array which contains elements from both 
 * arrays
 */

const mergedArray = (arr1: number[], arr2: number[]): number[] => {
    return [...arr1, ...arr2];
}

console.log(mergedArray([1, 2], [3, 4]) ); // [1, 2, 3, 4]
console.log(mergedArray([1, 2], [3, 4, 5, 6]) ); // [1, 2, 3, 4, 5, 6]


/**
 * Task 66
 * 
 * Write a function that takes an array and a string as parameters 
 * and return an array which contains all elements from the given array
 * and the given string as the last element
 */

const addLastElement = (arr: string[], element: string): string[] => {
    let longerArray = [...arr, element];
    return longerArray;
}

console.log(addLastElement(['Apple', 'Orange', 'Banana'], 'Kiwi') ); // ['Apple', 'Orange', 'Banana', 'Kiwi']


/**
 * Task 67
 * 
 * Write a function that takes an array and a string as parameters 
 * and return an array which contains all elements from the given array
 * and the given string as the first element
 */

const addFirstElement = (arr: string[], element: string): string[] => {
    let longerArr = [element, ...arr];
    return longerArr;
}

console.log(addFirstElement(['Apple', 'Orange', 'Banana'], 'Kiwi') ); // ['Kiwi', 'Apple', 'Orange', 'Banana']


/**
 * Task 68
 * 
 * Write a function that takes two objects as parameters 
 * and return an object which contains properties from both 
 * objects
 */

const mergedObjects = (obj1: {[key: string]: number}, obj2: {[key: string]: number}): {[key: string]: number} => {
    let merged = {...obj1, ...obj2};
    return merged;
}

console.log(mergedObjects({ a:1, b:2 }, { c:3, d:4 }) ); // { a:1, b:2, c:3, d:4 }
console.log(mergedObjects({ a:1, b:2 }, { c:3, d:4, e:5, f:6 }) ); // { a:1, b:2, c:3, d:4, e:5, f:6 } 


/**
 * Task 69
 * 
 * Write a function that takes an object and a string as parameters 
 * and return an object which contains properties from the given object
 * and a new property favoriteMovie with the value equal to the given string
 */

const modifiedObject = (obj: {[key: string]: string | number}, str: string): {[key: string]: string | number} => {
    let modified = {...obj, favoriteMovie: str};
    return modified;
}

console.log(modifiedObject({ eyeColor: 'green', age: 10 }, 'Garfield') ); // { eyeColor: 'green', age: 10, favoriteMovie:  'Garfield' }
console.log(modifiedObject({ eyeColor: 'blue', age: 15 }, 'Twilight') ); // { eyeColor: 'blue', age: 15, favoriteMovie:  'Twilight' }