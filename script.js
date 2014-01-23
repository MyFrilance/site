$(function () {
    $("#button_green").click(function () {
        $("#test").css("color", "green");
    });
    $("#button_red").click(function () {
        $("#test").css("color", "red");
    });
    $("#button_black").click(function () {
        $("#test").css("color", "black");
    });

    $("#change_backgroundColor").click(function () {
        var FontColor = $("#test").css("color");
        if (FontColor == "rgb(0, 128, 0)") {
            $("#test").css("background-color", "blue");
        }
    });
});






