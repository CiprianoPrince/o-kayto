import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import useRefreshToken from '../hooks/useRefreshToken';
// import useAuth from '../hooks/useAuth';
// import useLocalStorage from '../hooks/useLocalStorage';
import { useRefreshTokenQuery } from '../../features/auth/authApiSlice';
import { selectAccessToken, setCredentials } from '../../features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const PersistAuth = () => {
    const [isLoading, setIsLoading] = useState(true);
    // const refresh = useRefreshToken();
    // const { auth } = useAuth();
    // const [persist] = useLocalStorage('persist', false);

    const result = useRefreshTokenQuery();

    const currentToken = useSelector(selectAccessToken);
    const dispatch = useDispatch();

    useEffect(() => {
        let isMounted = true;
        const verifyRefreshToken = async () => {
            try {
                if (result?.data) {
                    dispatch(setCredentials());
                }
            } catch (err) {
                console.error(err);
            } finally {
                isMounted && setIsLoading(false);
            }
        };

        // persist added here AFTER tutorial video
        // Avoids unwanted call to verifyRefreshToken
        // !auth?.accessToken && persist ? verifyRefreshToken() : setIsLoading(false);
        !currentToken ? verifyRefreshToken() : setIsLoading(false);

        return () => (isMounted = false);
    }, []);

    // useEffect(() => {
    //     console.log(`isLoading: ${isLoading}`);
    //     console.log(`aT: ${JSON.stringify(accessToken)}`);
    // }, [isLoading, accessToken]);

    // return <>{!persist ? <Outlet /> : isLoading ? <p>Loading...</p> : <Outlet />}</>;
    return <>{isLoading ? <p>Loading...</p> : <Outlet />}</>;
};

export default PersistAuth;
