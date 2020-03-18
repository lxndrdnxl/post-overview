import React, { useState } from "react";

const UsersContext = React.createContext([{}, () => {}]);

const UsersProvider = props => {
    const [state, setState] = useState({
        users: [],
        posts: [],
        selectedUser: null
    });

    return (
        <UsersContext.Provider value={[state, setState]}>
            {props.children}
        </UsersContext.Provider>
    );
};

export { UsersContext, UsersProvider };