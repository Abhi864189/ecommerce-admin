import axios from "axios";
import { IAuthCred } from "../interfaces/auth";

const baseUrl = 'http://localhost:5000/api'

export const loginAdminService = async (cred: IAuthCred) => {
    return await axios.post(`${baseUrl}/auth/login-admin`, cred);
}