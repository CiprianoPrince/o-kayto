import { apiSlice } from '../../app/api/apiSlice';

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        signin: builder.mutation({
            query: (credentials) => ({
                url: '/auth',
                method: 'POST',
                body: { ...credentials },
            }),
        }),
        signup: builder.mutation({
            query: (credentials) => ({
                url: '/register',
                method: 'POST',
                body: { ...credentials },
            }),
        }),
        refreshToken: builder.query({
            query: () => ({
                url: '/refresh',
                method: 'GET',
            }),
        }),
        signout: builder.query({
            query: () => ({
                url: '/logout',
                method: 'GET',
            }),
        }),
    }),
});

export const { useSigninMutation, useSignupMutation, useRefreshTokenQuery, useSignoutQuery } =
    authApiSlice;
