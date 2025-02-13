const person = {
    name : "John Doe",
    age : 20,
    email : "js@gmail.com",
    isSubscribed : true,
    hobbies : ["Reading", "Running", "Cooking"],
        address : {
        city : "New York",
        idk : true
    }
};

console.log(JSON.stringify(person));
const jsonString = JSON.stringify(person);
const parsedObjj = JSON.parse(jsonString);

console.log(parsedObjj);