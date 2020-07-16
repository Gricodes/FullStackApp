import axios from 'axios'

export const AuthPage = {
    registerApi(form) {
        return (
            axios.post(`/api/auth/register`, {...form}).then(response => {
                return response.data
            }).catch((error) => {
                if (error.response) {
                    return error.response.data
                }
            })
        )
    },
    loginApi(form) {
        return (
            axios.post(`/api/auth/login`, {...form}).then(response => {
                return response.data
            }).catch((error) => {
                if (error.response) {
                    return error.response.data;
                }
            })
        )
    },
};