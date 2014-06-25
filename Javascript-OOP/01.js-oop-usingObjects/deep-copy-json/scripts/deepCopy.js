function deepCopy(jsonObj) {
    var copy = {};

    for(var property in jsonObj) {

        //copy primitive type or function
        if (typeof jsonObj[property] !== 'object') {
            copy[property] = jsonObj[property];
        }
        //copy object
        else {
            if (jsonObj[property]  === null) {
                copy[property] = null;
            }
            else {
                if (jsonObj[property] instanceof Object) {
                    //call recursion here
                    copy[property] = [];

                    for(var inProp in jsonObj[property]) {
                        copy[property][inProp]  = jsonObj[property][inProp];
                    }
                }
            }
        }
    }

    return copy;
}