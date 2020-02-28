var username = window.localStorage.getItem('username');
var token = window.localStorage.getItem('usertoken');
var usertype = window.localStorage.getItem('usertype');

function setusername() {
    $('.adminname').html(username);
}