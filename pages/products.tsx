import Head from 'next/head'
import Image from 'next/image'
import {
    Heading,
    Text,
    SimpleGrid,
    Box,
    OrderedList,
    ListItem,
    Flex,
    Stack,
    useMediaQuery,
} from '@chakra-ui/react'

import Layout from '../components/layout'
import MyContainer from '../components/container'

const MyImage: React.FC<{ src: string, alt?: string, caption?: string, width?: number | string, height?: number | string }> = ({
    src,
    alt = "",
    caption = "",
    width = '100%',
    height = '100%'
}) => (
    <Box>
        <Box width={width} height={height} pos="relative">
            <Image
                src={src}
                alt={alt}
                layout="fill"
            />
        </Box>
        <Text textAlign="center" fontFamily="revert">{caption}</Text>
    </Box>
)

const Products = () => {
    const [isLargerThan460] = useMediaQuery("(min-width: 460px)");

    return (
        <Layout>
            <Head>
                <title>Products | Exotic Arunachal</title>
            </Head>

            <MyContainer>
                <Heading as="h1" size="xl" textTransform="uppercase" color="blue.500" mb={[4, 8]}>About our products</Heading>
                <SimpleGrid columns={[1, 2]} gap={6}>
                    <Text fontFamily="sans-serif" fontSize="xl">
                        Exotic Arunachal is established in the
                        lap of mother nature and holds a
                        vision to bring you the crux of this
                        affluential heritage and soul
                        nourishing practices of Arunachal
                        Pradesh.
                    </Text>
                    <MyImage
                        src="/images/drying_banana.png"
                        alt="Bananas being solar dried"
                        caption="Figure 1 Bananas being solar dried"
                        height="38vh"
                    />
                    {
                        isLargerThan460 &&
                        (
                            <MyImage
                                src="/images/drying_process.png"
                                alt="Solar drying process"
                                caption="Figure 2 Solar drying process"
                                height="38vh"
                            />
                        )
                    }
                    <Text fontFamily="sans-serif" fontSize="xl">
                        The products are exclusively made
                        from the exceptionally originated
                        farming practices by the local
                        farmers. The natural flavors and
                        essence of the raw materials remains
                        untouched and not even disturbed a
                        bit during the solar drying process
                        which enhances the nutritional value
                        in the products. We make sure the
                        products are available throughout the
                        year to satisfy your cravings and
                        provide you with health benefits that
                        our rich soil has to offer.
                    </Text>
                    {
                        !isLargerThan460 &&
                        (
                            <MyImage
                                src="/images/drying_process.png"
                                alt="Solar drying process"
                                caption="Figure 2 Solar drying process"
                                height="38vh"
                            />
                        )
                    }
                </SimpleGrid>

                <Heading as="h3" size="md" textTransform="uppercase" color="blue.500" mt={[4, 8]} mb={[2, 4]}>Product list:</Heading>
                <OrderedList>
                    <ListItem fontFamily="sans-serif" fontSize="xl">Solar-dried Kiwi</ListItem>
                    <ListItem fontFamily="sans-serif" fontSize="xl">Solar-dried Pineapple</ListItem>
                    <ListItem fontFamily="sans-serif" fontSize="xl">Solar-dried Banana</ListItem>
                </OrderedList>
                <Flex justifyContent="center" my={[4, 8]}>
                    <Stack isInline={isLargerThan460} spacing={4}>
                        <MyImage
                            src="/images/dried_pineapples.png"
                            alt="Dried Pineapples"
                            caption="Figure 3 Dried Pineapples"
                            height="38vh"
                            width={isLargerThan460 ? "26vw" : "90vw"}
                        />
                        <MyImage
                            src="/images/dried_kiwi.png"
                            alt="Dried Kiwi"
                            caption="Figure 4 Dried Kiwi"
                            height="38vh"
                            width={isLargerThan460 ? "26vw" : "90vw"}
                        />
                    </Stack>
                </Flex>

                <Heading as="h2" size="lg" textTransform="uppercase" color="blue.500" mt={[4, 8]} mb={[2, 4]}>BENEFITS OF OUR PRODUCTS:</Heading>
                <Heading as="h3" size="md" textTransform="uppercase" color="blue.500" mt={[4, 8]}>1.LIFESTYLE PRODUCT</Heading>
                <Text fontFamily="sans-serif" fontSize="xl">
                    In times like these, we get to know the importance of healthy eating and
                    strong immunity and how tremendous task it is to gather all the nutrition we
                    need on day-to-day basis. That’s why we bring you all the nutrients in our
                    exclusive range of products which are totally untainted and gives a treat to
                    your taste buds as well as your health.
                </Text>
                <Heading as="h3" size="md" textTransform="uppercase" color="blue.500" mt={[4, 8]}>2. NO ADDED FLAVOURS OR CHEMICALS</Heading>
                <Text fontFamily="sans-serif" fontSize="xl">
                    Now-a-days, it’s difficult to trust any product that claims to be fully natural
                    as these products at least contain some preservatives, but here at Exotic
                    Arunachal, we take the purity of our products very seriously and we believe
                    that the goodness that comes with freshness is unmatched. That’s why, we
                    bring you toxin-free products which do not contain any risk of harming your
                    health and adds value to your lifestyle.
                </Text>
                <Heading as="h3" size="md" textTransform="uppercase" color="blue.500" mt={[4, 8]}>3. AVAILABILITY THROUGH-OUT THE YEAR</Heading>
                <Text fontFamily="sans-serif" fontSize="xl">
                    We believe that cravings do not have a specific time, that’s why we make
                    sure you get your desired seasonal fruits and spices through-out the year
                    without any bargain on the quality.
                </Text>
                <Heading as="h3" size="md" textTransform="uppercase" color="blue.500" mt={[4, 8]}>4. SUSTAINABLE PACKAGING SOLUTIONS</Heading>
                <Text fontFamily="sans-serif" fontSize="xl">
                    It is said that packaging is considered as the most essential part of any
                    product and we totally agree with it, we also understand the pain of Mother
                    Nature, that’s why we pick our packaging material knowingly, and we pack
                    our products in a highly sustainable packaging which keeps the products
                    fresh and unharmed and also does not harm the Mother Nature as well.
                </Text>
            </MyContainer>
        </Layout>
    )
}


export default Products;