// ES5 style 
function display() {
    document.write("This is normal function")
}
display();

// function Employee() {
//     alert("object created..")
// }

// var emp1 = new Employee();      // memory creation for Employee object. 
//Employee();

// function Employee() {
//     this.id = 100;
//     var name = "Ravi";      // it is not a part of object it is consider local variable. 
// }
// var emp1 = new Employee();
// document.write("<br> id "+emp1.id)
// document.write("<br> name is "+emp1.name);

// // function style object creation with property 
// function Employee() {
//     this.id = 100;
//     this.name = "Ravi"
//     this.age = 21; 
// }
// var emp1 = new Employee();
// document.write("<br> id "+emp1.id)
// document.write("<br> name is "+emp1.name);
// document.write("<br> age is "+emp1.age);

// function style object creation with property and behaviour 
// function Employee() {
//     this.id = 100;
//     this.name = "Ravi"
//     this.age = 21; 
//     this.display = function(){
//         document.write("<br/> id is "+this.id);
//         document.write("<br/> name is "+this.name);
//         document.write("<br/> age is "+this.age);
//     }
// }
// var emp1 = new Employee();
// var emp2 = new Employee();
// // document.write("<br> id "+emp1.id)
// // document.write("<br> name is "+emp1.name);
// // document.write("<br> age is "+emp1.age);
// emp1.display();
// emp2.display();


// // function style object creation with property and behaviour with parameter 
// function Employee(id,name,age) {
//     this.id = id;
//     this.name = name;
//     this.age =age; 
//     this.display = function(id,name,age){
//         document.write("<br/> id is "+id);
//         document.write("<br/> name is "+name);
//         document.write("<br/> age is "+age);
//     }
//     this.changeAge=function(age){
//         this.age = age;
//     }
// }
// var emp1 = new Employee(100,"Ravi",24);
// var emp2 = new Employee(101,"Raj",26);
// emp1.display(123,"Ajay",32);
// document.write("<br/>")
// document.write(emp1.age)
// emp2.display();
// emp1.changeAge(30);
// emp2.changeAge(28);
// emp1.display();
// emp2.display();


function Employee() {
 
    this.setEmpInfo = function(id,name,age){
                this.id = id;
                this.name = name;
                this.age = age;
    }
    this.display = function() {
                document.write("<br/> id is "+this.id);
                 document.write("<br/> name is "+this.name);
                 document.write("<br/> age is "+this.age);

    }

}
var emp1 = new Employee();
emp1.setEmpInfo(100,"Ravi",24);
emp1.display();
var emp2 = new Employee();
emp2.setEmpInfo(101,"Ramesh",26);
document.write("<br> Emp1 desg "+emp1.desg);
document.write("<br> Emp2 desg "+emp2.desg);
emp2.display();
Employee.prototype.desg = "Developer";      // at run time we added new property.
document.write("<br> Emp1 desg "+emp1.desg);
document.write("<br> Emp2 desg "+emp2.desg);
        Employee.prototype.info = function() {          // at run time we adde new behaviour 
   // alert('This is employee object function')
   document.write("<br/> this is employee function ")
}
emp1.info();
emp2.info();

