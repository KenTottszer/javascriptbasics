const sumAll = function(bottom, top) {
    let sum = 0;
    if (!Number.isInteger(bottom) || !Number.isInteger(top) || bottom < 0 || top < 0) {
        return 'ERROR'
    }
    if (bottom > top){
    let replace = top;
    top = bottom;
    bottom = replace;
    }    
    for(let i = bottom; i <=top; i++){
        sum += i;
    }
    return sum;
};

sumAll(123, [4, 10]);

// Do not edit below this line
module.exports = sumAll;
