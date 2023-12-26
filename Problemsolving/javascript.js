let range = parseInt(prompt("Please enter a number: "));

const array= [];

for (var i  = 0;  i< range; i++) {
    array[i] = i + 1;

    if (array[i]%3 == 0 && array[i]%5 == 0) {
        console.log("FizzBuzz");
    }
    else if(array[i]%3 == 0){
        console.log("Fizz");
    }
    else if(array[i]%5 == 0){
        console.log("Buzz");
    }
    else{
    console.log(array[i]);
    }
}