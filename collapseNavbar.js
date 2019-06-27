// Collapse navbar when a link or anywhere outside the navbar is clicked
$('.navbar-nav>li>a, main, footer').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
