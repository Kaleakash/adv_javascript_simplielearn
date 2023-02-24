class StudentBuilder {
    constructor() {
        this.sid=""
        this.sname="";
        this.age="";
        this.address="";
    }
    _sid(sid){
        this.sid=sid;
        return this
    }
    _sname(sname){
        this.sname=sname;
        return this
    }
    _age(age){
        this.age=age;
        return this
    }
    _address(address){
        this.address=address;
        return this
    }
    build(){
        return{
            sid:this.sid,
            sname:this.sname,
            age:this.age,
            address:this.address 
        }
    }
}

let s1 = new StudentBuilder()._sid(1).build();
let s2 = new StudentBuilder()._sid(2)._sname("Ravi").build();
let s3 = new StudentBuilder()._sid(2)._sname("Ramesh")._age(21).build();
let s4 = new StudentBuilder()._sid(2)._sname("Ravi")._address("Bangalore").build();
console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);



