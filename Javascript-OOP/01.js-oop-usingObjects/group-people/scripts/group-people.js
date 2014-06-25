Array.prototype.groupBy = function groupPeople(option){
    var dictionary = [],
        arrayPeople = this,
        length = arrayPeople.length;

    for (var  index = 0; index  < length; index += 1) {
        var currentOption = arrayPeople[index][option];

        if (!dictionary[currentOption]) {
            dictionary[currentOption] = [];
        }

        dictionary[currentOption].push(arrayPeople[index]);
    }

    return dictionary;
};