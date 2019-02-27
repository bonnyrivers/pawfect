$('#yes').on('click', function() {
    $(this).attr('src', '../images/yes-onclick.png');
    console.log(petData)
});

$('#no').on('click', function() {
    $(this).attr('src', '../images/no-onclick.png');
});
