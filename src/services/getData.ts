const _api = "https://jsonplaceholder.typicode.com";

type TUser = {
    name: string;
    address: {
        city: string,
        street: string,
        suite: string
    };
    email: string;
    phone: string;
}

export const getPosts = async (page = 1): Promise<Response> => {
    return await fetch(`${_api}/posts?_limit=${5}&_page=${page}`);
}

export const getUser = async (userId: number): Promise<TUser> => {
    return await fetch(`${_api}/users/${userId}`).then(user => user.json());
}
