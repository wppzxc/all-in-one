function login() {
    let win = nw.Window.get();
    let listener = win.cookies.onChanged.addListener(function (change) {
        console.log("key : " + change.cookie.name);
        console.log("value : " + change.cookie.value);
        console.log("cause : " + change.cause);
        if ( change.cookie.name === "" && change.cookie.value.length > 0) {
            console.log("login ok!");
            logined(listener)
        }
    })
}

function logined(listener) {
    let win = nw.Window.get();
    console.log("has logined, remove login listener ...");
    console.log(listener);
    win.cookies.onChanged.removeListener(listener)
}