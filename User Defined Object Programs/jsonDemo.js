let emp = {id:100,name:"Ravi",age:21};      // emp is literal style object. 
document.write("Object Literal ")
document.write("<br/> Id is "+emp.id);
document.write("<br/> Name is "+emp.name);
document.write("<br/> Age is "+emp.age);
// converting literal object into string format 
    let empString = JSON.stringify(emp);        // converting json or object into string format 
document.write("<br/>Object Literal ")
document.write("<br/> Id is "+empString.id);
document.write("<br/> Name is "+empString.name);
document.write("<br/> Age is "+empString.age);
// converting string to json format 
    let empJSON = JSON.parse(empString);  // parse method take string fromat information to convert in json 
document.write("<br/>Object Literal ")      // help to convert in JSON
document.write("<br/> Id is "+empJSON.id);
document.write("<br/> Name is "+empJSON.name);
document.write("<br/> Age is "+empJSON.age);
let empString1 = JSON.stringify(empJSON);        // converting json or object into string format 
document.write("<br/>Object Literal ")
document.write("<br/> Id is "+empString1.id);
document.write("<br/> Name is "+empString1.name);
document.write("<br/> Age is "+empString1.age);
