/**
 * Created by 994x on 14.6.2014 г..
 */
window.onload = function () {
    $.fn.messageBox = function () {
        $this = $(this);

        var messageBox = $('<div />')
            .addClass('messageBox')
            .appendTo($this)
            .css('padding', '5px')
            .css('display', 'inline-block')
            .css('text-align', 'center')
            .css('border-radius', '15px')
            .css('opacity', '0');

        return {
            success: function success(successMessage) {
                messageBox
                    .html(successMessage)
                    .css('opacity', '0')
                    .css('background-color', 'lightgreen')
                    .css('border', '8px dashed green')
                    .animate({opacity: 1}, 1000) //appear
                    .delay(3000).fadeOut() // disappear after 5 seconds
                return $this;
            },

            error: function error(errorMessage) {
                messageBox
                    .html(errorMessage)
                    .css('opacity', '0')
                    .css('background-color', 'red')
                    .css('border', '4px dashed black')
                    .animate({opacity: 1}, 1000) //appear
                    .delay(3000).fadeOut() // disappear after 5 seconds
                return $this;
            }
        }
    }

    $('#success').on('click', onSuccess);
    $('#error').on('click', onError);

    function onSuccess() {
        $('#message-box').messageBox().success('Ladi da-da da-daaaa! SUCCESS!');
    }

    function onError () {
        $('#message-box').messageBox().error('Something went terribly wrong ...somewhere');
    }
}