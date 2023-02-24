function* generatorFun() {
        console.log("1st statement");
        console.log("2nd statement");
        console.log("3rd statement");
    yield "first break point";
    console.log("4th statement");
    console.log("5ht statement");
    console.log("6th statement");
    yield "second break point";
    console.log("7th statement");
    console.log("8th statement");
    console.log("9th statement");
    yield "third break point";
    console.log("10th statement");
    yield "last break point";
}
let genRef  = generatorFun();
console.log(genRef.next());
console.log(genRef.next());
console.log(genRef.next());
console.log(genRef.next());
console.log(genRef.next());     
