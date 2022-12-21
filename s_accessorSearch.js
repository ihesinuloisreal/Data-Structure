var names = ["Israel", "Tommy","Adrian","Jerry","Israel"];
putstr("Enter name to search: ");
var namee = readline();
var position1 = names.indexOf(namee);
var position2 = names.lastIndexOf(namee)
if (position1 >= 0 && position2 >= 0) {
    print("Found " + namee + " at position " + position1)
    print("Found " + namee + " at position " + position2)
} else {
    print(namee +" not found");
}