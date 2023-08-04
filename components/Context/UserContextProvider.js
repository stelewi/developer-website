import {createContext, useEffect, useState} from "react";
import {anonymousUserRequest, getJwtToken, apiLogoutUser, apiResourceRequest} from "src/api/api-client";
import isServer from "src/utils/isServer";

export const UserContext = createContext();

const UserContextProvider = (props) => {
    // note, refresh token is stored in an httpOnly cookie, and the jwtToken is very short-lived
    const [ user, setUser ] = useState(null);

    const loginAsAnonymousUser = () => {
        anonymousUserRequest().then((user) => setUser(user))
    }

    const logoutUser = () => {
        apiLogoutUser().then(() => setUser(null));
    }

    const init = () => {
        if(isServer() || getJwtToken() === null) {
            return;
        }

        apiResourceRequest('/me')
            .then(me => setUser(me))
            .catch(e => apiLogoutUser())
    }

    useEffect(init, []);

    return (
        <UserContext.Provider value={ {user, loginAsAnonymousUser, logoutUser} }>
            { props.children }
        </UserContext.Provider>
    );

}

export default UserContextProvider;