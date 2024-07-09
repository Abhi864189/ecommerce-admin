export interface IAuthCred {
    email: string;
    password: string;
}

export interface IUser {
    name: string;
    email: string;
    mobile: string;
    isAdmin: boolean;
}

export interface ILogin extends IUser {
    token: string;
};

export interface IAuthInitialState {
    token: string;
    user: IUser;
    loading: boolean;
    error: any;
}