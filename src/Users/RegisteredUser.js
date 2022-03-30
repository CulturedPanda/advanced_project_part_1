class RegisteredUser{

    static registeredUsers = [{username:"Alice", password:"1234", email: null,
        phone: null, dateOfBirth: null, nickname: "Alice", secretQuestions: null},
        {username: "Bob", password: "5678", email: null, phone: null, dateOfBirth: null, nickname: "Bob", secretQuestions: null},
        {username: "Panda", password: "2468", email: null, phone: null, dateOfBirth: null, nickname: "Panda", secretQuestions: null}];

    constructor(pendingUser) {
        this.username = pendingUser.username;
        this.password = pendingUser.password;
        this.email = pendingUser.email;
        this.phone = pendingUser.phone;
        this.dateOfBirth = pendingUser.dateOfBirth;
        this.nickname = pendingUser.nickname;
        this.secretQuestions = Array(2);
        RegisteredUser.registeredUsers.push(this);
    }

    static isUniqueUser(username){
        return RegisteredUser.registeredUsers.find(element => element.username === username) === undefined;

    }

    static isSameUser(username, password){
        return RegisteredUser.registeredUsers.find(element =>
            element.username === username && element.password === password) !== undefined;
    }
}

export default RegisteredUser;