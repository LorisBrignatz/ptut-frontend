import axios from 'axios';
import authHeader from './auth-header';
import {BACKEND} from "@/api";


class UserService {
    getPublicContent() {
        return axios.get(BACKEND + '/test/all');
    }

    getUserBoard() {
        return axios.get(BACKEND + 'test/user', { headers: authHeader() });
    }

    getModeratorBoard() {
        return axios.get(BACKEND + 'test/mod', { headers: authHeader() });
    }

    getAdminBoard() {
        return axios.get(BACKEND + 'test/admin', { headers: authHeader() });
    }
}

export default new UserService();