import Head from 'next/head'
import { Box, Container, Heading, Text, Center, Img, useMediaQuery } from '@chakra-ui/react'
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
            <Box>
                <Box pos="relative">
                    <Img
                        src="/images/new_brand.png"
                        width="100%"
                        height={["76vh", "76vh"]}
                        objectFit="fill"
                    />
                    <MotionCenter
                        display={["none", "flex"]}
                        rounded="full"
                        backgroundColor="white"
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
                        <Img
                            boxSize="100px"
                            objectFit="cover"
                            src="/logo.png"
                            alt="Exotic Arunachal Logo"
                            ml={4}
                        />
                    </MotionCenter>
                </Box>
                <Heading as="h1" textAlign="center" textTransform="uppercase" color="blue.500" mt={8} mb={4}>Brand Story</Heading>
                <Container maxW="4xl" mb={8}>
                    <Text color="gray.800" fontFamily="cursive" fontSize="xl">
                        We often speak about feminism and gender equality these days, but when
                        it comes to the implementation, we see not more than handful of business
                        models that are managed and operated by independent rural women.
                    </Text>
                    <Text color="gray.800" fontFamily="cursive" fontSize="xl" my={2}>
                        The owner of Exotic Arunachal, Mrs. Rupailu Manyu, is a member of self-
                        help group named Queen, and has became a live example to practice the
                        famous preaching- “Be the change you want to see in the world”. Exotic
                        Arunachal empowers Mrs. Manyu to help women and underprivileged
                        people like her to stand on their own feet and make a change in the
                        society.
                    </Text>
                    <Text color="gray.800" fontFamily="cursive" fontSize="xl">
                        Before the launch of this venture, she was rearing piggery & chicken and
                        had a vegetable farm for family contentment. Also, she did not receive any
                        formal education and has been a housewife all her life. But that didn’t stop
                        her from spreading her wings and contributing to the society when the right
                        time came and Varun, a social entrepreneur, introduced her to the idea of
                        solar drying techniques and how it could help farmers of her state.
                    </Text>
                    <Text color="gray.800" fontFamily="cursive" fontSize="xl" my={2}>
                        In a country like India, a farmer is called ANNADATA-The one who feeds,
                        but a sad truth is that the one who feeds us all, sleeps empty stomach most
                        of the nights. The brand’s goal is to empower the farmers, especially
                        women, of Arunachal Pradesh, so that they don't have to give up on their
                        love for farming because of the income and other related factors.
                    </Text>
                    <Text color="gray.800" fontFamily="cursive" fontSize="xl">
                        The brand strives so that the whole of India can get the authenticity and
                        purity in flavors that our motherland has to provide and all the "exotic" fruits
                        grown here can reach different parts of the country without getting
                        compromised in their nutrition values and health benefits.
                    </Text>
                </Container>
            </Box>
            {/* <Box height={["76vh", "66vh"]} position="relative">
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
                    display={isLargerThan460 ? "flex" : "none"}
                    rounded="full"
                    backgroundColor="white"
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
                    <Img
                        boxSize="100px"
                        objectFit="cover"
                        src="/logo.png"
                        alt="Segun Adebayo"
                        ml={4}
                    />
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
            </Container> */}
        </Layout>
    )
}

export default Story