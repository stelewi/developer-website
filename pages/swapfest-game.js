import Head from 'next/head';
import Layout from 'components/Layout';
import * as React from "react";
import Box from "@mui/material/Box";
import {useEffect, useState} from "react";
import GameClient from "src/swapfest/GameClient"

const navBarHeight = 64;

export default function SwapfestGame() {
    const [windowHeight, setWindowHeight] = useState(1000);

    // window resizing
    useEffect(() => {
        function handleResize() {
            setWindowHeight(window.innerHeight);
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const gameClient = new GameClient();
        gameClient.run();
        return () => gameClient.kill();

    }, [])

    return (
        <Layout barTitle="Swapfest!" forceCompactLayout={true} noMargins={true}>
            <Head>
                <title>Swapfest - A Single or Multiplayer Card Swapping Game</title>
            </Head>
            <Box sx={{backgroundColor: "black", height: (windowHeight - navBarHeight) + "px"}}>
                text
            </Box>
        </Layout>
    );
}