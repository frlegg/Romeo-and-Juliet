$(document).ready(function() {
    getNextScenario("./scenarios/0.json")
})

function getNextScenario(filename) {
    $("button").remove()
    $.getJSON(filename).done(function(data) {
        $("body").append(data["text"])
        for (var i = 0; i < data["connections"].length; i++) {
            $("body").append(`<button id="` + data["connections"][i].toString() + `">` + data["connections"][i].toString() + `</button>`)
        }
    });
}

$("button").on("click", function() {
    getNextScenario("./scenarios/" + $(this).attr("id") + ".json")
})