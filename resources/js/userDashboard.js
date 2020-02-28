// display data in table

var petdataarray = new Array();

function addPetForBooking() {
    $.ajax({
        url: "http://localhost:5000/v1/getPet",
        method: "GET",
        dataType: "json",
        headers: { authorization: window.localStorage.getItem('usertoken') },
        success: function (result, status) {
            console.log(result);
            // petdataarray.push(result);
            // $.each(petdataarray, function (index, result) {

            for (rid in result) {
                $('#petmain').append(`
                <div class="card-header user-header alt ">
                        <div class="media ">
                            <a href="# ">
                                <img id="petimg" class="" width="300" height="300" alt=" " src="http://localhost:5000/` + result[rid].pet_image + `">
                            </a>
                        </div>
                </div>
                <li class="list-group-item "><strong>Name:</strong><span class="petname">` + result[rid].petname + `</span></li>
                <li class="list-group-item "><strong>Type:</strong><span  class="type">` + result[rid].type + `</span></li>
                <li class="list-group-item "><strong>Gender:</strong><span class="gender"> ` + result[rid].gender + `</span></li>
                <li class="list-group-item " ><strong>Breed:</strong><span class="breed">` + result[rid].breed + `</span></li>
                <li class="list-group-item "><strong>Age:</strong><span  class="age">` + result[rid].age + `</span> year</li>
                <div class="card-footer ">
                    <button type="submit" petname= '` + result[rid].petname + `'
                    breed= '` + result[rid].type + `'
                    class="btn btn-primary btn-sm adopt ">
                    <i class="fa fa-dot-circle-o "></i> Adopt Now
                    </button>
                   
                </div>
                            `);
            }

            // $('#petDetail').append('<tr>]\
            //     <th scope="row">' + result[key].id + '</th>\
            //     <td >' + result[key].petname + '</td>\
            //     <td>' + result[key].breed + '</td>\
            //     <td>' + result[key].type + '</td>\
            //     <td>' + result[key].age + '</td>\
            //     <td>' + result[key].gender + '</td>\
            //     <td>' + result[key].pet_image + '</td>\
            //     <td><button id="' + result[key].id + '" id="five" type="button" class="btn btn-primary edit">Edit</button></td>\
            //     <td><button id="' + result[key].id + '" id="five" type="button" class="btn btn-danger delete">Delete</button></td>');
            // }
        },
        error: function (jqXHR, status) {
            console.log(jqXHR);
        }
    });
}