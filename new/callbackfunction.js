function f1() {
    setTimeout(function() {
        console.log('f1');
    }, 1000);
}

function f2() {
    console.log('f2');
}

function f3() {
    console.log('f3');
}

f1();
f2();
f3();
console.log('Hello World!');