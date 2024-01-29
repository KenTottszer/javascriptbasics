const repeatString = function(string, num) {
    if(num < 0){
        return "ERROR";
    }
    else{
        return string.repeat(num);
    }
};
function getRandomNumber(){
const number = Math.floor(Math.random() * 1000);
return number;
}

repeatString('hey', 3);
repeatString('hey', 10);
repeatString('hey', 1);
repeatString('hey', 0);
repeatString('hey', -1);
repeatString('hey', getRandomNumber());
repeatString('', 10);


// Do not edit below this line
module.exports = repeatString;
