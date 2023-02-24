// class Employee {        // class style object creation with one behaviour 


//     display(){
//         document.write("This is employee class behaviour")
//     }
// }


// let emp1 = new Employee();
// emp1.display();

// class Employee {        // class style object creation with one behaviour and more than one property  
//     id=100;
//     name="Ravi"
//     age=21;
//     display(){
//         document.write("This is employee class behaviour")
//         document.write("<br/> id is "+this.id);
//         document.write("<br/> name is "+this.name);
//         document.write("<br/> age is "+this.age);
//     }
// }


// let emp1 = new Employee();
// emp1.display();
// let emp2 = new Employee();
// emp2.display();




// constructor example : empty constructor 
// class Employee {
//     constructor() {
//         document.write("<br> object created...")
//     }
//     display() {
//         document.write("<br> This is display function")
//     }
// }

// let emp1 =new Employee();
// emp1.display();
// emp1.display();
// emp1.display();




// // parameterized constructor 
// class Employee {        // class style object creation with one behaviour and more than one property  
//     // id=100;
//     // name="Ravi"
//     // age=21;
//     constructor(id,name,age){
//         this.id = id;
//         this.name = name;
//         this.age = age;
//     }
//     display(){
//         document.write("This is employee class behaviour")
//         document.write("<br/> id is "+this.id);
//         document.write("<br/> name is "+this.name);
//         document.write("<br/> age is "+this.age);
//     }
// }

// let emp1 = new Employee(1,"Ajay",23);
// emp1.display();
// let emp2 = new Employee(2,"vijay",25);
// emp2.display();


class Employee {
    disEmp() {
        document.write("<br/> Emloyee class objet")
    }
}
class Manager extends Employee{
    disMgr() {
        document.write("<br> Manager class object")
    }
}
let emp1 = new Employee();
let mgr1 = new Manager();
emp1.disEmp();
mgr1.disMgr();
mgr1.disEmp();














