import { Box } from '@chakra-ui/react'

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <Box p={[4, 8]}>
        {children}
    </Box>
)

export default Container