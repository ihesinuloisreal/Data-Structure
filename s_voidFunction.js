function curve(arr, amount) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] += amount;
        
    }
}
var grade = [77,73,74,81,90];
curve(grade, 5);
print(grade)