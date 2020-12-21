import Head from 'next/head'
import Image from 'next/image'
import { Box, Flex, Container, Heading, Text, SimpleGrid, Center, useMediaQuery } from '@chakra-ui/react'
import { motion } from 'framer-motion'


import Layout from '../components/layout'
// import Container from '../components/container'


const MotionBox = motion.custom(Box)
const MotionCenter = motion.custom(Center)

const Story = () => {
    const [isLargerThan460] = useMediaQuery("(min-width: 460px)");

    return (
        <Layout>
            <Head>
                <title>Story | Exotic Arunachal</title>
            </Head>
            <Box height={["76vh", "66vh"]} position="relative">
                {
                    isLargerThan460 ?
                        (
                            <Image
                                src="/images/brand_story.png"
                                alt="garden"
                                layout="fill"
                            />
                        ) :
                        (
                            <Image
                                src="/images/brand_story.png"
                                alt="garden"
                                layout="fill"
                            />
                        )
                }
                <MotionCenter
                    display={isLargerThan460 ? "flex": "none"}
                    rounded="full"
                    backgroundColor="blue.500"
                    shadow="md"
                    pos="absolute"
                    bottom={- 150 / 2}
                    right={25}
                    height={150}
                    width={150}
                    initial={{
                        y: 50,
                        opacity: 0
                    }}
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        delay: 2
                    }}
                >
                    <Text as="span" padding={2} >
                        <Text as="span" color="gray.50" fontStyle="italic" fontWeight="normal">
                            Exotic
                            </Text>
                        <Text as="span" color="gray.200" fontWeight="bold">
                            Arunachal
                            </Text>
                    </Text>
                </MotionCenter>
            </Box>
            <Heading as="h1" textAlign="center" textTransform="uppercase" color="blue.500" mt={8} mb={4}>Brand Story</Heading>
            <Container maxW="4xl" mb={8}>
                <Text color="gray.800" fontFamily="cursive" fontSize="xl">
                    "My parents were farmers, my wife and I have been a farmer all our lives,
                    and now my children are also following our trails and helping us expand in
                    new dimensions and improvise at the same time. It's like skills and
                    knowledge being carried forward from generation to generation. It's pure
                    heritage for us." says the owner of Exotic Arunachal, Mr. Johokso Manyu.
                                 </Text>
                <Text color="gray.800" fontFamily="cursive" fontSize="xl" my={2}>
                    We often speak about feminism and gender equality these days, but when
                    it comes to the implementation, we see not more than handful of business
                    models that are managed and operated by independent rural women
                             </Text>
                <Text color="gray.800" fontFamily="cursive" fontSize="xl">
                    Mr. Manyu became a live example to practice the famous preaching- “Be
                    the change you want to see in the world” by launching Exotic Arunachal to
                    empower his wife and more such women and underprivileged people like
                    her to stand on their own feet and make a change in the society
                             </Text>
                <Text color="gray.800" fontFamily="cursive" fontSize="xl" my={2}>
                    As his parents were farmers, he has seen all the responsibility and
                    pressure farmers carry on their back. In a country like India, a farmer is
                    called ANNADATA- The one who feeds, but a sad truth is that the one who
                    feeds us all, sleeps empty stomach most of the nights.
                             </Text>
                <Text color="gray.800" fontFamily="cursive" fontSize="xl">
                    The brand’s goal is to empower the farmers, especially women, of
                    Arunachal Pradesh, so that they don't have to give up on their love for
                    farming because of the income and other related factors. We want to make
                    sure that the whole of India can get the authenticity and purity in flavors
                    that our motherland has to provide and all the "exotic" fruits grown here can
                    reach different parts of the country without getting compromised in their
                    nutrition values and health benefits and all the amount collected from this
                    brand goes for the empowerment of underprivileged farmers and to support
                    independent business women.
                             </Text>
            </Container>
        </Layout>
    )
}

export default Story