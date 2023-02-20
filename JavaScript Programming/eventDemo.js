function fun1() {
    //alert("hello")
    // reading the value usig name attribute 
//    var fname= document.getElementsByName("name")[0].value;
//    var lname = document.getElementsByName("name")[1].value
//    alert(fname+" "+lname);

// using id attribute 
var fname= document.getElementById("n1").value;
var lname = document.getElementById("n2").value
//alert(fname+" "+lname);
            document.getElementById("n3").value=fname+" "+lname
    document.getElementsByTagName("div")[0].innerHTML=fname+" "+lname
document.getElementById("n1").value=""
document.getElementById("n2").value=""
var info = document.getElementsByTagName("h1")[0].innerHTML;
var spanData = document.getElementsByTagName("span")[0].innerHTML;
document.getElementsByTagName("span")[0].innerHTML=spanData+" "+fname+" "+lname
alert(info);
}