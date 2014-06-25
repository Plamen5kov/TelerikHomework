Array.prototype.remove = function remove(element) {
    var arr = this,
        length = arr.length,
        currentElemnent = element;

    if (currentElemnent[0] === '\'' || currentElemnent[0] === '"') {
        currentElemnent = currentElemnent
            .substr(1, currentElemnent.length - 2)
            .toString();
    }
    else {
        currentElemnent = currentElemnent | 0;
    }

    for (var index = 0; index < length; index += 1) {
        if (arr[index] === currentElemnent) {
            arr[index] = undefined;

        }
    }
};