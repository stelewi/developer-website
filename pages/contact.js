import Head from 'next/head';
import Layout from '../components/Layout';
import PageHeader from "../components/Typography/PageHeader";

export default function Bio() {

    return (
        <Layout>
            <Head>
                <title>Contact Me</title>
            </Head>
            <PageHeader>Contact Me</PageHeader>
        </Layout>
    );

}