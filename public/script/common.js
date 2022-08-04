$(document).ready(function(){

    $('.logged-in').fadeOut();
    $('.logged-out').fadeIn();

    gigya.accounts.getAccountInfo({callback:function (response) {
        if (response.errorCode == 0) {
            $('.logged-out').fadeOut();
            $('.logged-in').fadeIn();
        }
    }});

    gigya.socialize.addEventHandlers({
        onLogin: loginHandler,
        onLogout: logoutHandler
    });
})

function login(){

    $("#preferenceCentre").hide();
    $("#container").show();
    var params = {
        screenSet: 'Default-RegistrationLogin',
        startScreen: 'gigya-login-screen',
        containerID: "container"
    };
    gigya.accounts.showScreenSet(params);

}

function register(){

    $("#preferenceCentre").hide();
    $("#container").show();

    var params = {
        screenSet: 'Default-RegistrationLogin',
        startScreen: 'gigya-register-screen',
        containerID: "container"
    };
    gigya.accounts.showScreenSet(params);
}

function logout(){
    gigya.accounts.logout();
}


function loginHandler(response){
    $('#container').empty();
    $('.logged-out').fadeOut();
    $('.logged-in').fadeIn();
    
}

function logoutHandler(){
    $('#container').empty();
    $('.logged-out').fadeIn()
    $('.logged-in').fadeOut()
}