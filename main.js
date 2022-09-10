$(document).ready(function() {
    getNextScenario("0")
})

function getNextScenario(scenarioNumber) {
    $("body").html("")
    $.getJSON("./scenarios/" + scenarioNumber + ".json").done(function(data) {
        console.log(data)
        $("body").append(data["text"] + "<br>")
        console.log(data["text"])
        console.log(data["connections"])
        console.log(data["connections"].length)
        for (var i = 0; i < data["connections"].length; i++) {
            console.log(data["connections"][i])
            try {
                console.log(data["connections"][i]["number"])
                console.log(data["connections"][i]["prompt"])
                $("#buttons").append(`<button onclick="getNextScenario(` + data["connections"][i]["number"].toString() + `)">` + data["connections"][i]["prompt"].toString() + `</button>`)
            } catch (error) {
                $("#buttons").append(`<button onclick="getNextScenario(` + data["connections"][i].toString() + `)">` + data["connections"][i].toString() + `</button>`)
            }
        }
    });
}