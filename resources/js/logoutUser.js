function logoutUser(token, name, type) {
    window.localStorage.removeItem(token);
    window.localStorage.removeItem(name);
    window.localStorage.removeItem(type);
    window.location.href = "../../index.html";
}