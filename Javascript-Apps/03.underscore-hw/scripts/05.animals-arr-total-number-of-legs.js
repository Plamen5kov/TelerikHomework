var tasks = tasks || {};
tasks = (function (tasks) {
    function fifth() {
        _.chain(animals)
            .filter(function (animal) {
                return (animal.numberOfLegs === 2 ||
                    animal.numberOfLegs === 4 ||
                    animal.numberOfLegs === 6 ||
                    animal.numberOfLegs === 8 ||
                    animal.numberOfLegs === 100)
            })
            .reduce(function (memo, animal) {
                var sumOfLegs = memo + animal.numberOfLegs;
                animals.numOfLegs = sumOfLegs;
                return sumOfLegs;
            }, 0);

        console.log('summed number of legs of animals with 2, 4, 6, 8 or 100 legs is: ' + animals.numOfLegs);
    }

    tasks.fifth = fifth;

    return tasks;
})(tasks);