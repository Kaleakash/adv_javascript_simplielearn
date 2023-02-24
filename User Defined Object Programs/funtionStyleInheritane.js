// achieve inheritane using prototype 
// function Employee() {

//     this.disEmp= function() {
//         document.write("<br/>This is employee function")
//     }
// }

// function Manager() {
//     this.disMgr = function() {
//         document.write("<br/>This is manager function")
//     }
// }

// var emp1 = new Employee();
// emp1.disEmp();
// Manager.prototype= Object.create(emp1); // all 
// var mgr1 = new Manager();
// mgr1.disMgr();
// mgr1.disEmp();
// employee object with some property
function Employee(id,name,salary) {
    this.id = id;
    this.name = name;
    this.salary=salary;
    this.disEmp= function() {
        document.write("<br/>This is employee function")
        document.write("<br/>Id is "+this.id)
        document.write("<br/>Name is "+this.name)
        document.write("<br/>Salary is "+this.salary);
    }
}
function Manager(id,name,salary,numberofemp) {
Employee.apply(this,[id,name,salary]);
//Employee.bind
    this.numberofemp=numberofemp;
    this.disMgr = function() {
        document.write("<br/>This is manager function")
        document.write("<br/> number of employee working under him is "+this.numberofemp);
    }
}
var emp1 = new Employee(100,"Ravi",21);
emp1.disEmp();
var mgr1 = new Manager(102,"Ajay",45000,5);
mgr1.disEmp();
mgr1.disMgr();

