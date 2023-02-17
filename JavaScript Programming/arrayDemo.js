var num1 = [];          // literal style array object creation 
let num2  = new Array();    // object creation using new word 
document.write("<br/> Size of array is "+num1.length)

var num3 = [10,20,30,35,,45,40,50,60,11,12,];
document.write("<br/> Size of array is "+num3.length)
document.write("<br/> all array element "+num3);        // display the output in string format 
document.write("<br/> all array element "+num3.join("-"));        // display the output in string format 

for(i=0;i<num3.length;i++){
    document.write("<br/> "+num3[i]);
}
document.write("<br> Retrieve all element one by one using forEach function")
num3.forEach(display)

function display(v,i){
    document.write("<br> Value is "+v+"index "+i);
}

document.write("<br> Retrieve all element one by one using forEach function")
num3.forEach(function(v,i){
    document.write("<br> Value is "+v+"index "+i);
})

num3.forEach(function(v,i){
    document.write("<br> V is "+v+"index "+i);
})

document.write("<br> Retrieve all element one by one using forEach function")
num3.forEach((v,i)=>document.write("<br> Value is "+v+"index "+i));


num3.map(m=>m+100).forEach(v=>document.write("<br/> Value is "+v));

num3.filter(v=>v%2==0).forEach(v=>document.write("<br/> Value is "+v));
document.write("<br/> "+num3);







