var tasks = tasks || {};
tasks = (function (tasks) {
    function sixth() {
        _.chain(authors)
            .sortBy(function (author) {
                return author.numberOfBooks;
            })
            .last()
            .each(function (author) {
                console.log(author);
            });
    }
    tasks.sixth = sixth;

    return tasks;
})
(tasks);