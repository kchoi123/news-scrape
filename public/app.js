
// Grabbing articles as JSON
$.getJSON("/articles", function (data) {
    for (var i = 0; i < data.length; i++) {
        // Creating p tags into our article id
        $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
    }
});

// P tag is created above after finding all articles and appending them to the DOM
$(document).on("click", "p", function () {
    $("#notes").empty();
    var thisID = $(this).attr("data-id");

    $.ajax({
        method: "GET",
        url: "/article/" + thisID
    })
        .then(function (data) {
            console.log("===============================");
            console.log(data);
            console.log("===============================");

            $("#notes").append("<h2>" + data.title + "<h2>");
            $("#notes").append("<input id='titleinput' name='title' >");
            $("#notes").append("<textarea id='bodyinput' name='body'></textarea>");
            $("#notes").append("<button data-id='" + data._id + "' id='savenote'>Save Note</button>");

            if (data.note) {
                $("#titleinput").val(data.note.title);
                $("#bodyinput").val(data.note.body);
            }
        });
});

$(document).on("click", "#savenote", function () {
    var thisId = $(this).attr("data-id");
    $.ajax({
        method: "POST",
        url: "/articles/" + thisId,
        data: {
            title: $("titleinput").val(),
            body: $("#bodyinput").val()
        }
    })
        .then(function (data) {
            console.log("===============================");
            console.log(data);
            console.log("===============================");

            $("#notes").empty();
        })
    
    $("#titleinput").val("");
    $("#bodyinput").val("");
});
