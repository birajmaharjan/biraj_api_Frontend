var adminUsername = window.localStorage.getItem('username');
var token = window.localStorage.getItem('usertoken');
var usertype = window.localStorage.getItem('usertype');
$(document).ready(function() {
    // addAdminName();


    $("#adminRegisterUser").submit(function(event) {
        event.preventDefault();
        var userdata = {
            firstname: $('#fname').val(),
            lastname: $('#lname').val(),
            email_address: $('#email_address').val(),
            address: $('#address').val(),
            // user_image: $('#user_image').val(),
            username: $('#username').val(),
            password: $('#password').val(),
            user_image: $("#user_image")[0].files[0].name

        }
        console.log(userdata);

        // // for (key in userdata) {
        // //     console.log(key);
        // // }
        // //AJAX implementation
        $.ajax({
            url: "http://localhost:5000/v1/register",
            method: "POST",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(userdata),
            success: function(result, status) {
                console.log(result)
                    // console.log(result);
                $("#message").html(result.message);
                // console.log(result.token);
                //   window.localStorage.setItem('token');
            },
            error: function(jqXHR, status) {
                console.log(jqXHR)
                    // console.log('user already exists')
                    //console.log(err)
                    //console.log(err.responseText);
                $("#message").html(jqXHR.responseJSON.message);
            }
        });
    })


})

// function addAdminName() {
//     $('.admiaddPetDatanname').html(adminUsername);
// }

// display data in table
function adoptPetDetail() {
    $.ajax({
        url: "http://localhost:5000/v1/getPet",
        method: "GET",
        dataType: "json",
        headers: { authorization: window.localStorage.getItem('usertoken') },
        success: function(result, status) {
            console.log(result);
            for (key in result) {
                          
            
            }
        },
        error: function(jqXHR, status) {
            console.log(jqXHR);
        }
    });
}