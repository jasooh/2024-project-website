// Section on left side of website that appears on all pages
import { Box, Text, Stack, Heading } from '@chakra-ui/react';
import MenuButton from '../components/MenuButton';
import TypingText from '../components/TypingText';

import Colors from '../const/Colors.json';
import { Children } from 'react';

export default function HomeSection(props) {
    const { children, sub } = props;
    const info = {
        Name: 'JUSTIN ABUYUAN',
        Sub: sub
    }

    return (
        <Stack width='100vw' height='max' position='absolute'
            alignItems='center'
            gap='5rem'
        >
            <Stack width='60vw' height='max' direction={{ base: 'column', "2xl": 'row' }}>
                {/* Heading and Button container */}
                <Box width='40rem' height='max'>
                    <Stack height='max'
                        direction='column'
                        spacing='0px'
                    >
                        {/* Heading text and subheading */}
                        <Heading
                            width='90%'
                            margin='0px'
                            mt='50px'
                            mb='15px'
                            pb='0px'
                            fontSize={{ base: '45px', "2xl": '95px' }}
                            letterSpacing='0px'
                            lineHeight='5.5rem'
                            fontWeight='900'
                            fontStyle='italic'

                        >
                            {info['Name']}
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
                            <TypingText>{info['Sub']}</TypingText>
                        </Text>
                        {/* React router */}
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
                    <font color={Colors['yellow']}>Lorem ipsum dolor sit amet.</font> Quo cupiditate perspiciatis est reiciendis reprehenderit et enim internos hic suscipit repudiandae. Ex laborum dolorum est voluptatem fuga eum rerum soluta sed eius iusto. <br /><br />
                    Eum placeat dolores ea unde recusandae quo omnis Quis. Ut veniam alias sit eaque nostrum et necessitatibus nostrum. <br /><br />
                    Duis luctus varius nisi, eu aliquet ex gravida eget. Etiam quis mauris sit amet purus dictum blandit ut ac risus. Maecenas ac porttitor orci, sed bibendum elit. Donec ac metus odio. Quisque lacinia, justo vitae ullamcorper vehicula, tellus mauris imperdiet nulla, porta sollicitudin tellus orci non nunc.
                </Text>
            </Stack>
            {children}
        </Stack>
    )
}