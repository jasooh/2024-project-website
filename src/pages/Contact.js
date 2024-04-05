import { Text, Heading, Stack, Box } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { FaGithub, FaLinkedin, FaPaperclip } from "react-icons/fa";

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
                            <Stack direction='row' alignItems='center' mb='20px'>
                                <ChevronRightIcon color={Colors['accent']} />
                                <Text>abuyuanjustin@gmail.com</Text>
                            </Stack>
                            {/* Resume button */}
                            <Box transition='0.3s' p='3' rounded='3xl' borderWidth='2px'
                                _hover={{ bg: Colors['white'], rounded: 'xl' }}
                                onClick={() => window.open('https://www.cms-justin-abuyuan.xyz/uploads/2024_Resume_JA_60fc7b6b33.pdf', '_blank', 'noopener, noreferrer')}
                                sx={{
                                    '&:hover': {
                                        '.resume-text': { color: Colors['black'] }
                                    }
                                }}
                            >
                                <Stack direction='row' alignItems='center'>
                                    <FaPaperclip transition='0.3s' className="resume-text" color={Colors['white']}/>
                                    <Text transition='0.3s' className="resume-text" color={Colors['white']}>Resume</Text>
                                </Stack>
                            </Box>
                            {/* Icons */}
                            <Stack direction='row' gap='1rem' mt='15px' mb='30px'>
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
                            <Text>Built with love using <b>React</b> and <b>ChakraUI</b>, and deployed using <b>GitHub Pages</b>.</Text>
                            <Text>© 2024 Justin Abuyuan. All rights reserved.</Text>
                        </Stack>
                    </Box>
                </Stack>
            </ContentContainer>
        </>
    )
}
