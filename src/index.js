module.exports = function reverse (n) {
    if (n < 0) n = -n;
    let arrayOfString = Array.from(String(n));
    let arrReverse = arrayOfString.reverse();
    let str = arrReverse.join('');
    n = +str;
    return n;
}
