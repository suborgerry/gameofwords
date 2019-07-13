var questWord;
var answerArray = [];
var quetsWordUndeline;
var numOfAtem;
var remainingLetters;
var numOfAtemOfMarcup;

var changeNum = function(num) {
    numOfAtemOfMarcup.innerHTML = ("Колличество попыток: " + num);
    return console.log("Left " + num + " atempts");
};

var sortOutLet = function() {
    if (remainingLetters > 0 && numOfAtem > 0) {

        var signalToNo = null;

        var quess = document.getElementById("inputLater").value;

        if (quess.match(/[0-9]/)) {
            document.getElementById("outputOther").innerHTML = ("Можно использовать только буквы, не цифры.");
        } else if (quess.length !== 1) {
            document.getElementById("outputOther").innerHTML = ("Можно писать только одну букву.");
        } else if (quess.length === 1) {
            for (var j = 0; j < questWord.length; j++) {
                if (questWord[j] === quess && answerArray[j] === ("_")) {
                    answerArray[j] = quess;
                    remainingLetters--;
                    signalToNo = "Good job";
                };
            };
            for (var q = 0; q < questWord.length; q++) {
                if (questWord[q] !== quess && signalToNo === null) {
                    document.getElementById("outputOther").innerHTML = ("Неправильно!");
                    break;
                };
            };
        };
        numOfAtem--;
        changeNum(numOfAtem);
        document.getElementById("inputLater").value = "";

        if (numOfAtem === 0 && signalToNo === null) {
            document.getElementById("outputOther").innerHTML = ("Попытки закончились<br>Начните игру заново");
        } else {
            quetsWordUndeline = document.getElementById("underLineWord");
            var answerFromWin = (answerArray.join(""));
            quetsWordUndeline.innerHTML = answerFromWin;
        };
        for (var z = 0; z < questWord.length; z++) {
            if (answerArray[z] == ("_")) {
                break;
            } else if (z == (questWord.length - 1)) {
                document.getElementById("outputOther").innerHTML = ("Слово угадано!");
            }
        };
    };
};

var giveVarLat = function() {
    questWord = document.getElementById("inputLater").value;

    console.log("Question word: " + questWord);

    for (var i = 0; i < questWord.length; i++) {
        answerArray[i] = "_";
    };

    quetsWordUndeline = document.getElementById("underLineWord");

    quetsWordUndeline.innerHTML = answerArray.join(" ");

    numOfAtemOfMarcup = document.getElementById("numOfAttempt");

    numOfAtem = questWord.length * 2;

    changeNum(numOfAtem);

    switchWord = document.getElementById("gameFomn_label");

    switchWord.innerHTML = ("Введите букву:");

    document.getElementById("inputLater").value = "";

    document.getElementById("buttonOfWord").innerHTML = "Угадывать";

    remainingLetters = questWord.length;

    changeCallBack = buttonOfWord.removeEventListener("click", giveVarLat);

    changeCallBack = buttonOfWord.addEventListener("click", sortOutLet);

    return console.log("Word is ready\nValue of click changed.");
};

var changeCallBack = buttonOfWord.addEventListener("click", giveVarLat);

console.log("Ready to work");

var reloadForNewGame = function() {
    document.location.reload(true);
}