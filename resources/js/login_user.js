$(document).ready(function() {
    $("#LoginUser").submit(function(event) {
        event.preventDefault();
        var userdata = {
                username: $('#username').val(),
                password: $('#password').val()
            }
            // console.log(userdata);

        // for (key in userdata) {
        //     console.log(key);
        // }
        //AJAX implementation
        $.ajax({
            url: "http://localhost:5000/v1/login",
            method: "POST",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(userdata),
            success: function(result, status) {
                window.localStorage.setItem('username', result.username);
                window.localStorage.setItem('usertoken', result.usertoken);
                window.localStorage.setItem('usertype', result.type);
                // window.localStorage.setItem('token', result.token);
                console.log(result.username, "   USERNAME");
                console.log(result.type, "   Type");
                if (result.type == 'admin') {
                    window.location.href = "views/admin/adminDashboard.html"

                } else {
                    window.location.href = "views/user/userdashboard.html"

                }
                // console.log(result);
                // $("#message").html(result.message);
                // console.log(result.token);
                //   window.localStorage.setItem('token');
            },
            error: function(err, status) {

                console.log(err)
                    // console.log(err.responseText);
                    // $("#message").html(err.responseText);
            }
        });
    })
})