Object.prototype.hasProperty = function (property) {
    for(prop in this){
        if (property === prop) {
            return true;
        }
    }
    return false;
};

function hasProp(obj, property) {
    for(prop in obj) {
        if (property === prop) {
            return true;
        }
    }
    return false;
}