import Head from 'next/head'
import {
    Box,
    SimpleGrid,
    Text,
    Divider,
    HStack,
    Icon,
    Container
} from '@chakra-ui/react'
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons'
import { FaRegAddressCard } from 'react-icons/fa'

import Layout from "../components/layout"

const ContactUs = () => {
    return (
        <Layout>
            <Head>
                <title>Contact Us | Exotic Arunachal</title>
            </Head>

            <Box backgroundColor="blue.300" height="90vh" p={24}>
                <SimpleGrid columns={[1, 2]}>
                    <Box>
                        <Divider width={140} backgroundColor="black" borderColor="black" />
                        <Text fontWeight="medium" fontSize="lg">Stay in touch</Text>
                        <Box mt={16} mb={[16, 0]}>
                            <Text fontFamily="sans-serif" fontSize={["5xl", "6xl"]} fontWeight="bold">Call or visit us</Text>
                        </Box>
                    </Box>
                    <Box>
                        <Text fontSize="lg" color="gray.50">Tezu, Arunachal Pradesh, India</Text>
                        <Box mt={8}>
                            <HStack>
                                <Icon as={FaRegAddressCard} />
                                <Container>
                                    Estern Enterprise, 
                                    Main Baazar, 
                                    Tezu, Lohit - District
                                    Arunachal Pradesh, 792001
                                </Container>    
                            </HStack>
                            <HStack mt={2}>
                                <PhoneIcon />
                                <Container>
                                    <Text>9612751698</Text>
                                </Container>
                            </HStack>
                            <HStack mt={2}>
                                <EmailIcon />
                                <Container>
                                    <Text>example@example.com</Text>
                                </Container>
                            </HStack>
                        </Box>
                    </Box>
                </SimpleGrid>
            </Box>
        </Layout>
    )
}

export default ContactUs