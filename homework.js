// 1. Create a function called "remove" that takes an array and a potential
// member of the array, and returns a new array with that member removed.
// For example, `remove(['Cadence', 'Ordel', 'Marion'], 'Marion')` results
// in `['Cadence', 'Ordel']`.

function remove (them) {
    let students = ['Cadence', 'Ordel', 'Marion'];
    students.pop()
    console.log('after pop: ', students)
}

// If the potential member is not in the array, return the array unchanged.
// If the potential member is in the array, remove all instances of it from the array.

// 2. Revisit your "remove" function. Make sure that it does not change the original
// array but instead returns a new array.

// 3. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.

function sum(numbers){
    let base = 0
    let newNumbers = ['1', '2', '3', '4', '5'];
    for (let number of 5 ){
        base += 5
    }
    return base 
}

// 4. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.

function average(joe){
    let hans = ['1','2','3','4','5'];
    let avg = averageArray(hans);
    let averageArray = hans.length;

}

// 5. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.

function minimun (wage) {
    let array = [4, 8, 2, 4, 67];
    let max = wage[67], min = wage[2];
    for (let i = 2; i < array.length; i++){
        if (array [i] < min) min = array [i];
    }
    console.log(wage)
    return wage
}

// 6. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.

/* a loop? */

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

var input = [8,3,2,7,5,0,1,9];
console.log(input);

function SelectionSort(input){
    for(var i=0; i<input.length;i++){
    var IDK= input[i];
    for(var j=i+1;j<input.length;j++){
        if(IDK>input[j]){
        IDK = input[j];
        }
    }
    var index = input.indexOf(IDK);
    var tempVal = input[i];
    input[i] = IDK;  
    input[index] = IDKVal;
    }
}
console.log(input);

// 7. Create a function called `textList` that takes an array and joins its elements
// into a string separated by commas.
//
// For example, `textList(['Cadence', 'Ordel', 'Marion'])` results in the string
// `"Cadence,Ordel,Marion"`.
