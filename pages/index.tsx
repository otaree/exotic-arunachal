import Head from 'next/head'
import { Box, Flex, Text, Container, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import Layout from '../components/layout'

const MotionBox = motion.custom(Box)

const BoxWithBG = ({ imgURL, children }) => (
  <Box
    backgroundImage={`url(${imgURL})`}
    backgroundRepeat="no-repeat"
    backgroundPosition="center"
    backgroundSize="cover"
  >
    {children}
  </Box>
)

export default function Home() {
  const content = (
    <Flex justifyContent="center" alignItems="center" height="100vh" backgroundColor="blackAlpha.400">
      <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3, delay: 0.5 }}>
        <Flex justifyContent="center" alignItems="center" mb={4}>
          <Image
            boxSize={["100px", "140px"]}
            objectFit="cover"
            src="/logo.png"
          />
        </Flex>
        <Container maxW="6xl" >
          <Text color="gray.50" fontSize={["md", "2xl"]} lineHeight={[1.2, 1.5]}>
            Exotic Arunachal is a nature-based food brand which caters the millennial
            need for natural and organic alternatives of packaged food that are full of
            preservatives and sugar and aims at practicing pure, unadulterated and
            completely natural ways of solar drying the exotic fruits from the land of
            dawn-lite mountains, Arunachal Pradesh, and taking a step towards
            Aatmanirbhar Bharat.
            </Text>
          <Text color="gray.50" fontSize={["md", "2xl"]} mt={4} lineHeight={[1.2, 1.5]}>
            The company is dedicated to work in the line of sustainability which will
            provide the financial support to the farmers of Arunachal Pradesh. The
            employees at the production unit are mostly women belonging to the socio-
            economically disadvantaged section of the society.
          </Text>
        </Container>
      </MotionBox>
    </Flex>
  )

  return (
    <Layout>
      <Head>
        <title>Exotic Arunachal</title>
      </Head>
      <BoxWithBG imgURL={"/images/garden.jpg"}>
        {content}
      </BoxWithBG>
    </Layout >
  )
}
