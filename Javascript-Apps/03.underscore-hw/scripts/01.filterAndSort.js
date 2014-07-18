var tasks = tasks || {};
tasks = (function (tasks) {

    function first() {
        _.chain(students)
            .filter(function (student) {
                return student.fname < student.lname;
            })
            .sortBy(function (student) {
                return student.fname;
            })
            .reverse()
            .each(function (student) {
                console.log(student.fname + ' ' + student.lname);
            });
    }

    tasks.first = first;

    return tasks;
})(tasks);