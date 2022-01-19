const baseURL = 'http://localhost:5000/api/users/'

const UsersService = {
    getUsers () {
        return fetch(baseURL)
        .then(res => res.json());
    },

    postUser(payload) {
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
    }
};

export default UsersService;