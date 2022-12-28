// function add(runningTotal, currentValue){
//     return runningTotal + currentValue;
// }

// var nums = [1,2,3,4,5,6,7,8,9,10];
// var sum = nums.reduce(add);
// print(sum);

// Array.matrix = function(numrows, numcols, initial){
//     var arr = [];
//     for (var i = 0; i < numrows; i++) {
//         var columns = [];
//         for (var j = 0; j < numcols; j++) {
//             columns[j] = initial;
//         }
//         arr[i] = columns;
//     }
//     return arr
// }
// var nums = Array.matrix(5,5,7);
// print(nums[1][1]);

// var grade = [[89,77,87,90],[76,82,81],[91,94,89]];
// var total = 0;
// var average = 0.0;
// for(var row = 0; row < grade.length; row++){
//     for(var col = 0; col < grade[row].length; col++){
//         total += grade[row][col];
//     }
//     average = total / grade[row].length;
//     print("Student " + parseInt(row+1) + ' Average: ' + average.toFixed(2));
//     total = 0;
//     average = 0.0;
// }

// var grade = [[89,77,87,90],[76,82,81],[91,94,89]];
// var total = 0;
// var average = 0.0;
// for(var col = 0; col < grade.length; col++){
//     for(var row = 0; row < grade[col].length; row++){
//         total += grade[col][row];
//     }
//     average = total / grade[col].length;
//     print("Student " + parseInt(col+1) + ' Average: ' + average.toFixed(2));
//     total = 0;
//     average = 0.0;
// }

// A code Snippet to generate a 3 by 3 metrix in an artay
var arr = [];
for(var i = 0; i < 3; i++){
    var arr2 = [];
    for(var j = 0; j < 3; j++){
        arr2[j] = Math.floor(Math.random()*101);
    }
    arr[i] = arr2;
}
print(arr)