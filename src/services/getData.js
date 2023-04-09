const _api = "https://jsonplaceholder.typicode.com";

export const getPosts = async (page = 1) => {
    return await fetch(`${_api}/posts?_limit=${5}&_page=${page}`);
}

export const getUser = async (userId) => {
    return await fetch(`${_api}/users/${userId}`).then(user => user.json());
}
