import Head from 'next/head'
import { ChakraProvider } from "@chakra-ui/react"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Exotic Arunachal is a nature-based food brand which caters the millennial
need for natural and organic alternatives of packaged food that are full of
preservatives and sugar and aims at practicing pure, unadulterated and
completely natural ways of solar drying the exotic fruits from the land of
dawn-lite mountains, Arunachal Pradesh, and taking a step towards
Aatmanirbhar Bharat."
        />
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
