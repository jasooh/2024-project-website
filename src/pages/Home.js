import { Box, Text, Stack, Heading } from '@chakra-ui/react';
import MenuButton from '../components/MenuButton';
import TypingText from '../components/TypingText';

import Colors from '../const/Colors.json';

export default function HomePage() {
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
                            <TypingText>i like to code stuff.</TypingText>
                        </Text>
                        {/* React router */}
                        <MenuButton link='/'>ABOUT;</MenuButton>
                        <MenuButton link='/about'>EXPERIENCE;</MenuButton>
                        <MenuButton link='/projects'>PROJECTS;</MenuButton>
                        <MenuButton link='/contact'>CONTACT;</MenuButton>
                    </Stack>
                </Box>
                {/* Info Area */}
                <Text
                    fontSize='17px'
                    width='40%' height='max' maxH='50%'
                    mt='3rem'
                >
                    <font color={Colors['yellow']}>Lorem ipsum dolor sit amet.</font> Quo cupiditate perspiciatis est reiciendis reprehenderit et enim internos hic suscipit repudiandae. Ex laborum dolorum est voluptatem fuga eum rerum soluta sed eius iusto. <br /><br />
                    Eum placeat dolores ea unde recusandae quo omnis Quis. Ut veniam alias sit eaque nostrum et necessitatibus nostrum. <br /><br />
                    Duis luctus varius nisi, eu aliquet ex gravida eget. Etiam quis mauris sit amet purus dictum blandit ut ac risus. Maecenas ac porttitor orci, sed bibendum elit. Donec ac metus odio. Quisque lacinia, justo vitae ullamcorper vehicula, tellus mauris imperdiet nulla, porta sollicitudin tellus orci non nunc.
                </Text>
            </Stack>
        </Stack>
    )
}