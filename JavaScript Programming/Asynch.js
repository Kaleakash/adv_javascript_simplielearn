// function hello() {
//     //document.write("1st statement")
//     setInterval(()=> {
//         document.write("<br/>1st statement")            // again and again   
//     },500);

//     setTimeout(()=> {
//         document.write("<br/>2nd statement")      
//     },3000);
   
//     //document.write("<br/>3rd statement")
//     setTimeout(()=> {
//         document.write("<br/>3rd statement")      
//     },1000);

//     setTimeout(()=> {
//         document.write("<br/>2nd statement")      
//     },3000);

//     setTimeout(doTask,3000);
//     setTimeout(doTask,3000);
// }

// function doTask() {
//         alert("Hello")
// }

var count=0;
var obj;
function stop() {
    clearInterval(obj);
    alert("stop")
}
function hello() {
  
    obj= setInterval(()=> {
            if(count%2==0){
                document.getElementsByTagName("h1")[0].style.background="RED";
                document.getElementsByTagName("h1")[0].style.color="BLUE";
            }else {
                document.getElementsByTagName("h1")[0].style.background="GREEN";
                document.getElementsByTagName("h1")[0].style.color="ORANGE";
            }
            document.getElementById("obj").innerHTML=count;
            count++;
    },1000)
   
}














