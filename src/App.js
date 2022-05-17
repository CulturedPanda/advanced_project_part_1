import SharedDesign from "./SharedDesign/SharedDesign";
import PendingUser from "./Users/PendingUser";
import RegisteredUser from "./Users/RegisteredUser";
import {BrowserRouter} from "react-router-dom";
import React, {useState} from "react";
import Router from "./Misc/Router";
import CookieHandling from "./Misc/CookieHandling";
import registeredUser from "./Users/RegisteredUser";

function App() {

    let cookie_verified = false;
    const cUsername = CookieHandling.getCookie("username");
    const password = CookieHandling.getCookie("password");
    // Log the user in automatically if cookie can be verified.
    if (cUsername && password){
        if (registeredUser.DoUserAndPasswordMatch(cUsername, password)
            || registeredUser.doEmailAndPasswordMatch(cUsername, password)){
            cookie_verified = true;
            // Extend cookie TTL back to a week.
            CookieHandling.setCookie("username", cUsername, 7);
            CookieHandling.setCookie("password", password, 7);
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
