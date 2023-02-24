// ES6 style 
// function loadFakeData() {
//     fetch("https://jsonplaceholder.typicode.com/todos").then(response=>response.json()).then(data=>console.log(data)).catch(error=>console.log(error))
// }

// loadFakeData();

async function loadFakeData() {
    try{
    let response = await fetch("https://jsonplaholder.typicode.com/todos");   // replacemenet of then 
    let data = await response.json();               // replacement of then 
    console.log(data);
    }catch(ex){
        console.log(ex);
    }
    console.log("hello")
    console.log("Hello")
}
loadFakeData();
