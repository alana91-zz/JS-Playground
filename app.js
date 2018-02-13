'use strict';

//action with Greetr on click of greet button
$('#greet').click(() => {
    //creates a Greetr object (without new!) using user input with jQuery
    var greeting = G$($('#firstname').val(), $('#lastname').val());

    //hides div
    $('#greet-div').hide();

    //sets language from user input
    //calls html greeting with user input on formality
    //chains methods
    greeting
        .setLanguage($('#language').val())
        .htmlGreeting('#greeting', $('#formality').val());
})