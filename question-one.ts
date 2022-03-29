function checkDivisibility(number: number) {
    if (number % 22 === 0) return 'candybar';
    else if (number % 11 === 0) return 'bar';
    else if (number % 2 === 0) return 'candy';
    else return number.valueOf();
}