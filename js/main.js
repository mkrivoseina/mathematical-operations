//task 1
var num1 = 10;

if (num1 % 2 == 0) {
    console.log('the number is even');
} else {
    console.log('the number is odd')
}
//task 2

var myAge = 24;
if (myAge <= 18) {
    console.log('0 - 18 years');
}
if (myAge > 18 && myAge <= 30) {
    console.log('19 - 30 years');
}
if (myAge > 30 && myAge <= 40) {
    console.log('31 - 40 years');
}
if (myAge > 40 && myAge <= 50) {
    console.log('41 - 50 years');
}
if (myAge >= 51) {
    console.log('51+ years');
}
//task 3

var num2 = 30;
if (num2 % 2 == 0 && num2 % 3 == 0) {
    console.log('Fizz Bazz');
} else if (num2 % 2 == 0) {
    console.log('Fizz');
} else if (num2 % 3 == 0) {
    console.log('Bazz');
} else {
    console.log('none of the above');
}