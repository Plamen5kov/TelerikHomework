define(function () {
    var localStorageWorker = (function() {
        var GAME_STORAGE_KEY = 'bullsAndCows'; //key for the game in local storage
        var gameHistory = [];

        function save(gameProgressInformation){
            add(gameProgressInformation);

            localStorage.setItem(GAME_STORAGE_KEY, gameHistory)
        }

        function load(){

            if(!localStorage.getItem(GAME_STORAGE_KEY)){
                return null;
            }

            var progressInfo = localStorage.getItem(GAME_STORAGE_KEY);

                progressInfo = progressInfo.replace(new RegExp("},{","gm"),'};{');
                progressInfo = progressInfo.split(';');

            var len = progressInfo.length;
            var resultArr = [];
            for (var i = 0; i < len; i += 1) {
                resultArr.push(JSON.parse(progressInfo[i]));
            }

            console.log(resultArr);

            return {
                gameProgressInformation: resultArr
            }
        }

        function clear(){
            localStorage.clear();
        }

        function add(gameProgressInformation){
            gameHistory.push(JSON.stringify(gameProgressInformation));
        }

        return {
            save: save,
            load: load,
            clear: clear,
            GameStorageKey: GAME_STORAGE_KEY
        }
    })();

    return localStorageWorker;
});