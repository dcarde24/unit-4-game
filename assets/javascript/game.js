var rand12 = function() {
    return Math.ceil(Math.random() * 12)
};

var rand120 = function() {
    return Math.round(Math.random() * 30) + 90
}
console.log(rand12());
console.log(rand120());

var wins = 0;
var losses = 0;
var targetNumber = rand120();
var total = 0;


var display = function() {
$("#Wins").text(wins)
$("#Losses").text(losses)
$("#TargetNum").text(targetNumber)
$("#UserNum").text(total)
}

var buttons = function() {
    $("#btn_area").empty()
    for (i = 1; i <= 4; i++) {var newBtn = $("<button>")
    newBtn.addClass("btn btn-primary btn-lg btn-crystal")
    newBtn.attr("value", rand12())
    newBtn.text("Button " + i)
    $("#btn_area").append(newBtn)}
}

$("#btn_area").on("click", ".btn-crystal", function() {
    var value = $(this).attr("value");
    total += parseInt(value)
    if (total === targetNumber) {
        wins++;
        $(".Wins").text("wins: " + wins);
        alert("You win!");
        resetGame();
    } else if (total > targetNumber) {
        losses++;
        $(".Losses").text("Losses: " + losses);
        alert("You lose!");
        resetGame();
    }
    display();
})

var resetGame = function() {
        targetNumber = rand120();
        total = 0;
        buttons();
}

display();
buttons();
