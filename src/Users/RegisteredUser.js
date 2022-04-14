import PendingUser from "./PendingUser";
import person from "../Resources/person-circle.svg"

class RegisteredUser{

    static registeredUsers = [
        {username:"Alice", password:"1234", email: "alice@foo.com",
        phone: null, dateOfBirth: null, nickname: "Alice", secretQuestions: null, gender: "female", verCode: "111222",
            img:null, description: "Ha-ha RSA go BRRRRRRRRRRRRRRRRRRR", contacts: [], lastSeen: new Date(), nickNum: "4512"},
        {username: "Bob", password: "5678", email: null, phone: null, dateOfBirth: null, nickname: "Bob",
            secretQuestions: null, gender: "male", verCode: "112233", img: null, description: "Alice y r u like this",
            lastSeen: new Date(), contacts: [], nickNum: "3532", conversations: []},
        {username: "Panda", password: "2468", email: null, phone: null, dateOfBirth: null, nickname: "Panda",
            secretQuestions: {question: "1",answer: "PandaES"}, gender: null, verCode: "445566", img:null,
        contacts: [{name: "Alice", lastSeen: new Date()}, {name: "Bob", lastSeen: new Date()}, {name: "Beb", lastSeen: new Date()},
            {name: "Brob", lastSeen: new Date()}, {name: "Bdob", lastSeen: new Date()}, {name: "Baob", lastSeen: new Date()},
            {name: "Baob", lastSeen: new Date()}], lastSeen: new Date(), nickNum: "5113",
        conversations: [{with: "Alice", messages: [{sender: true, type:"text", time: new Date(), content: "Hello"},
                {sender: false, type:"text", time: new Date(), content: "Yoooo"}]},
            {with: "Bob", messages: [{sender: true, type:"text", time: new Date(), content: "YOU ARE BOB"},
                    {sender: false, type:"text", time: new Date(), content: "YES I AM"}]}]},
        {username: "Beb", password: "5678", email: null, phone: null, dateOfBirth: null, nickname: "Beb",
            secretQuestions: null, gender: "male", verCode: "112233", img: null, description: "Alice y r u like this",
            lastSeen: new Date(), contacts: [], nickNum: "6167", conversations: []},
        {username: "Bab", password: "5678", email: null, phone: null, dateOfBirth: null, nickname: "Bab",
            secretQuestions: null, gender: "male", verCode: "112233", img: null, description: "Alice y r u like this",
            lastSeen: new Date(), nickNum: "8667" ,contacts: [], conversations: []},
        {username: "Blob", password: "5678", email: null, phone: null, dateOfBirth: null, nickname: "Blob",
            secretQuestions: null, gender: "male", verCode: "112233", img: null, description: "Alice y r u like this",
            lastSeen: new Date(), nickNum: "4677", contacts: [], conversations: []},
        {username: "Brob", password: "5678", email: null, phone: null, dateOfBirth: null, nickname: "Brob",
            secretQuestions: null, gender: "male", verCode: "112233", img: null, description: "Alice y r u like this",
            lastSeen: new Date(), nickNum: "1245" , contacts: [], conversations: []},
        {username: "Bdob", password: "5678", email: null, phone: null, dateOfBirth: null, nickname: "Bdob",
            secretQuestions: null, gender: "male", verCode: "112233", img: null, description: "Alice y r u like this",
            lastSeen: new Date(), nickNum: "7124" , contacts: [], conversations: []},
        {username: "Baob", password: "5678", email: null, phone: null, dateOfBirth: null, nickname: "Baob",
            secretQuestions: null, gender: "male", verCode: "112233", img: null, description: "Alice y r u like this",
            lastSeen: new Date(), nickNum: "3789" , contacts: [], conversations: []},
        {username: "Badob", password: "5678", email: null, phone: null, dateOfBirth: null, nickname: "Badob",
            secretQuestions: null, gender: "male", verCode: "112233", img: null, description: "Alice y r u like this",
            lastSeen: new Date(), nickNum: "1852" , contacts: [], conversations: []}];

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

    static generateNickNum(){
        let nickNum = '';
        let chars = '0123456789';
        let length = chars.length;
        for (let i = 0; i < 4; i++) {
            nickNum += chars.charAt(Math.floor(Math.random() * length));
        }
        return nickNum;
    }

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

    static updateProfileImg(username, url){
        let user = JSON.parse(sessionStorage.getItem(username + "log"));
        user.img = url;
        RegisteredUser.updateUser(user);
    }

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

    static addMessageToConvo(username, convoWith, message){
        let user = JSON.parse(sessionStorage.getItem(username + "log"));
        user.conversations.find(x=>x.with===convoWith).messages.push(message);
        RegisteredUser.updateUser(user);
        let otherUser = JSON.parse(sessionStorage.getItem(convoWith + "log"));
        message.sender = !message.sender;
        otherUser.conversations.find(x=>x.with===username).messages.push(message)
        otherUser.contacts.find(x=>x.name===username).lastSeen = new Date();
        RegisteredUser.updateUser(otherUser)
    }

    static getNickNum(username){
        let user = JSON.parse(sessionStorage.getItem(username + "log"));
        return user.nickNum;
    }

    static getNickname(username){
        let user = JSON.parse(sessionStorage.getItem(username + "log"));
        return user.nickname;
    }

    static getDescription(username){
        let user = JSON.parse(sessionStorage.getItem(username + "log"));
        return user.description;
    }

    static DoesUserExist(username){
        return (sessionStorage.getItem(username + "log"));
    }

    static getLastSeen(username, contact){
        let user = JSON.parse(sessionStorage.getItem(username + "log"));
        let lastSeen = user.contacts.find(x=>x.name===contact).lastSeen;
        return Date.parse(lastSeen);
    }

    static canVerify(username, input){
        let user = JSON.parse(sessionStorage.getItem(username + "log"));
        if (input === "111111" || input === user.verCode ){
            user.verCode = null;
            RegisteredUser.updateUser(user);
            return true;
        }
        return false;
    }

    static getContacts(username){
        let user = JSON.parse(sessionStorage.getItem(username + "log"));
        let contacts = []
        user.contacts.forEach(x => contacts.push(x.name));
        return contacts;
    }

    static isAlreadyContact(username, contact){
        let user = JSON.parse(sessionStorage.getItem(username + "log"));
        return user.contacts.find(x=>x===contact);
    }

    static updatePassword(username, newPassword){
        let user = JSON.parse(sessionStorage.getItem(username + "log"));
        user.password = newPassword;
        RegisteredUser.updateUser(user);
    }

    static updateUser(user){
        sessionStorage.removeItem(user.username + "log");
        sessionStorage.removeItem(user.email + "log");
        sessionStorage.setItem(user.username + "log", JSON.stringify(user));
        sessionStorage.setItem(user.email + "log", JSON.stringify(user));
    }

    static generateVerCode(username){
        let user = JSON.parse(sessionStorage.getItem(username + "log"));
        user.verCode = PendingUser.generateVerificationCode();
        RegisteredUser.updateUser(user);
    }

    static VerifySecretQuestion(username, questionNum, answer){
        let user = JSON.parse(sessionStorage.getItem(username + "log"));
        return (user && user.secretQuestions.question === questionNum && user.secretQuestions.answer === answer);
    }

    static DoUserAndPasswordMatch(username, password){
        let user = JSON.parse(sessionStorage.getItem(username + "log"));
        return (user && user.password === password);
    }

    static doEmailAndPasswordMatch(email, password){
        let user = JSON.parse(sessionStorage.getItem(email + "log"));
        return (user && user.password === password);
    }

}

export default RegisteredUser;