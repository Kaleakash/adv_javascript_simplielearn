var names;
function store(){
    var name = document.getElementById("n1").value;
    let obj = sessionStorage.getItem("obj");
   
    // names.push(name);
    // alert("name added..")
    
    // //JSON.stringify()        // convet json or object to string 
    // //JSON.parse();       // convert string to json 

    // // if(obj==null){
    // //    names = new Array(); 
    // //     names.push(name);
    // //     sessionStorage.setItem("obj",names);   // before storing array after stored become string 
    // //     alert("stored first time")
    // // }else {
    // //     alert("get it")
    // //     names = sessionStorage.getItem("obj");      // names consider as string so can't use push 
    // //     console.log(names.length);
    // //     //names.push(name);
    // // }
    document.getElementById("n1").value=""
    }