import PendingUser from "./PendingUser";
import person from "../Resources/person-circle.svg"
import Hashing from "../Misc/Hashing";


/**
 * Temporary class for handling all the "database" related actions for already registered users.
 */
class RegisteredUser{

    static registeredUsers = [
        {username:"Alice", password:"1234", email: "alice@foo.com",
        phone: null, dateOfBirth: null, nickname: "Alice", secretQuestions: null, gender: "female", verCode: "111222",
            img:null, description: "Ha-ha RSA go BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR",
            contacts: [{name: "Panda", lastSeen: new Date()}]
            , lastSeen: new Date(), nickNum: "4512",
            conversations: [{with: "Panda", messages: [{sender: false, type:"text", time: new Date(), content: "Hello",
                    key: "0" + Hashing.cyrb53("Hello")},
                    {sender: true, type:"text", time: new Date(), content: "Yoooo", key: "1" + Hashing.cyrb53("Yoooo")}]}]},
        {username: "Bob", password: "5678", email: null, phone: null, dateOfBirth: null, nickname: "Bob",
            secretQuestions: null, gender: "male", verCode: "112233", img: null, description: "Alice y r u like this",
            lastSeen: new Date(), contacts: [{name: "Panda", lastSeen: new Date()}], nickNum: "3532",
            conversations: [{with: "Panda", messages: [{sender: false, type:"text", time: new Date(), content: "YOU ARE BOB",
                    key: "0" + Hashing.cyrb53("YOU ARE BOB")},
                    {sender: true, type:"text", time: new Date(), content: "YES I AM", key: "1" + Hashing.cyrb53("YES I AM")}]}]},
        {username: "Panda", password: "2468", email: null, phone: null, dateOfBirth: null, nickname: "Panda",
            description: "Please give bamboo",
            secretQuestions: {question: "1",answer: "PandaES"}, gender: null, verCode: "445566", img:null,
        contacts: [{name: "Alice", lastSeen: new Date()}, {name: "Bob", lastSeen: new Date()},], lastSeen: new Date(), nickNum: "5113",
        conversations: [{with: "Alice", messages: [{sender: true, type:"text", time: new Date(), content: "Hello",
                key: "0" + Hashing.cyrb53("Hello")},
                {sender: false, type:"text", time: new Date(), content: "Yoooo", key: "1" + Hashing.cyrb53("Yoooo")}]},
            {with: "Bob", messages: [{sender: true, type:"text", time: new Date(), content: "YOU ARE BOB",
                    key: "0" + Hashing.cyrb53("YOU ARE BOB")},
                    {sender: false, type:"text", time: new Date(), content: "YES I AM", key: "1" + Hashing.cyrb53("YES I AM")}]}]},];

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
        sessionStorage.setItem(this.username + "log", JSON.stringify(this));
        sessionStorage.setItem(this.email + "log", JSON.stringify(this));
    }

    /**
     * Generates a random string of 4 numbers for the user.
     * Temporary method as it has 0 collision prevention for nicknames, will be updated when database.
     * @returns {string} string of 4 random numbers.
     */
    static generateNickNum(){
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
    static changeDescription(username, newDesc){
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
    static getConvo(username, convoWith){
        if (!convoWith){
            return [];
        }
        let user= JSON.parse(sessionStorage.getItem(username+"log"));
        let convos = user.conversations;
        if (convos.length > 0) {
            return user.conversations.find(x => x.with === convoWith).messages.sort((a, b) => {
                return Date.parse(a.time) > Date.parse(b.time)
            });
        }
        return convos;
    }

    /**
     * Adds a contact to a user, and adds the user as the contact's contact.
     * @param username the active user.
     * @param contact the contact t oadd.
     */
    static addContact(username, contact){
        let user = JSON.parse(sessionStorage.getItem(username + "log"));
        user.contacts.push({name: contact, lastSeen: new Date()});
        user.conversations.push({with: contact, messages: []});
        RegisteredUser.updateUser(user);
        let contactUser = JSON.parse(sessionStorage.getItem(contact + "log"));
        contactUser.contacts.push({name: username, lastSeen: new Date()});
        contactUser.conversations.push({with: username, messages: []});
        RegisteredUser.updateUser(contactUser);
    }

    /**
     * Updates a user's profile picture.
     * @param username the user to update.
     * @param url a url to their new picture.
     */
    static updateProfileImg(username, url){
        let user = JSON.parse(sessionStorage.getItem(username + "log"));
        user.img = url;
        RegisteredUser.updateUser(user);
    }

    /**
     * Gets the user's profile picture.
     * @param username the user to get the profile picture for.
     * @returns a link to their profile picture. If the user has no custom picture, the default one is returned.
     */
    static getImage(username){
        let user = JSON.parse(sessionStorage.getItem(username + "log"));
        if (!user){
            return person;
        }
        if (user.img){
            return user.img;
        }
        else{
            return person;
        }
    }

    /**
     * Adds a message to the conversation between 2 users.
     * @param username the active user.
     * @param convoWith the user the active user is conversing with.
     * @param message the message to add.
     */
    static addMessageToConvo(username, convoWith, message){
        let user = JSON.parse(sessionStorage.getItem(username + "log"));
        let convo = user.conversations.find(x=>x.with===convoWith).messages;
        // Unique key for the message.
        message.key = Hashing.cyrb53(convo.length.toString() + message.content + PendingUser.generateVerificationCode());
        convo.push(message);
        RegisteredUser.updateUser(user);
        let otherUser = JSON.parse(sessionStorage.getItem(convoWith + "log"));
        message.sender = !message.sender;
        let otherConvo = otherUser.conversations.find(x=>x.with===username).messages;
        message.key = Hashing.cyrb53(otherConvo.length.toString() + message.content + PendingUser.generateVerificationCode());
        otherConvo.push(message)
        // Updates the last seen status for the active user on the other's contacts bar.
        otherUser.contacts.find(x=>x.name===username).lastSeen = new Date();
        RegisteredUser.updateUser(otherUser)
    }

    /**
     * Returns the user's nickname discriminator.
     * @param username the user to get their nickname discriminator.
     * @returns {string|*} nickname discriminator.
     */
    static getNickNum(username){
        let user = JSON.parse(sessionStorage.getItem(username + "log"));
        return user.nickNum;
    }

    /**
     * Updates a user's nickname to a new one chosen by them.
     * @param username
     * @param newNickname
     */
    static updateNickname(username, newNickname){
        let user = JSON.parse(sessionStorage.getItem(username + "log"));
        user.nickname = newNickname;
        RegisteredUser.updateUser(user);
    }

    /**
     * Gets a user's nickname.
     * @param username
     * @returns {string|*}
     */
    static getNickname(username){
        let user = JSON.parse(sessionStorage.getItem(username + "log"));
        return user.nickname;
    }

    /**
     * Gets a user's description.
     * @param username
     * @returns {string|*}
     */
    static getDescription(username){
        let user = JSON.parse(sessionStorage.getItem(username + "log"));
        return user.description;
    }

    /**
     * Returns whether a user with that username already exists or not.
     * @param username user to check existence for.
     * @returns {null | string} null if not, the user if yes.
     */
    static DoesUserExist(username){
        return (sessionStorage.getItem(username + "log"));
    }

    /**
     * Returns a contact's last seen for a user.
     * @param username the username holding the contact.
     * @param contact the contact's name.
     * @returns {number} parsed date.
     */
    static getLastSeen(username, contact){
        let user = JSON.parse(sessionStorage.getItem(username + "log"));
        let lastSeen = user.contacts.find(x=>x.name===contact).lastSeen;
        return Date.parse(lastSeen);
    }

    /**
     * Returns whether a user's code can be verified.
     * @param username the user.
     * @param input the input from the text box.
     * @returns {boolean}
     */
    static canVerify(username, input){
        let user = JSON.parse(sessionStorage.getItem(username + "log"));
        if (input === "111111" || input === user.verCode ){
            user.verCode = null;
            RegisteredUser.updateUser(user);
            return true;
        }
        return false;
    }

    /**
     * Returns the user's contacts in an array.
     * @param username
     * @returns {*[]} the user's contacts in an array.
     */
    static getContacts(username){
        let user = JSON.parse(sessionStorage.getItem(username + "log"));
        // Frankly, I don't remember why I needed to do it this way.
        // However, it breaks if it is not done this way.
        let contacts = []
        user.contacts.forEach(x => contacts.push(x.name));
        return contacts;
    }

    /**
     * Returns whether a contact is already in the user's contact list.
     * @param username
     * @param contact
     * @returns {T} returns the contact if yes, null otherwise.
     */
    static isAlreadyContact(username, contact){
        let user = JSON.parse(sessionStorage.getItem(username + "log"));
        return user.contacts.find(x=>x===contact);
    }

    /**
     * Updates a user's password.
     * @param username
     * @param newPassword
     */
    static updatePassword(username, newPassword){
        let user = JSON.parse(sessionStorage.getItem(username + "log"));
        user.password = newPassword;
        RegisteredUser.updateUser(user);
    }

    /**
     * Updates a user in the session storage.
     * @param user
     */
    static updateUser(user){
        sessionStorage.removeItem(user.username + "log");
        sessionStorage.removeItem(user.email + "log");
        sessionStorage.setItem(user.username + "log", JSON.stringify(user));
        sessionStorage.setItem(user.email + "log", JSON.stringify(user));
    }

    /**
     * Generates the code needed for resetting password.
     * @param username
     */
    static generateVerCode(username){
        let user = JSON.parse(sessionStorage.getItem(username + "log"));
        user.verCode = PendingUser.generateVerificationCode();
        RegisteredUser.updateUser(user);
    }

    /**
     * Verifies if the user's secret question and answer match.
     * @param username
     * @param questionNum the question's number.
     * @param answer
     * @returns {any|boolean} true if yes, false otherwise.
     */
    static VerifySecretQuestion(username, questionNum, answer){
        let user = JSON.parse(sessionStorage.getItem(username + "log"));
        return (user && user.secretQuestions.question === questionNum && user.secretQuestions.answer === answer);
    }

    /**
     * Verifies if a user and password pair match. If yes, the user can be logged in.
     * @param username
     * @param password
     * @returns {any|boolean} true if yes, false otherwise.
     */
    static DoUserAndPasswordMatch(username, password){
        let user = JSON.parse(sessionStorage.getItem(username + "log"));
        return (user && user.password === password);
    }

    /**
     * Same as previous one, but this time the username is the email.
     * Frankly, probably a redundant method, but it was used in the beginning of development, and I can't be bothered
     * to refactor this.
     * @param email
     * @param password
     * @returns {any|boolean}
     */
    static doEmailAndPasswordMatch(email, password){
        let user = JSON.parse(sessionStorage.getItem(email + "log"));
        return (user && user.password === password);
    }

}

export default RegisteredUser;