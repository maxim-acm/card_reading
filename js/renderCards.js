Handlebars.registerHelper('for', function (n, options) {
    var count = '';
    for(var i = 1; i <= n; i++){
        count += options.fn(i);
    }
    return count;
});

var source = $("#cards-template").html();
var template = Handlebars.compile(source);
$('#render').append(template());


