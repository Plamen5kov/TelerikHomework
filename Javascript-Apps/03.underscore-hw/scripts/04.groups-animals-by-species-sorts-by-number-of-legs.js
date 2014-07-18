var tasks = tasks || {};
tasks = (function (tasks) {
    function fourth() {
        _.chain(animals)
            .groupBy(function (animal) {
                return animal.species;
            })
            .filter(function (animalGroup) {
                animalGroup.sort(function (animalOne, animalTwo) {
                    return animalOne.numberOfLegs - animalTwo.numberOfLegs;
                });

                return animalGroup;
            })
            .each(function (animalGroup) {
                console.log(animalGroup);
            });
    }

    tasks.fourth = fourth;

    return tasks;
})(tasks);