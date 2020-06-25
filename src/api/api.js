import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "438b43d8-c9fc-4009-a5e7-db75e710334c"
    }
});


export const headerAPI = {
    authMe() {
       return instance.get('auth/me').then(response => response.data);
    }
};
//использую в ProfileContainer
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    }
};

export const usersAPI = {
    getUsers(pageSelected, pageSize) {
        return instance.get(`users?page=${pageSelected}&count=${pageSize}`).then(response => response.data);
    },

    followUser(userId) {
        return instance.post(`follow/${userId}`);
    },

    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`);
    }

};

