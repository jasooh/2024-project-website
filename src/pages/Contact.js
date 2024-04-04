import { Text, Heading, Stack, Box } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// custom components
import TypingText from "../components/TypingText";
import ContentContainer from "../components/ContentContainer";

// color
import Colors from '../const/Colors.json';

export default function ContactPage() {
    return (
        <>
            <TypingText>i check my email often :&#41;</TypingText>
            {/* Contact content */}
            <ContentContainer>
                <Stack
                    direction='column'
                    width='100%'
                    textAlign='center'
                >
                    <Box p='5' rounded='lg' bg={`rgba(13, 13, 13, 0.8)`} minH='50%'>
                        <Stack direction='column' alignItems='center'>
                            {/* Name */}
                            <Heading as='h4' size='lg'>Justin Abuyuan</Heading>
                            <Stack direction='row' alignItems='center' mb='25px'>
                                <ChevronRightIcon color={Colors['accent']} />
                                <Text>abuyuanjustin@gmail.com</Text>
                            </Stack>
                            {/* Icons */}
                            <Stack direction='row' gap='1rem'>
                                <Box transition='0.3s' _hover={{ color: Colors['accent'], transform: 'scale(1.1)' }} 
                                    onClick={() => window.open('https://github.com/jasooh', '_blank', 'noopener, noreferrer')}
                                >
                                    <FaGithub color={Colors['white']} size='50px' />
                                </Box>
                                <Box transition='0.3s' _hover={{ color: Colors['accent'], transform: 'scale(1.1)' }}
                                    onClick={() => window.open('https://www.linkedin.com/in/justin-abuyuan', '_blank', 'noopener, noreferrer')}
                                >
                                    <FaLinkedin color={Colors['white']} size='50px' />
                                </Box>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </ContentContainer>
        </>
    )
}
