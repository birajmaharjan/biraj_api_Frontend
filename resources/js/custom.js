$(document).ready(function() {
    diplayPetData();
    addUserData();
    /*-----------uploading data using formdata */




})

// display data in table
function diplayPetData() {
    $.ajax({
        url: "http://localhost:5000/v1/getPet",
        method: "GET",
        dataType: "json",
        headers: { authorization: window.localStorage.getItem('usertoken') },
        success: function(result, status) {
            console.log(result);
            for (key in result) {
                $('#petDetail').append('<tr>]\
                    <th scope="row">' + result[key].id + '</th>\
                    <td >' + result[key].petname + '</td>\
                    <td>' + result[key].breed + '</td>\
                    <td>' + result[key].type + '</td>\
                    <td>' + result[key].age + '</td>\
                    <td>' + result[key].gender + '</td>\
                    <td><img width="40" height="40" src="http://localhost:5000/' + result[key].pet_image + '"></td>\
                    <td><button petid="' + result[key].id + '" id="btnedit" type="button" class="btn btn-primary edit">Edit</button></td>\
                    <td><button petid="' + result[key].id + '" id="btndelete" type="button" class="btn btn-danger delete">Delete</button></td>');
            }
        },
        error: function(jqXHR, status) {
            console.log(jqXHR);
        }
    });
}


function addUserData() {
    $.ajax({
        url: "http://localhost:5000/v1/reteriveUser",
        method: "GET",
        dataType: "json",
        headers: { authorization: window.localStorage.getItem('usertoken') },
        success: function(result, status) {
            console.log(result);
            for (key in result) {
                $('#adminUserDetail').append('<tr>]\
                    <th scope="row">' + result[key].id + '</th>\
                    <td >' + result[key].firstname + '</td>\
                    <td>' + result[key].lastname + '</td>\
                    <td>' + result[key].email_address + '</td>\
                    <td><img width="40" height="40" src="http://localhost:5000/' + result[key].user_image + '"></td>\
                    <td>' + result[key].username + '</td>\
                    <td>' + result[key].address + '</td>\
                    <td>' + result[key].type + '</td>\
                    <td><button uid="' + result[key].id + '" id="btnDelete" type="button" class="btn btn-danger delete">Delete</button></td>');
            }
        },
        error: function(jqXHR, status) {
            console.log(jqXHR);
        }
    });
}

   // <td><button uid="' + result[key].id + '" id="btnEdit" type="button" class="btn btn-primary edit">Edit</button></td>\
                //  