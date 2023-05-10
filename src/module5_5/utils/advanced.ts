// Properties
interface Model<TData, TMethod> {
    data: TData;
    method: TMethod;
}

interface IUser {
    firstName: string;
    lastName: string;
}

// Methods
interface IMethods {
    fullName(): string;
}

type model = Model<IUser, IMethods>

class User implements model {
    data: IUser;
    method: IMethods;

    constructor(firstName: string, lastName: string) {
        this.data = { firstName, lastName }
        this.method = {
            fullName: () => `${firstName} ${lastName}`
        }
    }
}

const user1 = new User("Abdul", "Kayum")
console.log(user1.method.fullName())