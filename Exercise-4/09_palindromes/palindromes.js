const palindromes = function (string) {
    const newOrder = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedOrder = newOrder.split('').reverse().join('');
    return ((newOrder == reversedOrder) ? true : false);
};

// Do not edit below this line
module.exports = palindromes;
