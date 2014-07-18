define(function () {
    var numberWorker = (function () {
        var originalNumber;

        function makeUpNumber() {
            do {
                originalNumber = Math.floor(Math.random() * 8999 + 1000);
            }
            while(numberHasRepeatingDigits(originalNumber));

            return originalNumber;
        }

        function numberHasRepeatingDigits(number) {
            var used = ['0', '0', '0', '0'], //because the number cant have a zero
                numberArr = [],
                numberToString = number.toString();

            //convert number to array for easier comparison
            for (var i = 0; i < 4; i += 1) {
                numberArr.push(numberToString[i]);
            }
            used[0] = numberArr[0];

            //check for repeating digits if there are such return true
            // if there aren't return false
            for (var i = 1; i < 4; i += 1) {

                for (var j = 0; j < 4; j += 1) {

                    if(numberArr[i] === used[j]){
                        return true;
                    }
                }
                used[i] = numberArr[i];
            }
            return false;
        }

        function checkForMatch(userInputNumber) {
            var userNumber = userInputNumber,
                origUserNum = userInputNumber,
                originalNum = originalNumber.toString(),
                bulls = 0,
                cows = 0;

            if (userNumber.length != 4) {
                return 'number has to be exactly 4 digits'
            }

            //check for matches
            for (var i = 0; i < userNumber.length; i += 1) {
                for (var j = 0; j < originalNum.length; j += 1) {
                    if (i === j && userNumber[i] === originalNum[j]) {
                        userNumber[i] = '{'; //bull horns
                        originalNum[i] = '}';
                        bulls++;
                        break;
                    }
                    else if (i !== j && userNumber[i] === originalNum[j]) {
                        userNumber[i] = '('; //cow horns
                        originalNum[i] = ')';
                        cows++;
                        break;
                    }
                }
            }


            return {
                userNumber: origUserNum,
                bulls: bulls,
                cows: cows
            }
        }

        return {
            makeUpNumber: makeUpNumber,
            checkForMatch: checkForMatch
        }
    })();

    return numberWorker;
});