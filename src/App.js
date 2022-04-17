import SharedDesign from "./SharedDesign/SharedDesign";
import PendingUser from "./Users/PendingUser";
import RegisteredUser from "./Users/RegisteredUser";
import {BrowserRouter} from "react-router-dom";
import React, {useState} from "react";
import Router from "./Misc/Router";
import CookieHandling from "./Misc/CookieHandling";
import registeredUser from "./Users/RegisteredUser";

function App() {

    // Incredibly temporary methods where we make awful storage of sessions storage as our database.
    // This causes all sorts of issues when trying to send messages to or from them.
    // but as this should all go away the moment we set up a server, we have decided to not try and debug this.
    PendingUser.pendingUsers.forEach(element => {
        sessionStorage.setItem(element.username + "pend", JSON.stringify(element));
        sessionStorage.setItem(element.email + "pend", JSON.stringify(element));
    });
    RegisteredUser.registeredUsers.forEach(element => {
        sessionStorage.setItem(element.username + "log", JSON.stringify(element));
        sessionStorage.setItem(element.email + "log", JSON.stringify(element));
    });

    let cookie_verified = false;
    const cUsername = CookieHandling.getCookie("username");
    const password = CookieHandling.getCookie("password");
    if (cUsername && password){
        if (registeredUser.DoUserAndPasswordMatch(cUsername, password)
            || registeredUser.doEmailAndPasswordMatch(cUsername, password)){
            cookie_verified = true;
        }
    }

    const [userLoggedIn, setUserLoggedIn] = useState(cookie_verified);

    return (
        <SharedDesign>
            <BrowserRouter>
                <Router props={{loggedIn: userLoggedIn, setLoggedIn: setUserLoggedIn, username: "Panda"}}/>
            </BrowserRouter>
        </SharedDesign>
    );
}

export default App;
