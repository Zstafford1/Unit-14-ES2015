//Quick Question #1
//What does the following code return?

new Set([1,1,2,2,3,4]);

//Set(4) {1, 2, 3, 4}

// Quick Question #2
// What does the following code return?

[...new Set("referee")].join("")

//'ref'

// Quick Questions #3
// What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

//Map(2) {Array(3) => true, Array(3) => false}

let hasDuplicate = array => new Set(arr).size !== arr.length;

// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

const isVowel = char => "aeiou".includes(char);

const vowelCount = str => {
    const vowelMap = new Map();
    for(let char of str){
        let lowerCaseChar = char.toLowerCase()
         if(isVowel(lowerCaseChar)){
             if(vowelMap.has(lowerCaseChar)){
                 vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
             } else {
                 vowelMap.set(lowerCaseChar, 1);
             }
         }
    }
    return vowelMap;
}