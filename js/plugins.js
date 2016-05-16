//Lettering

$(document).ready(function() {
    $(".intro").lettering('');
});

// Store Messages
    var msg0 = "Welcome!";
    var msg1 = "Hey there!";
    var msg2 = "Greetings!"

// Get Random Number
    var numRand;
    var max = 3;
    numRand = Math.floor(Math.random() * max);

//Display Random Messages
    $('h2').text( eval('msg' + numRand) );

