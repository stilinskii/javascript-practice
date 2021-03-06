'use strict';

/* Array π

1. Declaration */
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index postion 
const fruits = ['π','π'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]); // λ§μ§λ§ μΈλ±μ€

//3. Looping over an array
//print all fruits

// a. for
for ( let i = 0 ; i < fruits.length ; i++ ) {
    console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits) {
    console.log(fruit);
}

// c. forEach (api)
fruits.forEach(function(fruit, index, array) {
    console.log(fruit, index, array);
})

fruits.forEach((fruit) => console.log(fruit)); //arrow


//4. Addtion, deletion, copy
//add an item to the end
fruits.push('π', 'π');
console.log(fruits);

//pop: remove an item from the end
fruits.pop();
console.log(fruits);


//unshift : add an item to the beginning
fruits.unshift('π', 'π');
console.log(fruits);

//shift: remove an item from the beginning
fruits.shift();
fruits.shift();
fruits.shift();
console.log(fruits);


//note!! shift, unshift are slower than pop, push μ μ²΄μ μΈ λ°μ΄ν°κ° μμ§μ¬μΌν¨
//splice : remove an item by index postion
fruits.push('π', 'π', 'π');
console.log(fruits);
fruits.splice(1, 1, 'π'); // index νλλ§ μ°λ©΄ κ·Έ μΈλ±μ€λΆν° λ€κΉμ§ μ λΆ μ­μ 
// fruits.splice(1, 0, 'π'); μ­μ  μνκ³  λ£κΈ°λ§λ κ°λ₯
console.log(fruits);

//cimbine two arryas
const fruits2 = ['π','π₯'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('π'));
console.log(fruits.indexOf('π₯')); // -1

// includes
console.log(fruits.includes('π'));
console.log(fruits.includes('π₯'));

//lastIndexOf  κ°μ λ°μ΄ν°κ° μμ λ
fruits.push('π');
console.log(fruits);
console.log(fruits.indexOf('π'));
console.log(fruits.lastIndexOf('π'));


