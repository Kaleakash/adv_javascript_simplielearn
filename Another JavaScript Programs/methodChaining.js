// class Sample {

//     dis1() {
//         document.write("<br/> This is dis1 function")

//         return this;            // current object 
//     }
//     dis2() {
//         document.write("<br/> This is dis2 function")

//        return this;
//     }
//     dis3() {
//         document.write("<br/> This is dis3 function")
//         return this;
//     }
// }
// let s1 = new Sample();
// // s1.dis1();
// // s1.dis2();
// // s1.dis3();
// s1.dis1().dis2().dis3();

class Dog {
        msg =null;
        dis() {
            document.write("<br/> "+this.msg)
        }
        bark() {
                this.msg="Woofing"
                    this.dis();
                return this;
        }
        walk() {
                this.msg="Walking"
                    this.dis();
                return this;
        }
        eat() {
                this.msg="Eating";
                    this.dis();
                return this;
        }
}

let dd = new Dog();
dd.bark().walk().eat();

