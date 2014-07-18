define(['jquery', 'localStorage'],function ($, local) {
    var renderWorker = (function() {

        function visualiseGame(loadedInfo){;
            if(!loadedInfo) {
                loadInitialSetUp();
            }
            else{
                loadInitialSetUp();
                parseLoadedInfo(loadedInfo);
            }
        }

        function parseLoadedInfo(loadedInfo){

            var $list = $('<ul/>');
            for(var item in loadedInfo.gameProgressInformation){
                if(item == 0){
                    continue;
                }
               var $currentListItem = $('<li/>')
                    .append('number: ' + loadedInfo.gameProgressInformation[item].userNumber +
                            ' | bulls: ' + loadedInfo.gameProgressInformation[item].bulls +
                            ' | cows: ' + loadedInfo.gameProgressInformation[item].cows);
                $list.append($currentListItem);
            }

            $list.appendTo('#gameInfo');
        }

        function loadInitialSetUp(){
            var $wrapper = $('#wrapper');
            $wrapper.html('<h1>The computer has thought of a 4 digit number... try and guess it!!!</h1>');

            var $inputTextBox = $('<input id="userGuessNumber" type="text"/>'),
                $inputButton = $('<input id="userGuessNumberBtn" type="button" value="try guessing"/>'),
                $gameInfo = $('<div id="gameInfo"> </div>')
                    .css('margin-top', '10px')
                    .css('border', '2px solid green');

            $wrapper
                .append($inputTextBox)
                .append($inputButton)
                .append($gameInfo);
        }

        return {
            visualiseGame: visualiseGame
        }
    })();

    return renderWorker;
});