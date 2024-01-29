const fibonacci = function(iteration) {
    if(iteration === 0 ){
        return 0;
    }
    else if(iteration < 0){
        return "OOPS";
    }
    else if(iteration == "0"){
        return 0;
    }
    let startFib = 1;
    let nextFib = 1;
    let sumFib;
    
    for(var i = 0; i < iteration-1; i++){
        sumFib = startFib + nextFib;
        startFib = nextFib;
        nextFib = sumFib;
    }
    return startFib;
    
};

// Do not edit below this line
module.exports = fibonacci;
