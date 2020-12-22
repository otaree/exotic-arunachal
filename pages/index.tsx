import Head from 'next/head'
import Image from 'next/image'
import { Box, Flex, Text, useMediaQuery, Container } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import Layout from '../components/layout'

const MotionBox = motion.custom(Box)

// https://res.cloudinary.com/de6yk2jol/image/upload/v1608521235/babin_body_1.png

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
  const [isLargerThan460] = useMediaQuery("(min-width: 460px)");

  const content = (
    <Flex justifyContent="center" alignItems="center" height="100vh" backgroundColor="blackAlpha.600">
      <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3, delay: 2 }}>
        <Flex justifyContent="center" alignItems="center" mb={4}>
          <Text as="span" padding={2} backgroundColor="white" fontSize={["lg", "2xl"]}>
            <Text as="span" color="gray.600" fontStyle="italic" fontWeight="normal">
              Exotic
            </Text>
            <Text as="span" color="gray.800" fontWeight="bold">
              Arunachal
            </Text>
          </Text>
        </Flex>
        <Container maxW="6xl">
          <Text color="gray.50" fontSize={["md", "xl"]} lineHeight={[1.2, 1.5]}>
            Exotic Arunachal is a nature-based food brand which caters the millennial
            need for natural and organic alternatives of packaged food that are full of
            preservatives and sugar and aims at practicing pure, unadulterated and
            completely natural ways of solar drying the exotic fruits from the land of
            dawn-lite mountains, Arunachal Pradesh, and taking a step towards
            Aatmanirbhar Bharat.
            </Text>
          <Text color="gray.50" fontSize={["md", "xl"]} mt={4} lineHeight={[1.2, 1.5]}>
            Launched under the project ‘Arunoday’, the company is dedicated to work
            in the line of sustainability which will provide the financial support to the
            farmers of Arunachal Pradesh. The employees at the production unit are
            mostly women belonging to the socio-economically disadvantaged section
            of the society.
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




// {/* <Box position="relative">
//         <Box minH={["100vh", "82vh"]} position="relative" >
//           {
//             isLargerThan460 ?
//               (
//                 <Image
//                   src="/images/garden.jpg"
//                   alt="garden"
//                   layout="fill"
//                 />
//               ) :
//               (
//                 <Image
//                   src="/images/garden_mb.jpg"
//                   alt="garden"
//                   layout="fill"
//                 />
//               )
//           }
//           <Box pos="absolute" zIndex="base" width="100%" height="100%" backgroundColor="blackAlpha.600" />
//           <Flex position="absolute" justifyContent="center" alignItems="center" height="fit-content" width="100%">
//             <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3, delay: 2 }}>
//               <Flex justifyContent="center" alignItems="center" mb={4}>
//                 <Text as="span" padding={2} backgroundColor="white" fontSize="2xl">
//                   <Text as="span" color="gray.600" fontStyle="italic" fontWeight="normal">
//                     Exotic
//                     </Text>
//                   <Text as="span" color="gray.800" fontWeight="bold">
//                     Arunachal
//                     </Text>
//                 </Text>
//               </Flex>
//               <Container maxW="6xl" zIndex="docked">
//                 <Text color="gray.50" fontSize="xl">
//                   Exotic Arunachal is a nature-based food brand which caters the millennial
//                   need for natural and organic alternatives of packaged food that are full of
//                   preservatives and sugar and aims at practicing pure, unadulterated and
//                   completely natural ways of solar drying the exotic fruits from the land of
//                   dawn-lite mountains, Arunachal Pradesh, and taking a step towards
//                   Aatmanirbhar Bharat.
//             </Text>
//                 <Text color="gray.50" fontSize="xl" mt={4}>
//                   Launched under the project ‘Arunoday’, the company is dedicated to work
//                   in the line of sustainability which will provide the financial support to the
//                   farmers of Arunachal Pradesh. The employees at the production unit are
//                   mostly women belonging to the socio-economically disadvantaged section
//                   of the society.
//               </Text>
//               </Container>
//             </MotionBox>
//           </Flex>
//         </Box>
//       </Box> */}