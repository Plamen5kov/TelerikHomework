/**
 * Created by 994x on 14.6.2014 г..
 */
window.onload = function () {
    (function ($) {
        $.fn.dropdown = function () {
            $this = $(this);
            $parent = $(this);

            $this.on('blur', function () {
                $this = $(this);
                //SAVE CHOSEN VALUES
                var maxVal = $this.val(); // get submited vaue
                var text = $this.find('option');


                //CREATE LIST
                var div = $('<div/>').addClass('dropdown-list-container');
                var ul = $('<ul/>').addClass('dropdown-list-options')
                    .on('click', '.dropdown-list-option', function () {

                        var $liElement = $(this); // element clicked on

                        var valueOfListElement = $liElement.val() + 1; // value of clicked element
                        var selector = 'option[value=\'' + valueOfListElement + '\']';

                        if ($this.find(selector).attr('selected') === 'selected') {
                            $this.find(selector).removeAttr('selected');
                            $liElement.css('background-color', '');
                        }
                        else {
                            $this.find(selector).attr('selected', 'selected');
                            $liElement.css('background-color', 'lightgreen');
                        }
                    })

                for (var val = 0; val < maxVal; val += 1) {

                    var li = $('<li/>')
                        .addClass('dropdown-list-option')
                        .attr('value', val)
                        .appendTo(ul)
                        .html(text[val].text);
                }
                ul.appendTo(div);
                div.appendTo(document.body);

                //HIDE OPTIONS LIST
                $parent.css('display', 'none');
            })

        }
    })(jQuery)

    $('#dropdown').dropdown();
}