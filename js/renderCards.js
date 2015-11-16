
$(document).ready(function () {
    var source = $("#some-template").html();
    var template = Handlebars.compile(source);

    $('#render').append(template(cardsData));
});

