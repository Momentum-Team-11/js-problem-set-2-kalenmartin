// 1. Create a function called "remove" that takes an array and a potential
// member of the array, and returns a new array with that member removed.
// For example, `remove(['Cadence', 'Ordel', 'Marion'], 'Marion')` results
// in `['Cadence', 'Ordel']`.

// If the potential member is not in the array, return the array unchanged.
// If the potential member is in the array, remove all instances of it from the array.

function remove(array, memberInArray) {
    //let students = ['Cadence', 'Ordel', 'Marion']
    let keepArray = []
    for (let index = 0; index < array.length; index++) {
        if (array[index] !== memberInArray) {
            // add it to the new array
            keepArray.push(array[index])
        }
    }
    return keepArray
}


// 2. Revisit your "remove" function. Make sure that it does not change the original
// array but instead returns a new array.
function remove (students, name) {
    let newArray = []
    for (let student of students){
        if (student != name) {
            newArray.push(student)
        }
    }
    return newArray
}

// 3. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.

function sum(Octobers) {
    let total = 0
    for (let October of Octobers) {
        total += October
    }
    return total 
}

// 4. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.

function average(number){
    if (number.length > 0) {
        return sum(number) / number.length
    }
}

// 5. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.

function minimun(numbers) {
    if (numbers.length > 0) {
        return numbers.reduce((min,currentNum) =>
        currentNum < min ? currentNum : min
        )
    }
}

// 6. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.

// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.

function selectionSort(array) {
    var arrayCopy = array.slice(0);
    for (let index = 0; index < arrayCopy.length - 1; index++) {


    let minIndex = index;
    for (let j = index + 1; j < arrayCopy.length; j++) {
        if (arrayCopy[j] < arrayCopy[minIndex]) {
            minIndex = j;
        }
    }
    [array[i], arrayCopy[minIndex]] = [arrayCopy[minIndex]], array [i];
    }
    return array;
    }

// 7. Create a function called `textList` that takes an array and joins its elements
// into a string separated by commas.


// For example, `textList(['Cadence', 'Ordel', 'Marion'])` results in the string
// `"Cadence,Ordel,Marion"`.
