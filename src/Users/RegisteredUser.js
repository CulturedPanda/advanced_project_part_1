import PendingUser from "./PendingUser";

class RegisteredUser{

    static registeredUsers = [{username:"Alice", password:"1234", email: "alice@foo.com",
        phone: null, dateOfBirth: null, nickname: "Alice", secretQuestions: null, gender: "female"},
        {username: "Bob", password: "5678", email: null, phone: null, dateOfBirth: null, nickname: "Bob",
            secretQuestions: null, gender: "male"},
        {username: "Panda", password: "2468", email: null, phone: null, dateOfBirth: null, nickname: "Panda",
            secretQuestions: null, gender: null}];

    constructor(pendingUser) {
        this.username = pendingUser.username;
        this.password = pendingUser.password;
        this.email = pendingUser.email;
        this.phone = pendingUser.phone;
        this.dateOfBirth = pendingUser.dateOfBirth;
        this.nickname = pendingUser.nickname;
        this.gender = pendingUser.gender;
        this.secretQuestions = pendingUser.secretQuestions;
        sessionStorage.setItem(this.username + "log", JSON.stringify(this));
        sessionStorage.setItem(this.email + "log", JSON.stringify(this));
    }

    static DoesUserExist(username){
        return (sessionStorage.getItem(username + "log"));

    }

    static DoUserAndPasswordMatch(username, password){
        let user = JSON.parse(sessionStorage.getItem(username + "log"));
        return !!(user && user.password === password);

    }

    static doEmailAndPasswordMatch(email, password){
        let user = JSON.parse(sessionStorage.getItem(email + "log"));
        return !!(user && user.password === password);
    }
}

export default RegisteredUser;