import { useContext } from "react";
import { UsersContext } from "./UsersProvider";
import { fetchUsers, fetchPosts } from "../fetchActions";

const useUsers = () => {
    const [state, setState] = useContext(UsersContext);

    const fetch = async () => {
        const users = await fetchUsers();
        setState(state => ({
            ...state,
            users: users
        }));
    }

    const select = async (index) => {
        const users = [...state.users];
        const selectedUser = users[index];
        const id = selectedUser.id;
        const posts = await fetchPosts(id);
        setState(state => ({
            ...state,
            selectedUser: selectedUser,
            posts: posts
        }));
    }

    return {
        users: state.users,
        posts: state.posts,
        selectedUser: state. selectedUser,
        fetch,
        select
    };
}

export default useUsers;
