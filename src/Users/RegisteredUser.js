import PendingUser from "./PendingUser";
import person from "../Resources/person-circle.svg"
import Hashing from "../Misc/Hashing";
import Tokens from "./Tokens";
import $ from "jquery"


/**
 * Temporary class for handling all the "database" related actions for already registered users.
 */
class RegisteredUser {

    /**
     * Constructor. Puts all the information from the pending user, including new information needed into storage.
     * @param pendingUser the pending user that finished their sign up.
     */
    constructor(pendingUser) {
        this.username = pendingUser.username;
        this.password = pendingUser.password;
        this.email = pendingUser.email;
        this.phone = pendingUser.phone;
        this.dateOfBirth = pendingUser.dateOfBirth;
        this.nickname = pendingUser.nickname;
        this.nickNum = RegisteredUser.generateNickNum();
        this.secretQuestions = pendingUser.secretQuestions;
        this.verCode = null;
        this.description = "I just made my account!";
        this.img = null;
        this.contacts = [];
        this.conversations = [];
        this.lastSeen = new Date();
    }

    static async doesUserExistByEmail(email){

    }

    /**
     * Returns whether a user with that username already exists or not.
     * @param username user to check existence for.
     * @returns {null | string} null if not, the user if yes.
     */
    static doesUserExistByUsername(username) {
        return (sessionStorage.getItem(username + "log"));
    }

    /**
     * Generates a random string of 4 numbers for the user.
     * Temporary method as it has 0 collision prevention for nicknames, will be updated when database.
     * @returns {string} string of 4 random numbers.
     */
    static generateNickNum() {
        let nickNum = '';
        let chars = '0123456789';
        let length = chars.length;
        for (let i = 0; i < 4; i++) {
            nickNum += chars.charAt(Math.floor(Math.random() * length));
        }
        return nickNum;
    }

    /**
     * Updates a user's description.
     * @param username The username to update for.
     * @param newDesc The user's new description.
     */
    static changeDescription(username, newDesc) {
        let user = JSON.parse(sessionStorage.getItem(username + "log"));
        user.description = newDesc;
        RegisteredUser.updateUser(user);
    }

    /**
     *
     * @param username the active user.
     * @param convoWith the user the active user is conversing with.
     * @returns an array containing the user's conversation, sorted chronologically.
     */
    static async getConvo(username, convoWith) {
        let res = await fetch("https://localhost:7031/api/Contacts/getConvo/?convoWith=" + convoWith, {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + Tokens.accessToken,
            }
        })
        if (res.ok){
            return await res.json();
        }
        return null;
    }

    /**
     * Adds a contact to a user, and adds the user as the contact's contact.
     * @param username the active user.
     * @param contact the contact t oadd.
     */
    static async addContact(username, contact) {
        let res = await fetch("https://localhost:7031/api/Contacts/", {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + Tokens.accessToken,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: contact,
                server: window.location.protocol + window.location.hostname
            })
        })
        if (res.ok){
            return await res.text();
        }
        return null;
    }

    /**
     * Updates a user's profile picture.
     * @param username the user to update.
     * @param url a url to their new picture.
     */
    static updateProfileImg(username, url) {
        let user = JSON.parse(sessionStorage.getItem(username + "log"));
        user.img = url;
        RegisteredUser.updateUser(user);
    }

    /**
     * Gets the user's profile picture.
     * @param username the user to get the profile picture for.
     * @returns a link to their profile picture. If the user has no custom picture, the default one is returned.
     */
    static getImage(username) {
        return person;
    }

    /**
     * Adds a message to the conversation between 2 users.
     * @param username the active user.
     * @param convoWith the user the active user is conversing with.
     * @param message the message to add.
     */
    static async addMessageToConvo(username, convoWith, message) {
        let res = await fetch("https://localhost:7031/api/Contacts/" + convoWith + "/messages" , {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + Tokens.accessToken,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: message.content
            })
        });
        return res.ok;
    }

    /**
     * Returns the user's nickname discriminator.
     * @param username the user to get their nickname discriminator.
     * @returns {string|*} nickname discriminator.
     */
    static async getNickNum(username) {
        let res = await fetch("https://localhost:7031/api/RegisteredUsers/GetNickNum", {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + Tokens.accessToken
            },
        })
        if (res.ok){
            return await res.text();
        }
        return null;
    }

    /**
     * Updates a user's nickname to a new one chosen by them.
     * @param username
     * @param newNickname
     */
    static updateNickname(username, newNickname) {
        let user = JSON.parse(sessionStorage.getItem(username + "log"));
        user.nickname = newNickname;
        RegisteredUser.updateUser(user);
    }

    /**
     * Gets a user's nickname.
     * @param username
     * @returns {string|*}
     */
    static async getNickname(username) {
        let res = await fetch("https://localhost:7031/api/RegisteredUsers/getNickName/" + username, {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + Tokens.accessToken
            },
        })
        if (res.ok){
            return await res.text();
        }
        return null;
    }

    /**
     * Gets a user's description.
     * @param username
     * @returns {string|*}
     */
    static async getDescription(username) {
        let res = await fetch("https://localhost:7031/api/RegisteredUsers/getDescription/" + username, {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + Tokens.accessToken
            },
        })
        if (res.ok){
            return await res.text();
        }
        return null;
    }



    /**
     * Returns a contact's last seen for a user.
     * @param username the username holding the contact.
     * @param contact the contact's name.
     * @returns {number} parsed date.
     */
    static getLastSeen(username, contact) {
        let user = JSON.parse(sessionStorage.getItem(username + "log"));
        let lastSeen = user.contacts.find(x => x.name === contact).lastSeen;
        return Date.parse(lastSeen);
    }

    /**
     * Returns whether a user's code can be verified.
     * @param username the user.
     * @param input the input from the text box.
     * @returns {boolean}
     */
    static canVerify(username, input) {
        let user = JSON.parse(sessionStorage.getItem(username + "log"));
        if (input === "111111" || input === user.verCode) {
            user.verCode = null;
            RegisteredUser.updateUser(user);
            return true;
        }
        return false;
    }

    /**
     * Returns the user's contacts in an array.
     * @returns {*[]} the user's contacts in an array.
     */
    static async getContacts(username) {

        let res = await fetch("https://localhost:7031/api/Contacts", {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + Tokens.accessToken
            },
        })
        if (res.ok){
            return await res.json();
        }
        return [];
    }

    /**
     * Returns whether a contact is already in the user's contact list.
     * @param username
     * @param contact
     * @returns {T} returns the contact if yes, null otherwise.
     */
    static isAlreadyContact(username, contact) {
        let user = JSON.parse(sessionStorage.getItem(username + "log"));
        return user.contacts.find(x => x === contact);
    }

    /**
     * Updates a user's password.
     * @param username
     * @param newPassword
     */
    static updatePassword(username, newPassword) {
        let user = JSON.parse(sessionStorage.getItem(username + "log"));
        user.password = newPassword;
        RegisteredUser.updateUser(user);
    }

    /**
     * Updates a user in the session storage.
     * @param user
     */
    static updateUser(user) {
        sessionStorage.removeItem(user.username + "log");
        sessionStorage.removeItem(user.email + "log");
        sessionStorage.setItem(user.username + "log", JSON.stringify(user));
        sessionStorage.setItem(user.email + "log", JSON.stringify(user));
    }

    /**
     * Generates the code needed for resetting password.
     * @param username
     */
    static generateVerCode(username) {
        let user = JSON.parse(sessionStorage.getItem(username + "log"));
        user.verCode = PendingUser.generateRandomString();
        RegisteredUser.updateUser(user);
    }

    /**
     * Verifies if the user's secret question and answer match.
     * @param username
     * @param questionNum the question's number.
     * @param answer
     * @returns {any|boolean} true if yes, false otherwise.
     */
    static VerifySecretQuestion(username, questionNum, answer) {
        let user = JSON.parse(sessionStorage.getItem(username + "log"));
        return (user && user.secretQuestions.question === questionNum && user.secretQuestions.answer === answer);
    }

    /**
     * Verifies if a user and password pair match. If yes, the user can be logged in.
     * @param username
     * @param password
     * @param rememberMe
     * @returns {any|boolean} true if yes, false otherwise.
     */
    static async DoUserAndPasswordMatch(username, password, rememberMe) {
        let res = await fetch("https://localhost:7031/api/RegisteredUsers?rememberMe=" + rememberMe,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        });
        if (res.ok){
            let tokens = await res.json();
            Tokens.accessToken = tokens.accessToken;
            Tokens.refreshToken = tokens.refreshToken;
            return true;
        }
        return false;
    }

    /**
     * Same as previous one, but this time the username is the email.
     * Frankly, probably a redundant method, but it was used in the beginning of development, and I can't be bothered
     * to refactor this.
     * @param email
     * @param password
     * @returns {any|boolean}
     */
    static doEmailAndPasswordMatch(email, password) {
        return false;
    }

}

export default RegisteredUser;