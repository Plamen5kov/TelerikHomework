Array.prototype.findYoungestPerson = function findYoungestPerson() {
        var youngest = this[0];

    for (var person = 1; person < this.length; person += 1) {

        if (this[person].age < youngest.age) {
            youngest = this[person];
        }
    }

    return youngest;
};