// literal style with only property 

// let emp = {id:100,name:"Ravi",age:21};      // object literal 
// document.write("<br/>id is "+emp.id);
// document.write("<br/>name is "+emp.name)
// document.write("<br/>age is "+emp.age)

// literal style with property and behaviour 
let emp = {id:100,name:"Ravi",age:21,dis:function(){
    console.log("id is "+this.id)
    console.log("name is "+this.name)
    console.log("Age is "+this.age);
}};     

document.write("<br/>id is "+emp.id);
document.write("<br/>name is "+emp.name)
document.write("<br/>age is "+emp.age)      // calling every property individually. 
emp.dis();
emp.id=200;
document.write("<br/>id is "+emp.id);
function displayInfo() {
    document.write("<br/>id is "+emp.id);
    document.write("<br/>name is "+emp.name)
    document.write("<br/>age is "+emp.age)
}

//displayInfo();

function storeEmployee() {
    let idValue = document.getElementById("id").value;
    let nameValue = document.getElementById("name").value;
    let ageValue = document.getElementById("age").value;
    let emp1 = {id:idValue,name:nameValue,age:ageValue};
}



