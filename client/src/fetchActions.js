

const usersUrl = `http://localhost:8080/users`;
const postsUrl = `http://localhost:8080/posts`;

const fetchUsers = async () => {
    const response = await fetch(usersUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const users = await response.json();
    return users;
};


const fetchPosts = async (userId) => {
    let url = new URL(postsUrl)
    url.searchParams.append("userId", userId)
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const posts = await response.json();
    return posts;
}

export { fetchUsers, fetchPosts };