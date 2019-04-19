
// Grabbing articles as JSON
$.getJSON("/articles", function (data) {
    for (var i = 0; i < data.length; i++) {
        // Creating p tags into our article id
        $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p><button type='button' class='btn btn-info' id='saveArticle' data-id='" + data[i]._id + "'>Save</button><hr>");
    }
});

// P tag is created above after finding all articles and appending them to the DOM
$(document).on("click", "p", function () {
    $("#notes").empty();
    var thisID = $(this).attr("data-id");
    console.log("/article/" + thisID);

    $.ajax({
        method: "GET",
        url: "/article/" + thisID
    })
        .then(function (data) {
            console.log("===============================");
            console.log(data);
            console.log("===============================");

            $("#notes").append("<h2>" + data.title + "<h2>");
            $("#notes").append("<input id='titleinput' name='title' placeholder='User Name'>");
            $("#notes").append("<textarea id='bodyinput' name='body' placeholder='Comments...'></textarea>");
            $("#notes").append("<br><button data-id='" + data._id + "' id='savenote' type='button' class='btn btn-info'>Save Note</button>");

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
        url: "/article/" + thisId,
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

$(document).on("click", "#scrape", function() {
    console.log("Scrape was clicked!");
    $.ajax({
        method: "GET",
        url: "/scrape"
    }).then(function(data) {
        console.log(data);
        location.reload();
    });
});

$(document).on("click", "#clear", function() {
    console.log("Clear was clicked!");
    $.ajax({
        method: "GET",
        url: "/clear"
    }).then(function(data) {
        console.log(data);
    });
    location.reload();
});

$(document).on("click", "#allNotes", function() {
    console.log("See all Notes was clicked!");
})

$(document).on("click", "#saved", function() {
    console.log("Saved articles was clicked!");
})

$(document).on("click", "#saveArticle", function() {
    console.log("Save an article was clicked!");
})