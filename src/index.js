module.exports = function getZerosCount(number) {
    let zeros = 0;
    let x = number;

    while (x) {
        x = Math.floor(x / 5);
        zeros += x;
    }

    return zeros;

}