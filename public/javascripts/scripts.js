
$( document ).ready(function() {
    var fb = document.getElementsByClassName('featuredBlock')[0];
    var pr = document.getElementsByClassName('projects')[0];
    twemoji.parse(fb, {"size":72});
    twemoji.parse(pr, {"size":72});
});

$(document).ready(function() {
    if ($('.taskDate').first().text() == moment().format('MMMM Do')) {
        $('.taskDate').first().html("Today");
        
    }
    
    
    //$('.taskDate').html("FF");
});