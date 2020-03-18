import React, { useEffect } from "react";
import useUsers from "./useUsers";

const Users = () => {
    const { users, posts, selectedUser, fetch, select } = useUsers();

    useEffect(() => {
        fetch();
    }, []);


    if (selectedUser) {
    return (
        <div>
            <div className="row">
                <div className="list-group col-md-3">
                    {users.map((user, index) => (
                        <button key={user.id} onClick={e => select(index)} className="list-group-item list-group-item-action"> {user.name} </button>
                    ))}
                </div>
                <div className="list-group col-md-6">
                    <div className="row">
                        <p>Name: {selectedUser.name} Email: {selectedUser.email}</p>
                    </div>
                    <div className="row">
                        {posts.map((post, index) => (
                            <div key={post.id}> 
                                <h2>{post.title}</h2>
                                <p> {post.body} </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )}
    else {
        return (
            <div>
                <div className="row">
                    <div className="list-group col-md-3">
                        {users.map((user, index) => (
                            <button key={user.id} onClick={e => select(index)} className="list-group-item list-group-item-action"> {user.name} </button>
                        ))}
                    </div>
                    <div className="list-group col-md-6">
                        <div className="row">
                        </div>
                        <div className="row">
                            {posts.map((post, index) => (
                                <div key={post.id}> 
                                    <h2>{post.title}</h2>
                                    <p> {post.body} </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

export default Users;