import RegisteredUser from "./RegisteredUser";
import Tokens from "./Tokens";

class PendingUser {

    static pendingUsers = [{
        username: "Yuval", password: "1234", email: "yuvaluner@gmail.com", phone: null,
        dateOfBirth: null, nickname: "Yuval", gender: null, secretQuestion: null, timeCreated: null,
        verString: "123456"
    }];

    constructor(user) {
        this.username = user.username;
        this.password = user.password;
        this.email = user.email;
        this.phone = user.phone;
        this.nickname = user.nickname;
        this.secretQuestion = user.secretQuestion;
    }

    static async signUp(pendingUser){
        let response = await fetch("https://localhost:7031/api/PendingUsers", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(pendingUser),
        })
        return response.ok;
    }

    static generateRandomString() {
        let verString = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let length = chars.length;
        for (let i = 0; i < 6; i++) {
            verString += chars.charAt(Math.floor(Math.random() * length));
        }
        return verString;
    }

    static async doesUserExistByUsername(username) {
        let res = await fetch("https://localhost:7031/api/PendingUsers/doesUserExistByUsername/"
            + username, {
            method: "GET",
        })
        if (res.ok){
            let text = await res.text();
            return text === "true";
        }
        return null;
    }

    static async doesUserExistByEmail(email){
        let res = await fetch("https://localhost:7031/api/RegisteredUsers/doesUserExistByEmail/"
            + email, {
            method: "GET",
        })
        if (res.ok){
            let text = await res.text();
            return text === "true";
        }
        return null;
    }

    static async doesUserExistByPhoneNumber(phoneNumber){
        let res = await fetch("https://localhost:7031/api/RegisteredUsers/doesUserExistByPhone/"
            + phoneNumber, {
            method: "GET",
        })
        if (res.ok){
            let text = await res.text();
            return text === "true";
        }
        return null;
    }

    static async renewCode(username) {
        let res = await fetch("https://localhost:7031/api/PendingUsers/" + username,{
            method: "PUT"
        });
        return res.ok;
    }

    static async canVerify(username, userInput) {
        let res = await fetch("https://localhost:7031/api/PendingUsers/"
            + username + "?verificationCode=" + userInput);
        if (res.ok){
            Tokens.accessToken = await res.text();
            console.log(Tokens.accessToken);
            return true;
        }
        return false;
    }

    static async addUser() {
        let response = await fetch("https://localhost:7031/api/RegisteredUsers/signUp", {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + Tokens.accessToken,
            },
        })
        return response.ok;
    }

    static timeoutUsers() {
        let current = new Date();
        PendingUser.pendingUsers = PendingUser.pendingUsers.filter(element => current - element.timeCreated < 1200000);
    }
}

export default PendingUser;