window.onload = function() {

    $('#result')
        .css('display', 'block')
        .css('height', '200px')
        .css('width', '500px');

    $('#createPoint').on('click', function() {
        var $pointFirst = new Point();

        $pointFirst.x = $('#pointFirstX').val();
        $pointFirst.y = $('#pointFirstY').val();

        $('#result').append($pointFirst.toString()).append('\n\n');
    });

    $('#createLine').on('click', function() {
        var $pointFirst = new Point(),
            $pointSecond = new Point(),
            $line = new Line();

        $pointFirst.x = $('#pointFirstX').val();
        $pointFirst.y = $('#pointFirstY').val();
        $pointSecond.x = $('#pointSecondX').val();
        $pointSecond.y = $('#pointSecondY').val();
        $line.startPoint = $pointFirst;
        $line.endPoint = $pointSecond;

        $('#result').append($line.toString()).append('\n\n');
    });

    //check if these three lines are able to make a triangle
    function triangle(lineOne, lineTwo, lineThree) {
        if((lineOne.length + lineTwo.length) > lineThree.length) {
            return true;
        }
        return false;
    }
};