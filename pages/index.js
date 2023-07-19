import Head from 'next/head';
import Layout from "../components/Layout";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import GithubIcon from '@mui/icons-material/GitHub';
import Link from "next/link";
import * as React from "react";
import PageHeader from "../components/Typography/PageHeader";
import Paragraph from "../components/Typography/Paragraph";
import ContentWithPic from "../components/Section/ContentWithPic";

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Pragmatic Dev</title>
            </Head>
            <PageHeader>Steve Lewis' Dev Site</PageHeader>
            <ContentWithPic picSrc="/photos/me-2023-sq.jpg" picAlt="Steve Lewis Photo">
                <Paragraph>
                    Welcome to my Website. Here you will find a few simple pages where I can post my CV, experiments and thoughts on development.
                </Paragraph>
                <Paragraph>
                    I'm a contract software developer based in <b>Yorkshire, England</b> (near Leeds).
                </Paragraph>
                <Paragraph>
                    With <b>20 years</b> of experience in software development, I am pragmatically-minded with a passion for creating <b>web applications, backend systems, and APIs</b> that solve complex problems.
                </Paragraph>
                {/*<Paragraph>*/}
                {/*    I enjoy working on dynamic applications that involve <b>data and visualisation</b> and have worked in multiple sectors of industry, including digital agencies, software houses, and in-house.*/}
                {/*</Paragraph>*/}
                <Paragraph>
                    Outside the world of software development, I love mountain biking, snowboarding, and most other sports.
                </Paragraph>
                <Paragraph>
                    You can find our more about me and the technologies I work with <Typography href="/bio" component={Link}>here</Typography>.
                </Paragraph>
            </ContentWithPic>
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
