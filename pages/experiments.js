import Head from 'next/head';
import Layout from '../components/Layout';
import PageHeader from "../components/Typography/PageHeader";
import ContentWithPic from "../components/Section/ContentWithPic";
import Paragraph from "../components/Typography/Paragraph";
import SectionHeader from "../components/Typography/SectionHeader";
import Link from "next/link";
import Typography from "@mui/material/Typography";

export default function Bio() {

    return (
        <Layout>
            <Head>
                <title>Experiments &amp; Code</title>
            </Head>
            <PageHeader>Experiments &amp; Code</PageHeader>
            <ContentWithPic picSrc="/images/doc-experiment.jpeg" picAlt="Crazy Experiment">
                <Paragraph>
                    Here you will find experiments and side projects. It is hoped that this section will grow over time. How quickly it grows might depend on how much free time I have outside of my real job!
                </Paragraph>
            </ContentWithPic>

            <SectionHeader>Swapfest! An MMO Card Game</SectionHeader>
            <Paragraph>
                What developer doesn't like writing games? This is my first real experiment, and one of the reasons I built this site. Swapfest is a Web-based MMO card game. You can play the game here. Find out more about the tech involved in writing this game, and see the code here.
            </Paragraph>
            <Paragraph>
                In brief, the game uses the following components:
            </Paragraph>
            <ul>
                <li>PHP Symfony &amp; API Platform for the Backend API</li>
                <li>JavaScript React/Next.js for the Web UI</li>
                <li>Golang with Websockets for the game server</li>
            </ul>
            <SectionHeader>This Website</SectionHeader>
            <Paragraph>
                I wrote this site to give me a presence on the web, and to allow me to demo code, but it also gives me the opportunity to learn <Typography fontWeight="bold" component={Link} href="https://nextjs.org/">Next.js</Typography>. I was already pretty familiar with <Typography fontWeight="bold" component={Link} href="https://react.dev/">React.js</Typography> but I wanted to learn something new, and get all the SEO and performance benefits of Next.js.
            </Paragraph>
            <Paragraph>
                Dynamic parts of this site are driven by data from a backend API written from scratch in PHP Symfony, and API Platform
            </Paragraph>

        </Layout>
    );

}