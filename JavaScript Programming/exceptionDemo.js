function doTask() {
    // var a=10;
    // var b=0;
    // var result = a/b;           // ArithmeticException generated..in Java 
    // console.log(result);
    // console.log("Hi")
    try{
    var msg="Welcome"
    var a =10;
    var data = "100a";
    console.log(data+200);
    //console.log(eval(data)+200);        // exception generated 
    console.log(a.substring(2,4));
    }catch(error){
        //console.log(error);
        console.log("Error Generated"+error)
        if(error instanceof TypeError){
                console.log("type error generated..")
        }
        if(error instanceof Error) {

        }
    }
    console.log("Hello")
    console.log("Hi")
}

doTask();
