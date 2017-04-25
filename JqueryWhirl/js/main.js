$('button').on('click', function () {

$('.square').addClass('party');
// Adds the party class to the .square

$('img').attr('src','images/cat.jpeg');
//Uses .attr() method to update the image to cat.jpeg

$('h1').html('Having fun!');
//Changes the HTML to "Having fun!" using .html() method.

$('body').prepend('<p>Done and Done!</p>')
// Prepends the paragraph to the body element

});