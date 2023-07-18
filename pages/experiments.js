import Head from 'next/head';
import Layout from '../components/Layout';
import PageHeader from "../components/Typography/PageHeader";

export default function Bio() {

    return (
        <Layout>
            <Head>
                <title>Experiments &amp; Code</title>
            </Head>
            <PageHeader>Experiments &amp; Code</PageHeader>
        </Layout>
    );

}