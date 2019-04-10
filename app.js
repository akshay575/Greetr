$('#login').click(function () {
    console.log('clicked login', $('#greeting').text);
    
    var loginGrtr = G$('Akshay', 'Arora');
    $('#loginForm').hide();

    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
})