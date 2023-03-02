//When the DOM is ready, console.log the message "Let's get ready to party with jQuery!"
console.log("Let\'s get ready to party with jQuery!");

//Give all images inside of an article tag the class of image-center (this class is 
//defined inside of the style tag in the head).
$('article img').addClass('image-center');

//Remove the last paragraph in the article. 
$('article p').eq(5).remove();

//Set the font size of the title to be a random pixel size from 0 to 100. 
$('#title').css({'font-size' : Math.floor(Math.random()*101)});

//Add an item to the list; it can say whatever you want. 
$('ol').append('<li>But I like Chow chows better!!!</li>');

//Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing 
//for the list's existence. 
$('aside').empty().append('<p>My apologies. The list was a silly idea. :(</p>');

//When you change the numbers in the three inputs on the bottom, the background color 
//of the body should change to match whatever the three values in the inputs are.
$(".form-control").on('keyup blur change', function () {
    let $redInt = $('.form-control').eq(0).val();
    let $blueInt = $('.form-control').eq(1).val();
    let $greenInt =  $('.form-control').eq(2).val();

    $('body').css({'background-color' : "rgb(" + $redInt + "," + $greenInt + "," + $blueInt + ")"});
})

//Add an event listener so that when you click on the image it is removed from the DOM.
$('img').click(function() {
    $(this.remove());
})


