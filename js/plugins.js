// Store Messages
    var msg0 = "What's up?";
    var msg1 = "Ahola!";
    var msg2 = "Yo!"

// Get Random Number
    var numRand;
    var max = 3;
    numRand = Math.floor(Math.random() * max);

//Display Random Messages
    $('h2').text( eval('msg' + numRand) );