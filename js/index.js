// Your code goes here
$('#infobox-toggle').click(function() {
    $("#cover").show();
});

$('#close-infobox').click(function() {
    $("#cover").hide();
});

var cover = $('#cover');
cover.click(function(event) {
    e = event || window.event;
    if (e.target == this) {
        cover.hide();
    }
});