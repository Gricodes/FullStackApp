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

export const CreatePage = {
    generateApi(from, token) {
        return (
            axios.post(`/api/link/generate`, {from: from}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(response => {
                return response.data
            }).catch((error) => {
                if (error.response) {
                    return error.response.data;
                }
            })
        )
    },
    getLinksIdApi(linkId, token) {
        return (
            axios.get(`/api/link/${linkId}`,{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(response => {

                return response.data
            }).catch((error) => {
                if (error.response) {
                    return error.response.data;
                }
            })
        )
    },
};