import { IUser } from "../pages/PostsApp/PostApp.interfaces";

interface ApiError extends Error { //mock error type since jsonplaceholder doesn't have any error throw mechanism
    status: number;
    message: string;
}

const _api = "https://jsonplaceholder.typicode.com";

export const getPosts = async (page = 1): Promise<Response> => {
    try {
        const responsePosts = await fetch(`${_api}/posasdasdts?_limit=${5}&_page=${page}`);

        if (!responsePosts.ok) {
            throw new Error(`HTTP error! status: ${responsePosts.status}`);
        }

        return responsePosts;
    } catch (e) {
        throw new Error(`Error fetching posts: ${(e as ApiError).message}`);
    }
}

export const getUser = async (userId: number): Promise<IUser> => {
    try {
        const responseUser = await fetch(`${_api}/users/${userId}`);

        if (!responseUser.ok) {
            throw new Error(`HTTP error! status: ${responseUser.status}`);
        }

        const userData: IUser = await responseUser.json();

        return userData;
    } catch (e) {
        throw new Error(`Error fetching user: ${(e as ApiError).message}`);
    }
}