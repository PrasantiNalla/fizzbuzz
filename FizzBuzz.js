//console.log(1);
//console.log(2);
for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
        console.log("FizzBuzzBang");
    }
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    }
    if (i % 3 === 0 && i % 7 === 0) {
        console.log("FizzBang")
    }
    if (i % 5 === 0 && i % 7 === 0) {
        console.log("BuzzBang")
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else if (i % 7 === 0) {
        console.log("Bang");
    }
    else {
        console.log(i);
    }
}