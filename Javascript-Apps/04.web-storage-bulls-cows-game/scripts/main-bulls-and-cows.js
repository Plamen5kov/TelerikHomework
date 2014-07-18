(function () {
    require.config({
        paths: {
            jquery: 'libs/jquery-2.0.3',
            localStorage: 'bulls-and-cows-common/local-storage-worker',
            numberWorker: 'bulls-and-cows-common/number-worker',
            renderer: 'bulls-and-cows-common/render-worker'
        }
    });

    require(['jquery', 'renderer', 'numberWorker', 'localStorage'], function ($, renderer, numberWorker, local) {
        var $wrapper = $('#wrapper');

        $wrapper.on('click', '#startNewGame', startNewGame);

        $wrapper.on('click', '#continueOldGame', continueOldGame);

        $wrapper.on('click', '#clearStorage', clearStorage);

        $wrapper.on('click', '#userGuessNumberBtn', passGuess);

        function startNewGame(){
            var computerNumber = numberWorker.makeUpNumber();
            local.save({computerNumber: computerNumber});
            renderer.visualiseGame();
        }

        function continueOldGame(){
            var loadedInfo = local.load();
            if(loadedInfo === null){
                $('#wrapper').html('<h1>Sorry... no game played before ... better start a new game. </h1><p>Press F5 to return to game menu...</p>');
            }
            else {
                renderer.visualiseGame(loadedInfo);
            }
        }

        function clearStorage(){
            local.clear();
        }

        function passGuess() {
            var $guessNum = $wrapper
                .find('#userGuessNumber')
                .val();

            var intRegex = /[1-9]{4}/;

            if ($guessNum.length == 4 && intRegex.test($guessNum)) {
                $('#wrapper').find('#warning').remove(); //remove warning if there is one

                //pass to number worker to check for bulls and cows
                var guessResult  = numberWorker.checkForMatch($guessNum);

                //visualise result to user
                var currentGuess = '<p>number: ' + guessResult.userNumber + ' | bulls: '+ guessResult.bulls + ' | cows: ' + guessResult.cows + '</p>';
                $wrapper.append(currentGuess);

                //save to users' local storage
                local.save(guessResult);
            }
            else {
                var $warning = $('<p id="warning">Number has to have exactly 4 digits. Please input number into the right format!</p>')
                    .css('color', 'red');
                $wrapper.find('#warning').remove();
                $wrapper.append($warning);
            }
        }
    })
})();