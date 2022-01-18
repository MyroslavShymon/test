import {makeAutoObservable} from "mobx";
import {$host} from "../http";
import jwtDecode from "jwt-decode";
import {AxiosError} from "axios";

export interface IRole {
    id?: string
    title?: string
    description?: string
}

export interface IUser {
    id?: string
    name?: string;
    email?: string;
    mobile?: string;
    password?: string;
    roles?: IRole[];
}

export interface IJwtDecodedUser {
    email: string,
    exp: number,
    iat: number,
    id: string,
    roles: IRole[],
}

class User {
    public user!: IUser | null;
    public response!: any
    public token!: string;
    public isAdmin: boolean = false;

    constructor() {
        makeAutoObservable(this, {}, {deep: true});
    }

    public async registration({name, password, email, mobile}: IUser) {
        try {
            const response = await $host.post<{ token: string }>("auth/registration", {
                name, password, email, mobile
            })

            this.setToken(response.data.token)

            if (this.token) {
                localStorage.setItem('token_test', this.token)
                const {email, id, roles}: IJwtDecodedUser = jwtDecode(this.token)
                this.setUser({email, id, roles})
            }
        } catch (e: any) {
            this.response = e?.response?.data?.message[0]
        }
    }

    public async login({password, email}: IUser) {
        try {
            const response = await $host.post<{ token: string }>("auth/login", {
                password, email
            })

            this.setToken(response.data.token)

            if (this.token) {
                localStorage.setItem("token_test", this.token)
                const {email, id, roles}: IJwtDecodedUser = jwtDecode(this.token)
                roles.forEach(({title}) => {
                    if (title === "Admin") this.isAdmin = true
                })
                this.setUser({email, id, roles})
            }
        } catch (e: any) {
            const error = e?.response?.data?.message
            if (Array.isArray(error)) {
                this.response = error[0]
            } else
                this.response = error
        }
    }

    getToken(): string | null {
        const token = localStorage.getItem("token_test")

        if (token) {
            this.setToken(token)
            const {email, id, roles}: IJwtDecodedUser = jwtDecode(this.token)
            this.setUser({email, id, roles})
            roles.forEach(({title}) => {
                console.log("title", title)
                if (title === "Admin") this.isAdmin = true
            })
        }
        return this.token
    }

    public logout() {
        this.setToken("")
        this.setUser(null)
        this.isAdmin = false
        localStorage.removeItem("token_test")
    }


    setUser = (user: IUser | null) => {
        this.user = user
    }
    setResponse = (response: any) => {
        this.response = response
    }
    setToken = (token: string) => {
        this.token = token
    }
}

export default new User();
