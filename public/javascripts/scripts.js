
$( document ).ready(function() {
    var pr = document.getElementsByClassName('twi')[0];
    twemoji.parse(pr, {"size":72});
});

$(document).ready(function() {
    if ($('.taskDate').first().text() == moment().format('MMMM Do')) {
        $('.taskDate').first().html("Today");
        
    }
    
    $('.contact').click(() => {
        $(this).remove();
    })
    
    //$('.taskDate').html("FF");
});