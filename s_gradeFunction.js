function Grades() {
    this.grade = [];
    this.total = 0;
    this.average = 0.0;
    this.addGrade = addGrade;
    this.gradeAverage = gradeAverage;
}

function addGrade(grd) {
    this.grade.push(grd);

}

function gradeAverage() {
    for(var i = 0; i < this.grade.length; i++){
        this.total += this.grade[i] ;
    }
    this.average = this.total / this.grade.length;
    return this.average;
}

const grades = new Grades();


do {
    putstr("Enter the student grade: ");
    var grd = +readline();
    grades.addGrade(grd);
    putstr("Do you want to add more grades? ");
    var res = readline();
} while (res === "yes");
print(grades.gradeAverage());