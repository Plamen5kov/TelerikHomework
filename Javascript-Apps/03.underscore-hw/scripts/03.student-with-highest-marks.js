var tasks = tasks || {};
tasks = (function (tasks) {
    function third() {
        _.chain(students)
            .map(function (student) {
                var avgMarks = 0;
                _.each(student.marks, function (mark) {
                    avgMarks += mark;
                });

                avgMarks = avgMarks / student.marks.length;
                student.avgMarks = avgMarks;

                return student;
            })
            .sortBy(function (student) {
                return student.avgMarks
            })
            .last()
            .each(function (student) {
                console.log(student);
            });
    }

    tasks.third = third;

    return tasks;
})(tasks);