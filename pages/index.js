import Head from 'next/head';
import Layout from "../components/Layout";
import {Avatar} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import GithubIcon from '@mui/icons-material/GitHub';
import Link from "next/link";
import * as React from "react";
import PageHeader from "../components/Typography/PageHeader";
import Paragraph from "../components/Typography/Paragraph";

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Pragmatic Dev</title>
            </Head>
            <PageHeader>I am Steve Lewis</PageHeader>
            <Box sx={{display: 'flex', gap: 4}}>
                <Box maxWidth="70%">
                    <Paragraph>
                        I'm a contract software developer based in <b>Yorkshire, England</b> (near Leeds).
                    </Paragraph>
                    <Paragraph>
                        With <b>20 years</b> of experience in software development, I am pragmatically-minded with a passion for creating <b>web applications, backend systems, and APIs</b> that solve complex problems.
                    </Paragraph>
                    <Paragraph>
                        I enjoy working on dynamic applications that involve <b>data and visualisation</b> and have worked in multiple sectors of industry, including digital agencies, software houses, and in-house.
                    </Paragraph>
                    <Paragraph>
                        You can find our more about me and the technologies I work with <Typography href="/bio" component={Link}>here</Typography>.
                    </Paragraph>
                </Box>
                <Box>
                    <Avatar src="/photos/me-2023-sq.jpg" alt="Steve Lewis Photo" sx={{width: 150, height: 150}}/>
                </Box>
            </Box>
            <Box sx={{display: 'flex', gap: 4, marginTop: 5}}>
                <Box>
                    <GithubIcon/>
                </Box>
                <Box>
                    <Typography
                        noWrap
                        component={Link}
                        target="_blank"
                        href="https://github.com/stelewi"
                        sx={{
                            fontFamily: 'Roboto Slab',
                            textDecoration: 'none',
                        }}
                    >
                        https://github.com/stelewi
                    </Typography>
                </Box>
            </Box>
        </Layout>
    );
}
