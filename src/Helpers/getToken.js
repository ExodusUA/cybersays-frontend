function getToken() {
    let token = localStorage.getItem('token');

    if (!token) return 'null'

    return token;

}

export default getToken;