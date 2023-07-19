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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris in aliquam sem fringilla. Nec ultrices dui sapien eget mi. Neque aliquam vestibulum morbi blandit cursus risus at ultrices. Duis at consectetur lorem donec. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Tempor orci eu lobortis elementum nibh tellus. Ut eu sem integer vitae justo eget magna fermentum. Pulvinar elementum integer enim neque volutpat ac. Nec nam aliquam sem et tortor consequat id porta.
                </Paragraph>
            </ContentWithPic>

            <SectionHeader>Swapfest! An MMO Card Game</SectionHeader>
            <Paragraph>
                My first real experiment, and the reason I built this site. Swapfest is a Web-based MMO card game and it is hosted here.
            </Paragraph>
            <Paragraph>
                My first real experiment, and the reason I built this site. Swapfest is a Web-based MMO card game and it is hosted here.
            </Paragraph>

            <SectionHeader>This Website</SectionHeader>
            <Paragraph>
                I wrote this site to give me a presence on the web, and to allow me to demo code, but it also gave me the opportunity to learn <Typography fontWeight="bold" component={Link} href="https://nextjs.org/">Next.js</Typography>. I was already pretty familiar with <Typography fontWeight="bold" component={Link} href="https://react.dev/">React.js</Typography> but I wanted to learn something new, and get all the SEO and performance benefits of Next.js.
            </Paragraph>

        </Layout>
    );

}