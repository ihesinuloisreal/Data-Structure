// var arr = [3,7,4,65,4,2,5];
// var words = "The part of the just is like a shining light that shines bright";
// var word = words.split(" ")
// var sum = 0
// for(var i = 0; i < arr.length; i++){
//     sum += arr[i];
// }
// for (let i = 0; i < word.length; i++) {
//     if (word[i] === "is") {
//         print(word[i]);
//     }
// }
// print(sum)

function Copy(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        arr2[i] = arr1[i];
        
    }
}

var num = [];
for (i = 0; i < 100; i++){
    num[i] = i + 1;
}

var newNum = [];
num[0] = 400;
Copy(num, newNum);

print(newNum[0]);