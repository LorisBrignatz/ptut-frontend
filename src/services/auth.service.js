import axios from 'axios';
import {BACKEND} from "@/api";


class AuthService {
    login(user) {
        return axios
            .post(BACKEND + '/auth/signin', {
                username: user.username,
                password: user.password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');

    }

    register(user) {
        return axios.post(BACKEND + '/auth/signup', {
            username: user.username,
            email: user.email,
            password: user.password,
            nom: user.nom,
            prenom: user.prenom
        });
    }
}

export default new AuthService();