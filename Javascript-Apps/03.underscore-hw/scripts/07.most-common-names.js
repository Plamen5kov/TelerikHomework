var tasks = tasks || {};
tasks = (function (tasks) {

    function seventh() {
        function mostCommon(prop) {
            var mostCommon = _.chain(students)
                .groupBy(function (student) {
                    return student[prop];
                })
                .sortBy(function (studentGroups) {
                    return -studentGroups.length
                })
                .first()
                .countBy(function(students){
                   return students[prop];
                })
                .value();

            return mostCommon;
        }

        console.log(mostCommon('fname'));
        console.log(mostCommon('lname'));
    }

    tasks.seventh = seventh;

    return tasks;
})(tasks);