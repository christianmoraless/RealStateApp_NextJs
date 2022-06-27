import Head from 'next/head'
import {Box, Flex} from '@chakra-ui/react'
import Navbar from './Navbar';
import Footer from './Footer';
const Layout = ({children}) => (
        <Flex>
            <Head>
                <title>Real State App</title>
            </Head>
            <Box maxWidth="1280" m="auto">
                <header>
                    <Navbar/>
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <Footer/>
                </footer>
            </Box>
        </Flex>
)

export default Layout;
