function deepCopy(jsonObj) {
    var copy = jsonObj instanceof Array ? [] : {};

    for(var property in jsonObj) {

        //copy primitive type or function
        if ((typeof jsonObj[property]) !== 'object' || jsonObj[property] === null) {
            copy[property] = jsonObj[property];
        }
        //deep copy object
        else {
            copy[property] = deepCopy(jsonObj[property]);
        }
    }

    return copy;
}