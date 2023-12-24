//1st
let number1 = 10;

function add7(num) {
    return num + 7;
}

console.log(add7(number1));



//2nd
let number2 = 10;
let number3 = 12;

function multiply(num1, num2) {
    return num1 * num2;
}

console.log(multiply(number2, number3));


//3rd
let string1 = "hello my name is tottszer tamas";

function capitalise(string) {
    const arr = string.split(" ");
    for(var i = 0; i < arr.length; i++ ){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return string = arr.join(" ")
}
console.log(capitalise(string1));


//4th
let string2 = "ooga booga ahh ahh ahh";

function lastLetter(string){
    return string.charAt(string.length-1);   
}

console.log(lastLetter(string2));