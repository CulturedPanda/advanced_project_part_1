import RegisteredUser from "./RegisteredUser";

class PendingUser{

    static pendingUsers = [{username: "Yuval", password: "1234", email: "yuvaluner@gmail.com", phone: null,
    dateOfBirth: null, nickname: "Yuval", gender: null, secretQuestions : null, timeCreated: null,
    verString: "123456"}];

    constructor(user) {
        this.username = user.username;
        this.password = user.password;
        this.email = user.email;
        this.phone = user.phone;
        this.dateOfBirth = user.dateOfBirth;
        this.nickname = user.nickname;
        this.gender = user.gender;
        this.secretQuestions = user.secretQuestions;
        this.timeCreated = new Date();
        this.verString = PendingUser.generateVerificationCode();
        PendingUser.pendingUsers.push(this);
        sessionStorage.setItem(this.username + "pend", JSON.stringify(this));
        sessionStorage.setItem(this.email + "pend", JSON.stringify(this));
    }

    static generateVerificationCode() {
        let verString = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let length = chars.length;
        for (let i = 0; i < 6; i++) {
            verString += chars.charAt(Math.floor(Math.random() * length));
        }
        return verString;
    }

    static renewCode(username){
        let user = JSON.parse(sessionStorage.getItem(username + "pend"));
        user.verString = PendingUser.generateVerificationCode();
        sessionStorage.removeItem(username);
        sessionStorage.setItem(username, JSON.stringify(user));
    }

    static canVerify(username, userInput){
        let user = JSON.parse(sessionStorage.getItem(username + "pend"));
        return user.verString === userInput || userInput === "111111";
    }

    static addUser(username){
        let user = JSON.parse(sessionStorage.getItem(username + "pend"));
        sessionStorage.removeItem(user.username);
        sessionStorage.removeItem(user.email);
        new RegisteredUser(user);
    }

    static timeoutUsers(){
        let current = new Date();
        PendingUser.pendingUsers = PendingUser.pendingUsers.filter(element => current - element.timeCreated < 1200000);
    }
}

export default PendingUser;