$(document).ready(function() {
    $("#RegisterUser").submit(function(event) {
        event.preventDefault();
        // var userdata = {
        //     firstname: $('#fname').val(),
        //     lastname: $('#lname').val(),
        //     email_address: $('#email_address').val(),
        //     address: $('#address').val(),
        //     // user_image:$('#user_image').val(),
        //     imgFile: $("#imgFile")[0].files[0].name,
        //     username: $('#username').val(),
        //     password: $('#password').val()
        // }
        var formdata = new FormData();
        var registrationData = {
            firstname: $('#fname').val(),
            lastname: $('#lname').val(),
            email_address: $('#email_address').val(),
            address: $('#address').val(),
            user_image: $("#user_image")[0].files[0],
            username: $('#username').val(),
            password: $('#password').val()
        }
        for (key in registrationData) {
            formdata.append(key, registrationData[key]);
        }

        $.ajax({
            url: "http://localhost:5000/v1/register",
            method: "POST",
            processData: false,
            contentType: false,
            data: formdata,
            dataType: 'json',
            success: function(result, status) {
                console.log(result)
                    // console.log(result);
                    alert(result.message);
                $("#message").html(result.message);
                window.location.href = 'login.html'
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