import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL ?? null;

const getJwtToken = () => localStorage.getItem('jwtToken')
const setJwtToken = (jwtToken) => localStorage.setItem('jwtToken', jwtToken)
const getRefreshToken = () => localStorage.getItem('refreshToken')
const setRefreshToken = (refreshToken) => localStorage.setItem('refreshToken', refreshToken)

const anonymousUserRequest = async () => {

    const config = {
        baseURL,
        headers: {
            "Content-type": "application/json",
        },
    };

    const response = await axios.post('/anonymous-user-requests', {}, config);
    const { data: { newAnonymousUser, jwtToken, refreshToken } } = response;
    setRefreshToken(refreshToken);
    setJwtToken(jwtToken);

    return newAnonymousUser;
}

const refreshJwtToken = async () => {
    const config = {
        baseURL,
        headers: {
            "Content-type": "application/json",
        },
    };

    const response = await axios.post(
        '/token/refresh',
        { refresh_token: getRefreshToken() },
        config
    );
    localStorage.setItem('jwtToken', response.data.token);
}

const apiLogoutUser = async () => {
    const config = {
        baseURL,
        headers: {
            "Content-type": "application/json",
        },
    };

    try {
        await axios.post(
            '/token/invalidate',
            { refresh_token: getRefreshToken() },
            config
        );
    }
    catch (e) {
        console.error("Problem while invalidating refresh token");
        console.error(e);
    }

    setRefreshToken(null);
    setJwtToken(null);
}

const apiResourceRequest = async (
    path,
    method = 'GET',
    data = null,
    refreshTokenWhenExpired = true
) => {
    const config = {
        url: path,
        method,
        data,
        baseURL,
        headers: {
            "Content-type": "application/json",
            "Authorization": "Bearer " + getJwtToken()
        },
    };

    try {
        const response = await axios.request(config);
        return response.data ?? null;
    }
    catch (e) {
        const errorMessage = e.response?.data?.message;

        // JWT token has expired? Refresh token and recover...
        if(refreshTokenWhenExpired && errorMessage === 'Expired JWT Token') {
            await refreshJwtToken();
            return await apiResourceRequest(path, method, data, false);
        }

        throw e;
    }

    return null;
}

export { anonymousUserRequest, apiResourceRequest, refreshJwtToken, apiLogoutUser, getJwtToken };