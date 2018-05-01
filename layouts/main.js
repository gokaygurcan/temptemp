// @flow

import { Fragment } from 'react';

import Link from 'next/link';
import Head from 'next/head';

import '../style.scss';

const MainLayout = ({ children, title = 'Hello World' }) => (
    <Fragment>
        <Head>
            <title>{ title }</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />

            <link rel="stylesheet" type="text/css" href="/_next/static/style.css" />
        </Head>
        <Fragment>
            {/*<header>
                <nav>
                    <Link href='/'><a>Home</a></Link> |
                    <Link href='/projects'><a>Projects</a></Link>
                </nav>
            </header>*/}

            { children }

            {/*<footer>
                {'I`m here to stay'}
            </footer>*/}
        </Fragment>
    </Fragment>
)

export default MainLayout;
