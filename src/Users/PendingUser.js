class PendingUser{

    static pendingUsers = [];

    constructor(user) {
        this.username = user.username;
        this.password = user.password;
        this.email = user.email;
        this.phone = user.phone;
        this.dateOfBirth = user.dateOfBirth;
        this.nickname = user.nickname;
        this.time = new Date();
        this.verString = this.generateVerificationCode();
        PendingUser.pendingUsers.push(this);
    }

    generateVerificationCode(){
        let verString = "";
        for (let i = 0; i < 6; i++){
            verString += Math.floor(Math.random() * 10);
        }
        return verString;
    }

    timeoutUsers(){
        let current = new Date();
        PendingUser.pendingUsers = PendingUser.pendingUsers.filter(element => current - element.time < 1200000);
    }
}

export default PendingUser;