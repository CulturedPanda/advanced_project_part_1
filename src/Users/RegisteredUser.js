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
        RegisteredUser.registeredUsers.push(this);
    }

    static DoesUserExist(username){
        return RegisteredUser.registeredUsers.find(element => element.username === username) === undefined;

    }

    static DoUserAndPasswordMatch(username, password){
        return RegisteredUser.registeredUsers.find(element =>
            element.username === username && element.password === password) !== undefined;
    }

    static doEmailAndPasswordMatch(email, password){
        return RegisteredUser.registeredUsers.find(element =>
            element.email === email && element.password === password) !== undefined;
    }
}

export default RegisteredUser;