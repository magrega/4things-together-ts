export interface IUser {
    name: string;
    address: {
        city: string;
        street: string;
        suite: string;
    };
    email: string;
    phone: string;
}