// contains all components that do not need to be re-rendered on every page
import { Box, Text, Stack, Heading } from '@chakra-ui/react';
import MenuButton from '../components/MenuButton';

import Colors from '../const/Colors.json';

export default function HomeSection({ children }) {
    return (
        // Content section has to be re-rendered, so we use a portal to place the content in the stack AFTER the HomeSection component loads
        <Stack width='100vw' height='max' pb='5rem' position='absolute'
            alignItems='center'
            gap='5rem'
            id='content-holder'
        >
            <Stack width='60vw' height='max' direction={{ base: 'column', "2xl": 'row' }} id='button-parent'>
                {/* Heading and Button container */}
                <Box width='40rem' height='max'>
                    <Stack height='max'
                        direction='column'
                        spacing='0px'
                    >
                        {/* Heading text and subheading */}
                        <Heading
                            width={{ base: '60%', md: '80%', "2xl": '90%' }}
                            margin='0px'
                            mt='50px'
                            mb='15px'
                            pb='0px'
                            fontSize={{ base: '55px', md: '90px', "2xl": '95px' }}
                            letterSpacing='0px'
                            lineHeight={{ base: '3rem', md: '5.5rem' }}
                            fontWeight='900'
                            fontStyle='italic'
                        >
                            JUSTIN ABUYUAN
                        </Heading>
                        <Text mt='5px'
                            mb='20px'
                            width={{ base: '40%', "2xl": '100%' }}
                            fontSize='18px' fontWeight='500'
                        >
                            Engineering Student @ the <font color={Colors['accent']}>University of Waterloo</font>
                        </Text>
                        {/* typing effect holder */}
                        <Text mt='5px'
                            mb='50px' minH='4rem' width='50%'
                            fontSize='16px' fontWeight='300'
                            id='typing-holder'
                        // borderWidth='1px'
                        >
                        </Text>
                        {/* React router buttons */}
                        <MenuButton link='/experience'>EXPERIENCE;</MenuButton>
                        <MenuButton link='/projects'>PROJECTS;</MenuButton>
                        <MenuButton link='/contact'>CONTACT;</MenuButton>
                    </Stack>
                </Box>
                {/* Info Area */}
                <Text
                    fontSize='17px'
                    width={{ base: '100%', "2xl": '40%' }} height='max' maxH='50%'
                    mt='3rem'
                >
                    <font color={Colors['accent']}>In 2015, I wrote my first ever program in Lua using ROBLOX Studio's game engine. </font>
                    It was a simple script that teleported the player to another location on the map. <br /><br />
                    Even though it was a script with 3 lines of code, this discovery of writing lines in a computer to make stuff do things ignited a burning passion in me to innovate and create change through the code I write. <br /><br />
                    Now, as an aspiring Management Engineering student at the University of Waterloo, I hope to be at the forefront of this change.
                </Text>
            </Stack>
        </Stack>
    )
}