var MySingleTon = (function(){

    var instance;

    function createObject() {
        var obj = new Object("object created....")
        return obj;
    }

    return{

        getInstance :function() {
            if(!instance){
                instance=createObject();
                console.log("new object created...")
            }else {
                console.log("already object created...")
            }
            return instance;
        }
    }

})();
let obj1 = MySingleTon.getInstance();
let obj2 = MySingleTon.getInstance();
console.log(obj1==obj2)