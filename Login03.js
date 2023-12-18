document.getElementById("form-container").addEventListener("submit", function(event) {
    event.preventDefault()

    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

    if (username == "admin" || password == "admin") {
        console.log("Login Successfuly", "Username : ", {username}, "Password : ", {password})
    } else {
        console.log("Login filed!")
    }

    document.getElementById("username").value = ""
    document.getElementById("password").value = ""
})