putstr("Enter a number ");
var P = readline();
var sum = 1;
for (var i = P; i >= 1; --i) {
    sum *= i;
    // print(i);
}
print(sum);