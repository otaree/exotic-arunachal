import { Box } from "@chakra-ui/react"

import NavigationBar from './navigationbar'
import Footer from './footer'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Box pos="relative">
            <Box as="header">
                <NavigationBar />
            </Box>
            <Box as="main">
                {children}
            </Box>
            <Box as="footer">
                <Footer />
            </Box>
        </Box>
    );
}

export default Layout