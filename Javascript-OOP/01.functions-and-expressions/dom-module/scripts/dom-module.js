var domModule = (function () {
    var my = {},
        buffer = [],
        bufferCounter = [],
        selectorElements = [];

    var appendChild = function addDomElement(selector, element) {
        var parentElement = document.querySelector(selector),
            elementToAdd = document.createElement(element);

        parentElement.appendChild(elementToAdd);
        };

    var removeElement = function removeElement(selector, element) {
        var selector = document.querySelector(selector),
            elementToRemove = document.querySelector(element);

        selector.removeChild(elementToRemove);
        };

    var addEventToElement = function addEventToElement(selector, event, call) {
        var element = document.querySelector(selector);

        element.addEventListener(event, call);
    };

    var appendToBuffer = function appendToBuffer(selector, element){
        var elementToAdd = document.createElement(element);

        if (!buffer[selector]) {
            buffer[selector] = document.createDocumentFragment();
            bufferCounter[selector] = 0;
            selectorElements[selector] = document.querySelector(selector);
        }

        buffer[selector].appendChild(elementToAdd);
        bufferCounter[selector] += 1;

        if (bufferCounter[selector] >= 5) {
            selectorElements[selector].appendChild(buffer[selector]);
            bufferCounter[selector] = 0;
        }
    };

    my.appendChild = appendChild;
    my.removeElement = removeElement;
    my.addEventToElement = addEventToElement;
    my.appendToBuffer = appendToBuffer;

    return my;
})();