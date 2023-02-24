// using ES5 style 
var obj1 = new Promise(function(resolve,reject) {
    resolve("This promise resolved");
    //reject("promise rejected")
})

obj1.then(function(data){
    console.log(data)
}).catch(function(error){
    console.log(error)
});

console.log("Normal code")
//using ES6 style 

var obj2 = new Promise((resolve,reject)=> {
    //resolve("This promise resolved");
    reject("promise rejected")
})

obj1.then(data=>console.log(data)
).catch(error=>console.log(error)
);