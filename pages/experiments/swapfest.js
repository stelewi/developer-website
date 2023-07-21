import Head from 'next/head';
import Layout from 'components/Layout';
import PageHeader from "components/Typography/PageHeader";

export default function Swapfest() {

    return (
        <Layout>
            <Head>
                <title>Swapfest - A MMO Card Game</title>
            </Head>
            <PageHeader>Swapfest</PageHeader>
        </Layout>
    );
}