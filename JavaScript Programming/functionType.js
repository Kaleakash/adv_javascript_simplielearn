// //alert("Welcome to external js")
// // normal style function declaration 
// display1();
// function display1() {
//     document.write("this is normal function")
// }
// display1();

// function add(a,b){
//     var sum = a+b;
//     document.write("<br/>");
//     document.write(a+" "+b)
//    // document.write("<br/>Sum of two number is "+sum)
// }
// //add(10,20);
// //add("A","B");
// //add(1);
// //add();
// // expression style funtion 
// // when we store function body in variable then variable name itself consider as function name
// var display3 = function display2() {
//                 document.write("This is display2 function in expression style")     
//                 }
// display3();

// //display4();
// var display4 = function() {
//     document.write("<br/>This is display4 function in expression style")     
//     }
// display4();


// // arrow function : arrow function created base upon expression style function 
// // in arrow function function keyword replace by arrow and if we write one statement curly braces not 
// // required. 
// var display5 = ()=>document.write("<br/> This is arrow function");
// display5();

// var addNumber1= function(a,b){
//     var sum = a+b;
//     return sum;
// }
// document.write("<br>Expression style addition of two number "+addNumber1(10,20));
// // in arrow function it return result without return keyword.
// var addNumber2 = (a,b)=>a+b;
// document.write("<br>Expression style addition of two number "+addNumber2(10,20));

// var largestNumber1 = function(a,b){
//     if(a>b){
//         return "a is largest"
//     }else {
//         return "b is largest"
//     }
// }
// document.write("<br>Expression style largest of two number "+largestNumber1(10,20));
// // in arrow if we need to write more than one statement then we have to use curly braces 
// // and we need to use return keyword to return the value. 
// var largestNumber2 = (a,b)=>{
//     if(a>b){
//         return "a is largest"
//     }else {
//         return "b is largest"
//     }
// }
// document.write("<br>Expression arrow largest of two number "+largestNumber2(10,20));


// //callback : passing the function name or function body or function itself to another function as 
// // a parameter is known as callback. 
// // callback can be synchronouse as well as asynchronous 
// function greeting(fname,callback){
//     return "Welcome "+callback(fname);
// }
// let maleInfo = function(fname){
//     return "Mr  "+fname;
// }
// let femaleInfo = (fname)=>"Miss "+fname;
//         document.write("<br/> "+greeting("Raj",maleInfo));
//     document.write("<br/> "+greeting("Seeta",femaleInfo));
// document.write("<br/> "+greeting("Ravi",function(fname){
//     return "Mr  "+fname;
// }));
// document.write("<br/> "+greeting("Seeta",(fname)=>"Miss "+fname));

// //IIFE : Immediate Invoke function expression : this funtion 
// // syntax (body)(callling)
// document.write("<br/>");

// (function(){
//     document.write("Expression style IIFE function<br/>")
// })();

// document.write("<br/>");

// ((a,b)=>document.write("Sum of two number is in IIFE style "+(a+b)))(10,20);



// function Outer() {
//     var a =10;
    
//     function inner() {
//         return a++;
//     }

//     return inner;
// }
// //document.write(Outer())

// var obj1 = Outer();      // outer function execution done 
//     var obj2 = Outer();
// var obj3 = Outer();

// document.write(obj1())
// document.write(obj1())
//     document.write(obj2())
//     document.write(obj2())
//fourth parameter takes array of skill


// function empInfo(id,name,salary,skillSet){
//     document.write("<br/>id is "+id)
//     document.write("<br/>name is "+name)
//     document.write("<br/>salary is "+salary)
//      document.write("<br/>number of skillset is "+skillSet.length)
// }
// var skill1=["C","C++","Java"]
// var skill2=[];
// empInfo(100,"Ravi",12000,skill1);
// empInfo(101,"Ajay",14000,skill2);
// empInfo(101,"Ajay",14000,"Java");
// empInfo(102,"Mahesh",18000);
// rest parameter is use to take zero or 1 or many parameter values. 
// to declare the rest parameter we need to use ...variableName
// rest parameter must be last parameter inside function and we can use 
// only one rest parametre in one function 
function empInfo(id,name,salary,...skillSet){       // rest operator 
    document.write("<br/>id is "+id)
    document.write("<br/>name is "+name)
    document.write("<br/>salary is "+salary)
    document.write("<br/>number of skillset is "+skillSet.length)
}
var skill1=["C","C++","Java"]
// var skill2=[];
empInfo(100,"Ravi",12000,"C");          //1
empInfo(101,"Ajay",14000,"C","Java","Python");      // many
empInfo(102,"Vijay",16000);         // zero 
empInfo(103,"Mahesh",15000,skill1)
    empInfo(103,"Mahesh",15000,skill1[0],skill1[1],skill1[2])
empInfo(103,"Mahesh",15000,...skill1);          // spread operator 
// if we want to pass array value to rest parameter we can use spread operator. 























