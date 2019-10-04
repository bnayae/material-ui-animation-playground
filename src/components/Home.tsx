import * as React from 'react';

import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Layout from './Layout';

export interface IHomeProps {
}

export default function Home(props: IHomeProps) {
    return (
        <>
            <Box mt={10} display="flex" justifyContent='space-around'>
                <Link to="/material">material</Link>
                <Link to="/trans">Transition</Link>
                <Link to="/trans-more">Transition more</Link>
            </Box>
            <Layout />
        </>
    );
}
