const baseURL = 'http://localhost:5000/api/wonders/';

const WondersService = {
    getWonders() {
        return fetch(baseURL)
        .then(res => res.json());
    }
};

export default WondersService;