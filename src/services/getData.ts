import { IUser } from "../pages/PostsApp/PostApp.interfaces";

const _api = "https://jsonplaceholder.typicode.com";

export const getPosts = async (page = 1): Promise<Response> => {
    return await fetch(`${_api}/posts?_limit=${5}&_page=${page}`);
}

// export const getUser = async (userId: number): Promise<IUser> => {
//     return await fetch(`${_api}/users/${userId}`).then(user => user.json());
// }

interface ApiError extends Error {
    status: number;
    message: string;
}

export const getUser = async (userId: number): Promise<IUser> => {
    try {
        const response = await fetch(`${_api}/userss/${userId}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const userData: IUser = await response.json();

        return userData;
    } catch (e) {        
        throw new Error(`Error fetching user: ${(e as ApiError).message}`);
    }
}