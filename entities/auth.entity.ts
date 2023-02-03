import {User} from "@firebase/auth";

export interface RegisterData {
    email: string
    password: string
}

export type UserMeta = Pick<User, 'uid' | 'displayName' | 'email'>
