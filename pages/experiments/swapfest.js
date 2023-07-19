import Head from 'next/head';
import Layout from 'components/Layout';
import PageHeader from "components/Typography/PageHeader";

export default function Bio() {

    return (
        <Layout>
            <Head>
                <title>About Me</title>
            </Head>
            <PageHeader>About Me</PageHeader>
        </Layout>
    );
}