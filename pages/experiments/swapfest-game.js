import Head from 'next/head';
import Layout from 'components/Layout';
import * as React from "react";
import Box from "@mui/material/Box";
import {useContext, useEffect} from "react";
import {UserContext} from "components/Context/UserContextProvider";

export default function SwapfestGame() {

    const userContext = useContext(UserContext);

    useEffect(() => {

        console.log('SwapfestGame::useEffect');

        if(!userContext.user) {
            userContext.loginAsAnonymousUser();
        }

    }, [userContext.user])

    return (
        <Layout>
            <Head>
                <title>Swapfest - A single/multiplayer Card Game</title>
            </Head>
            <Box sx={{ width: '100%', background: "red" }}>
                stuff here
                Logged in user { userContext.user?.username ?? 'no user' }
            </Box>
        </Layout>
    );
}