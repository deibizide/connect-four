(function() {
    var curPlayer = "player1";
    var player1moves = [];
    var player2moves = [];
    var winner1 = 0;
    var winner2 = 0;
    var victories = [
        ["6", "5", "4", "3"],
        ["5", "4", "3", "2"],
        ["4", "3", "2", "1"],
        ["12", "11", "10", "9"],
        ["11", "10", "9", "8"],
        ["10", "9", "8", "7"],
        ["18", "17", "16", "15"],
        ["17", "16", "15", "14"],
        ["16", "15", "14", "13"],
        ["24", "23", "22", "21"],
        ["30", "29", "28", "27"],
        ["36", "35", "34", "33"],
        ["42", "41", "40", "39"],
        ["6", "12", "18", "24"],
        ["5", "11", "17", "23"],
        ["4", "10", "16", "22"],
        ["3", "9", "15", "21"],
        ["2", "8", "14", "20"],
        ["1", "7", "13", "19"],
        ["3", "10", "17", "24"],
        ["24", "29", "34", "39"],
        ["24", "30", "36", "42"],
        ["23", "29", "35", "41"],
        ["22", "28", "34", "40"],
        ["21", "27", "33", "39"],
        ["20", "26", "32", "38"],
        ["19", "25", "31", "37"],
        ["12", "18", "24", "30"]
    ];
    const newLocal = ".slot";
    $(".column").on("click", function(e) {
        var slotsInColumn = $(e.currentTarget).find(newLocal);
        for (var i = 5; i >= 0; i--) {
            if (
                !slotsInColumn.eq(i).hasClass("player1") &&
                !slotsInColumn.eq(i).hasClass("player2")
            ) {
                break;
            }
        }
        slotsInColumn.eq(i).addClass(curPlayer);

        if (curPlayer === "player1") {
            $(".slot").each(function() {
                if ($(this).hasClass("player1")) {
                    var slotidplayer1 = $(this).attr("id");
                    if (!player1moves.includes(slotidplayer1)) {
                        player1moves.push(slotidplayer1);
                    }
                }
            });
            for (var i = 0; i < victories.length; i++) {
                var isWinplayer1 = victories[i].every(function(item) {
                    return player1moves.indexOf(item) !== -1;
                });
                if (isWinplayer1) {
                    $(".winnercontainer").css({
                        display: "block"
                    });
                    $(".winner").html("Player 1 wins");
                    winner1++;
                    $(".score1").html(winner1);
                }
            }
            curPlayer = "player2";
        } else {
            $(".slot").each(function() {
                if ($(this).hasClass("player2")) {
                    var slotidplayer2 = $(this).attr("id");
                    if (!player2moves.includes(slotidplayer2)) {
                        player2moves.push(slotidplayer2);
                    }
                }
            });
            for (var h = 0; h < victories.length; h++) {
                var isWinplayer2 = victories[h].every(function(item) {
                    return player2moves.indexOf(item) !== -1;
                });
                if (isWinplayer2) {
                    $(".winnercontainer").css({
                        display: "block"
                    });
                    $(".winner").html("Player 2 wins");
                    winner2++;
                    $(".score2").html(winner2);
                }
            }
            curPlayer = "player1";
        }
        $(".winnercontainer").on("click", function(e) {
            e.preventDefault();
            $(".player1").removeClass("player1");
            $(".player2").removeClass("player2");
            $(".winnercontainer").css({
                display: "none"
            });
            player1moves = [];
            player2moves = [];
        });
    });
})();
