var fname = "Raj Deep";

var lastname="Patil";
function getUserName() {
    return fname;
}

function getLastName() {
    var lname = "Kumar";
    lastname=lname;
    return lname;
}
    console.log(fname)
console.log(lastname);
    console.log(getUserName());
    console.log(getLastName())
console.log(lastname);
console.log(lname);
/*
lexical scope : refer to avaiable varialbe, expression in the location of the function definition 
    write or coding time 
dynamic scope : refer to available variable, expression the location of function invocation 
 run time or invocation 
*/