import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {
    Box,
    Button,
    Flex,
    Text,
    HStack,
    IconButton,
    CloseButton,
    Center,
    VStack,
} from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { motion } from 'framer-motion';


const menuVariants = {
    opened: {
        right: 0,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.25,
            duration: 0.25
        }
    },
    closed: {
        right: "-100vw",
        transition: {
            duration: 0.25,
            when: 'afterChildren',
            staggerChildren: 0.25,
        }
    }
}

const closeVariants = {
    opened: {
        x: 0
    },
    closed: {
        x: "100vh"
    }
}


const linkVariants = {
    opened: {
        opacity: 1,
        y: 50
    },
    closed: {
        opacity: 0,
        y: 0
    }

}

const MotionBox = motion.custom(Box)

const MotionCloseButton = motion.custom(CloseButton)

const MotionCenter = motion.custom(Center)

const CenterButton: React.FC<{ children?: React.ReactChild, onClick?: () => void }> = ({ children, onClick }) => (
    <MotionCenter variants={linkVariants}>
        <VStack>
            <Center width="100vw">
                <Button
                    color="white"
                    isFullWidth
                    variant="ghost"
                    backgroundColor="transparent"
                    _active={{
                        backgroundColor: "transparent"
                    }}
                    _hover={{
                        backgroundColor: "transparent"
                    }}
                    onClick={onClick}
                    fontSize="lg"
                >
                    {children}
                </Button>
            </Center>
        </VStack>
    </MotionCenter>
)



const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()

    const handleLinkClick = (path: string) => {
        // setIsOpen(false)
        router.push(path)
    }


    return (
        <>
            <MotionBox
                backgroundColor="blue.400"
                display={["block", "none"]}
                pos="fixed"
                top={0}
                width="100vw"
                height="100vh"
                zIndex="tooltip"
                variants={menuVariants}
                animate={isOpen ? "opened" : "closed"}
            >
                <Flex justifyContent="flex-end" p={2}>
                    <MotionCloseButton
                        color="white"
                        size="lg"
                        onClick={() => setIsOpen(false)}
                        variants={closeVariants}
                    />
                </Flex>
                <CenterButton onClick={() => handleLinkClick('/')}>
                    HOME
                </CenterButton>
                <CenterButton onClick={() => handleLinkClick('/products')}>
                    PRODUCTS
                </CenterButton>
                <CenterButton onClick={() => handleLinkClick('/mission')}>
                    MISSION
                </CenterButton>
                <CenterButton onClick={() => handleLinkClick('/story')}>
                    STORY
                </CenterButton>
                <CenterButton onClick={() =>  handleLinkClick('/contact-us')}>
                    CONTACT US
                </CenterButton>
            </MotionBox>
            <Flex justifyContent="space-between" alignItems="center" p={2} display={["flex", "none"]} borderBottomWidth={1}>
                <Box>
                    <Text as="span" padding={2} >
                        <Text as="span" color="gray.600" fontStyle="italic" fontWeight="normal">
                            Exotic
                    </Text>
                        <Text as="span" color="gray.800" fontWeight="bold">
                            Arunachal
                    </Text>
                    </Text>
                </Box>
                <IconButton
                    icon={<GiHamburgerMenu />}
                    aria-label=""
                    colorScheme="white"
                    variant="ghost"
                    onClick={() => setIsOpen(true)}
                />
            </Flex>
            <Flex justifyContent="center" alignItems="center" py={2} display={["none", "block"]} borderBottomWidth={1}>
                <Flex justifyContent="space-between" alignItems="center" width="96%">
                    <Box width="100%">
                        <Text as="span" padding={2} >
                            <Text as="span" color="gray.600" fontStyle="italic" fontWeight="normal">
                                Exotic
                            </Text>
                            <Text as="span" color="gray.800" fontWeight="bold">
                                Arunachal
                            </Text>
                        </Text>
                    </Box>
                    <HStack spacing={6}>
                        <Link href="/">
                            <Button as="a" _hover={{ cursor: 'pointer', textDecor: 'underline' }} colorScheme="blue" variant="link">HOME</Button>
                        </Link>
                        <Link href="/products">
                            <Button as="a" _hover={{ cursor: 'pointer', textDecor: 'underline' }} colorScheme="blue" variant="link">PRODUCTS</Button>
                        </Link>
                        <Link href="/mission">
                            <Button as="a" _hover={{ cursor: 'pointer', textDecor: 'underline' }} colorScheme="blue" variant="link">MISSION</Button>
                        </Link>
                        <Link href="/story">
                            <Button as="a" _hover={{ cursor: 'pointer', textDecor: 'underline' }} colorScheme="blue" variant="link">STORY</Button>
                        </Link>
                        <Link href="/contact-us">
                            <Button as="a" _hover={{ cursor: 'pointer' }} colorScheme="blue" borderRadius={0}>CONTACT US</Button>
                        </Link>
                    </HStack>
                </Flex>
            </Flex>
        </>
    )
}

export default NavigationBar