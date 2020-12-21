import { Text, Flex } from '@chakra-ui/react'

const Footer = () => (
    <Flex justifyContent="center" alignItems="center" py={4} borderTopWidth={1}>
        <Text as="p">
            &#169;{" "}
            <Text as="span" color="gray.600" fontStyle="italic" fontWeight="normal">
                Exotic
            </Text>
            <Text as="span" color="gray.800" fontWeight="bold">
                Arunachal
            </Text>
            {" "}
            {new Date().getFullYear()}
        </Text>
    </Flex>
)

export default Footer