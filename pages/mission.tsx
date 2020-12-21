import Head from 'next/head'
import {
    Heading,
    Text,
    OrderedList,
    ListItem,
} from '@chakra-ui/react'

import Layout from '../components/layout'
import MyContainer from '../components/container'

const Mission = () => (
    <Layout>
        <Head>
            <title>Mission | Exotic Arunachal</title>
        </Head>
        <MyContainer>
            <Heading as="h1" size="xl" textTransform="uppercase" color="blue.500" mb={[4, 8]}>MISSION</Heading>
            <Text fontFamily="sans-serif" fontSize="xl">
                Founder of Exotic Arunachal, Mr. Johokso Manyu is on a mission against
                package products that are filled with additives and preservatives. Exotic
                Arunachal offers solar dried fruits like Kiwi, Pineapple, Bananas etc and are
                soon to launch natural series of jams and marmalades which will be directly
                available from their own land. The employees at the production unit are
                mostly women belonging to the socio-economically disadvantaged section
                of the society.
            </Text>
            <Text fontFamily="sans-serif" fontSize="xl" mt={4}>
                As our prime minister Mr. Narendra Modi asked us to be ‘VOCAL FOR
                LOCAL’, we make sure to provide totally natural products which are
                originated and grown locally in our own land. We bring to you the premium
                quality lifestyle product which is unadulterated, sustainable, power-packed
                with nutrition and are available through-out the year.
            </Text>

            <Heading as="h2" size="lg" textTransform="uppercase" color="blue.500" mt={[4, 8]} mb={[2, 4]}>AIM</Heading>
            <OrderedList>
                <ListItem fontFamily="sans-serif" fontSize="xl">Being vocal for local</ListItem>
                <ListItem fontFamily="sans-serif" fontSize="xl">Quality over quantity</ListItem>
                <ListItem fontFamily="sans-serif" fontSize="xl">
                    To provide 100% natural products untouched from harmful chemicals,
                    pesticides and flavoring substances
                </ListItem>
                <ListItem fontFamily="sans-serif" fontSize="xl">To encourage enduring practices</ListItem>
                <ListItem fontFamily="sans-serif" fontSize="xl">
                    To create employment opportunities for the local residents of Arunachal
                    Pradesh.
                </ListItem>
            </OrderedList>

            <Heading as="h2" size="lg" textTransform="uppercase" color="blue.500" mt={[4, 8]} mb={[2, 4]}>SOCIAL IMPACT</Heading>
            <Text fontFamily="sans-serif" fontSize="xl" mt={4}>
                We understand the importance of corporate social responsibility and we
                feel that if we are capable of bringing a change in someone’s life then why
                should we not, so here we make sure to provide employment opportunities
                to the local residents of Arunachal Pradesh and also to help the local
                farmers as they are the ones who products the nurture their harvest with so
                much of love and care.
            </Text>

            <Heading as="h2" size="lg" textTransform="uppercase" color="blue.500" mt={[4, 8]} mb={[2, 4]}>ECONOMIC IMPACT</Heading>
            <Text fontFamily="sans-serif" fontSize="xl" mt={4}>
                We all know that farmers are the most important part of our society ,still we
                observe that farmers incur huge losses which sums up around 92651
                crores per year and not just the money, they also incur huge losses in
                terms of crops and the produce, hence we make sure to walk on the path of
                Atmanirbhar Bharat and produce the exotic fruits and spices in our own
                motherland to obstruct the wastage of produce and verify a longer shelf life
                of the products, and hence doing our part in contributing to the country’s
                economy.
            </Text>
        </MyContainer>
    </Layout>
)

export default Mission