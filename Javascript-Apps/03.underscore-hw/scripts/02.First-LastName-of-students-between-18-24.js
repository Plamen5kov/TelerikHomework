var tasks = tasks || {};
tasks = (function(tasks) {
    function second() {
        _.chain(students)
            .filter(function (student) {
                return 18 <= student.age && student.age <= 24;
            })
            .each(function (student) {
                console.log(student.fname + ' ' + student.lname);
            })
    }
    tasks.second = second;

    return tasks;
})(tasks);