import Head from 'next/head';
import Layout from 'components/Layout';
import Scoreboard from "components/Swapfest/Scoreboard";
import PageHeader from "components/Typography/PageHeader";
import * as React from "react";
import Paragraph from "components/Typography/Paragraph";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {Tab, Tabs} from "@mui/material";
import Rules from "components/Swapfest/Rules";
import Link from "next/link";

export default function Swapfest() {

    const [selectedTabValue, setSelectedTabValue] = React.useState(0);
    const [introPage, setIntroPage] = React.useState(1);

    const handleTabChange = (event, newValue) => {
        setSelectedTabValue(newValue);
    };

    const rulesTab = () => setSelectedTabValue(1);

    return (
        <Layout>
            <Head>
                <title>Swapfest - A single/multiplayer Card Game</title>
            </Head>
            <PageHeader>Swapfest</PageHeader>

            <Box sx={{display: 'flex', gap: 4}} marginBottom={2}>
                <Box maxWidth="70%">
                    <Paragraph>
                        Swapfest is a single or multiplayer card game. Score as many points as possible in 5 minutes by making high-scoring Poker hands.
                        Check the <a href="#" onClick={rulesTab}>rules</a> below if you've not played before.
                    </Paragraph>
                </Box>
                <Box>
                    <Link href="/experiments/swapfest-game">
                        <Button color="warning" variant="contained" size="64px">
                            Play now
                        </Button>
                    </Link>
                </Box>
            </Box>

            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={selectedTabValue} onChange={handleTabChange} aria-label="scoreboard/rules tabs">
                        <Tab label="Scoreboard"/>
                        <Tab label="Rules"/>
                    </Tabs>
                </Box>
                <Box marginY={2}>

                </Box>
                { selectedTabValue === 0 && <Scoreboard/> }
                { selectedTabValue === 1 && <Rules/> }
            </Box>
        </Layout>
    );
}