import { Box, Text, Stack, Heading, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import MenuButton from '../components/MenuButton';

import Colors from '../const/Colors.json';

export default function HomePage() {
    return (
        <Stack width='100vw' height='100vh' position='absolute'
            alignItems='center'
            justifyContent='center'
        >
            <Box width='96vw' height='92vh' position='absolute'
                    borderColor={Colors['white']}
                    borderStyle='solid'
                    borderWidth='0.01rem'
                >
                {/* Heading container */}
                <Box pl='5rem' width='40rem' height='100%'>
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
                        <Text mb='50px' width='100%'
                            fontSize='15px' fontWeight='100'
                            lineHeight='0px'
                        >
                            const compSciStudent = true;
                        </Text>

                        {/* React router */}
                        <MenuButton link='/about'>ABOUT;</MenuButton>
                        <MenuButton link='/about'>PROJECTS;</MenuButton>
                        <MenuButton link='/about'>CONTACT;</MenuButton>
                    </Stack>
                </Box>
            </Box>
        </Stack>
    )
}