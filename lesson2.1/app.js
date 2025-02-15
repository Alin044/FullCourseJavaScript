setTimeout(() => {
    console.log("Hello");
    setTimeout(() => {
        console.log("hey");
        setTimeout(() => {
            console.log("Nameste");
            setTimeout(() => {
                console.log("Hi");
                setTimeout(() => 
                console.log("Bonjour"), 2000);
            }, 2000);
        }, 2000);
    }, 2000);
}, 2000);

function user(name, age, work){
    return {
        name: name,
        age: age, 
        work: work,
        intro: function(){
            console.log(`Hello, I am ${name} and I am ${age}`);
            console.log(`I am a ${work}`);
        }
    };
};

// function user(name, age, work){
//     return {
//         name,
//         age, 
//         work
//     };
// };
//this method will still work the same



const user1 = user("John", 24, "Programmer");
user1.intro();
console.log(user1);


//The spread operators

function giveMe4(a, b, c, d){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}

const color = ["red", "green", "blue", "black"];

giveMe4(...color) // this is the spread operator


const strNums = ['one', 'two', 'tree'];
const moreNum = ['four', 'five', 'six'];
const concat = [...strNums, ... moreNum];

console.log(concat);

//how to spread the objects

const obj1 = {x: 1, y: 2};
const obj2 = {z: 3};

const obj3 = {...obj1, ...obj2}; //we use the spread operator
console.log(obj3);


const foo = ["one", "two", "three"];
const [one, two, three] = foo;
console.log(one);
console.log(two);
console.log(three);

const [a, ...b] = ["one", "two", "three"];
console.log(b);


const person = {
    name: "John",
    age: 25,
    country: "Moldova",
};

function printPersonInfo({name, age, country}){
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Country: ${country}`);
}

printPersonInfo(person);


//Destructuring a object 
let options = {
    title: "My menu",
    itmes: ["item1", "item2"]
};

function showMenu(
    {
        title = "Untitled",
        width: w = 100,
        height: h = 200,
        items: [item1, item2],
    }
){
    console.log(`${title} ${w} ${h}`);
    console.log(item1);
    console.log(item2);
}

showMenu(options);


//Destructuring inside destructuring

const songs = [
    {name: "Lucky You", singer: "Jonyer", duration: 4.34},
    {name: "Just like you", singer: "NF", duration: 3.23},
    {name: "Humble singer", singer: "Kendrik Lamar", duration: 2.23},
    {name: "Old town road", singer: "Lil Nas X", duration: 1.43},
    {name: "Cold shower", singer: "Central Cee", duration: 5.23},
];

const [, , {singer : s}] = songs;
console.log(s); 