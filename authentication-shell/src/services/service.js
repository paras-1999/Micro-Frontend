import axios from "axios"
import { BehaviorSubject } from "rxjs";
const API_SERVER = "http://localhost:8080";
export const jwt = new BehaviorSubject(null);
export const loginCall = (username, password) =>
    axios.post(`${API_SERVER}/auth/login`,
        {
            username: username,
            password: password,
        }

    )
        .then((res) => {
            console.log(res.data.access_token)
            jwt.next(res.data.access_token);
            return res.data.access_token;
        });

export async function getProfile(token) {
    return await axios.get(`${API_SERVER}/authorized`, {
        headers: { "authorization": `Bearer ${token}` }
    });
}