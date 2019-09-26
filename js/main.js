function login() {
    let win = nw.Window.get();
    win.cookies.onChanged.addListener(function (change) {
        console.log("key : " + change.cookie.name);
        console.log("value : " + change.cookie.value);
        console.log("cause : " + change.cause);
        if ( change.cookie.name === "PDDAccessToken" && change.cookie.value.length > 0) {
            console.log("login ok!");
            logined()
        }
    })
}

function logined() {
    let win = nw.Window.get();
    console.log("has logined, remove login listener ...");
    console.log();
    win.cookies.onChanged.removeListener()
}