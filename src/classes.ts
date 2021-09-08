class User {
    name: String;
    private password: string;
    email: string;
    age: number;

    constructor(name: string, password: string, email: string, age: number){
        this.name = name;
        this.password = password;
        this.email = email;
        this.age = age;
    }

    checkPassword(){
        if(this.password.length > 5){
            console.log("Password is long enough")
        }else{
            console.log("Password is too short")
        }
    }
}

class Member extends User{
    id: number;
    constructor(id: number, name: string, password: string, email: string, age: number){
        super(name, password, email, age);
        this.id = id;
    }
    getId(){
        console.log(this.id);
    }
}

const christian = new User("Christian", "Lun", "christian@drakryggen.com", 31);

console.log(christian.name);

christian.checkPassword();

const carl = new Member(123456789, "Carl", "gitarrkungen", "carl@gmail.com", 28);

console.log(carl.id);

carl.checkPassword()

carl.getId()