function monthTemps() {
    this.dataStore = [];
    this.add = add;
    this.average = average;
}
function add(temp) {
    for (var i = 0; i < 12; i++) {
        var week = [];
        for (var j = 0; j < 4; j++) {
            week.push(temp);
            
            
        }

    }
    this.dataStore.push(week);



}
function average() {
    var total = 0;
    for (var i = 0; i < this.dataStore.length; ++i) {
    total += this.dataStore[i];
    }
    print(this.dataStore);

    return total / this.dataStore.length;

}
    var thisMonth = new monthTemps();
    thisMonth.add(52);
    thisMonth.add(55);
    thisMonth.add(61);
    thisMonth.add(65);
    thisMonth.add(55);
    thisMonth.add(50);
    thisMonth.add(52);
    thisMonth.add(49);
    thisMonth.add(52);
    thisMonth.add(55);
    thisMonth.add(61);
    thisMonth.add(65);
    thisMonth.add(55);
    thisMonth.add(50);
    thisMonth.add(52);
    thisMonth.add(49);
    thisMonth.add(52);

    print(thisMonth.average());