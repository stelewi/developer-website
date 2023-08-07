import Head from 'next/head';
import Layout from 'components/Layout';
import PageHeader from "components/Typography/PageHeader";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "components/Context/UserContextProvider";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {apiResourceRequest} from "../src/api/api-client";

export default function Bio() {

    const { user, jwtToken } = useContext(UserContext);
    const [tableData, setTableData] = useState([]);

    const refresh = async () => {

        const updatedTableData = [];

        updatedTableData.push({ name: "Logged In", value: user ? "Yes" : "No" });

        if(user) {

            try {
                const user = await apiResourceRequest('/me');

                updatedTableData.push({ name: "ID", value: user.id });
                updatedTableData.push({ name: "Type", value: user.isAnonymous ? "Anonymous" : "Full User" });
                updatedTableData.push({ name: "Username", value: user.username });
            }
            catch (e) {
                // @todo - toast message
                updatedTableData.push({ name: "Error", value: e.message });
            }

        }

        setTableData(updatedTableData);
    }

    useEffect(() => { refresh() }, [user]);
    return (
        <Layout>
            <Head>
                <title>My User Details</title>
            </Head>
            <PageHeader>My User Details</PageHeader>
            <Box marginY={3}>
                <Button variant="outlined" onClick={refresh}>Refresh</Button>
            </Box>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Attribute</TableCell>
                            <TableCell align="center">Value</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableData.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.value}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Layout>
    );
}