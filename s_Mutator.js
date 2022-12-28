// function Compare(num1, num2) {
//     return num1 - num2;
// }

// var nums = [1,2,100,300,101,400,3,7,8,9];
// // var newNum = [4,5,6];
// // nums.splice(3,0, newNum);
// // nums.reverse();
// // print(nums);

// var names = ["David", "Mike", "Cynthia", "Claton", "Clinton"];
// names.sort().reverse();
// print(names);



// nums.sort(Compare);
// print(nums);

// forEach() function
print("forEach Function");
function Square(num) {
    print(num, num * num);
}
var nums = [1,2,3,4,5,6,7,8,9];
nums.forEach(Square);

// every() function
function isEven(nums) {
    return nums % 2 == 0;
}
var even = nums.every(isEven);
if (even) {
    print("All even numbers")
}else {
    print("Not all even")
}