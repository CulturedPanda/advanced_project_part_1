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
        sessionStorage.setItem(this.username, JSON.stringify(this));
        sessionStorage.setItem(this.email, JSON.stringify(this));
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
        let user = JSON.parse(sessionStorage.getItem(username));
        user.verString = PendingUser.generateVerificationCode();
    }

    static canVerify(username, userInput){
        let user = JSON.parse(sessionStorage.getItem(username));
        return user.verString === userInput;
    }

    static addUser(username){
        let user = JSON.parse(sessionStorage.getItem(username));
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