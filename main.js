console.log("Auf");

const fruits = [
    "apple",
    "pomegrante",
    "mange",
    "strawberry",
    "pineapple",
    "grapefruit"
];

const newFruits = [
    "strawberry",
    "kiwi",
    "blueberry",
    "melon",
    "blueberry",
    "watermelon"
];

const totalFruits = fruits.concat(newFruits);
console.log(totalFruits);


fruits.push("banana");
fruits.pop();
fruits.shift();


console.log(fruits);
fruits.unshift("watermelon");
console.log(fruits);