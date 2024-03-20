import { Box, Text, Stack, Heading, Slide } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import MenuButton from '../components/MenuButton';

import Colors from '../const/Colors.json';

export default function HomePage() {
    return (
        <Stack width='100vw' height='100vh' position='absolute'
            alignItems='center'
            justifyContent='center'
        >
            <Box width='60vw' height='92vh' position='absolute'>
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
                            mb='50px' width='100%'
                            fontSize='16px' fontWeight='300'
                        >
                            First Year Waterloo Engineering Student
                        </Text>

                        {/* React router */}
                        <MenuButton link='/'>HOME;</MenuButton>
                        <MenuButton link='/about'>ABOUT;</MenuButton>
                        <MenuButton link='/projects'>PROJECTS;</MenuButton>
                        <MenuButton link='/contact'>CONTACT;</MenuButton>
                    </Stack>
                </Box>
            </Box>
        </Stack>
    )
}