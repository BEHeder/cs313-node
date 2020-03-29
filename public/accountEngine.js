function signIn() {
    var username = $("#username").val()
    var password = $("#password").val()
    console.log("Input: " + username + " " + password)
    var params = {username: username, password: password}
    $.post("/signIn2", params, function(result) {
        if (result && result.success) {
            $("#results").text("You've signed in!")
        } else {
            $("#results").text("Oops! Something went wrong!")
        }
    }).always(function() {
        window.location.reload()
    })
}


