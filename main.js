$(document).ready(function() {
    getNextScenario("0")
})

function getNextScenario(scenarioNumber) {
    $("button").remove()
    $.getJSON("./scenarios/" + scenarioNumber + ".json").done(function(data) {
        $("body").append("\n" + data["text"])
        for (var i = 0; i < data["connections"].length; i++) {
            $("body").append(`<button onclick="getNextScenario(` + data["connections"][i].toString() + `)">` + data["connections"][i].toString() + `</button>`)
        }
    });
}
