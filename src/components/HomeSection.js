// Section on left side of website that appears on all pages
import { Box, Text, Stack, Heading } from '@chakra-ui/react';
import MenuButton from '../components/MenuButton';
import TypingText from '../components/TypingText';

import Colors from '../const/Colors.json';

export default function HomeSection({ children }) {
    return (
        <Stack width='100vw' height='100vh' position='absolute'
            alignItems='center'
            justifyContent='center'
        >
            <Stack width='60vw' height='92vh' position='absolute' direction='row'>
                {/* Heading and Button container */}
                <Box width='40rem' height='100%'>
                    <Stack height='100%'
                        direction='column'
                        spacing='0px'
                    >
                        {/* Heading text and subheading */}
                        <Heading
                            width='100%'
                            margin='0px'
                            mt='50px'
                            mb='15px'
                            pb='0px'
                            fontSize='95'
                            letterSpacing='0px'
                            lineHeight='5.5rem'
                            fontWeight='900'
                            fontStyle='italic'
                        >
                            JUSTIN ABUYUAN
                        </Heading>
                        <Text mt='5px'
                            mb='20px' width='100%'
                            fontSize='18px' fontWeight='500'
                        >
                            Engineering Student @ the <font color={Colors['yellow']}>University of Waterloo</font>
                        </Text>
                        <Text mt='5px'
                            mb='50px' width='100%'
                            fontSize='16px' fontWeight='300'
                        >
                            <TypingText>i like to code stuff and cry over the SWE job market.</TypingText>
                        </Text>
                        {/* React router */}
                        <MenuButton link='/about'>ABOUT;</MenuButton>
                        <MenuButton link='/experience'>EXPERIENCE;</MenuButton>
                        <MenuButton link='/projects'>PROJECTS;</MenuButton>
                        <MenuButton link='/contact'>CONTACT;</MenuButton>
                    </Stack>
                </Box>
                {/* Info Area */}
                { children }
            </Stack>
        </Stack>
    )
}