var specialConsole = (function specialConsole() {
    var my;

    var write = function write() {
        var originalMsg = arguments[0];

        for (var i = 0; i < arguments.length -1; i += 1) {

            if (originalMsg.indexOf('{' + i +'}') !== -1) {
                originalMsg = originalMsg.replace('{'+i+'}', arguments[i + 1]);
            }
        }

        console.log(originalMsg);
    };
    
    var error = function () {

        for (var i = 0; i < arguments.length; i += 1) {
            arguments[i] = arguments[i].toUpperCase();
        }
        write.apply(null, arguments);
    };

    var warning = function warning() {
        arguments[0] = arguments[0].toUpperCase(); // special format for errors

        write.apply(null, arguments);
    };

    my = {
        writeLine: write,
        writeError: error,
        writeWarning: warning
    };

    return my;
})();