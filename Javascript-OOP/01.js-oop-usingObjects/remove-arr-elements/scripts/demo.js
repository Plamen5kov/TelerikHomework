window.onload = function() {
    var arrOriginal = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, "1"];

    $('#result')
        .css('display', 'block')
        .css('height', '200px')
        .css('width', '500px');

    $('#elementRemove').on('click', function () {
        var $elementToRemove = $('#element').val();
        arrOriginal.remove($elementToRemove);
        $('#result').append('arr: ' + arrOriginal + '\n\n');
    });
};