import { Box, Text, Stack, Heading, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
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
                <Box pl='5rem' width='21rem' height='100%'>
                    <Stack height='100%' 
                        direction='column'
                        spacing='0px'
                    >
                        {/* Heading text and subheading */}
                        <Heading
                            width='20rem'
                            margin='0px'
                            mt='80px'
                            mb='15px'
                            pb='0px'
                            fontSize='100px'
                            letterSpacing='-2px'
                            lineHeight='5.5rem'
                        >
                            JUSTIN ABUYUAN
                        </Heading>
                        <Text fontSize='15px' lineHeight='0px' mb='100px'>const compSciStudent = true;</Text>

                        {/* React router */}
                        <Text fontSize='20px' margin='0px'>
                            <Link to='/about'>ABOUT;</Link>
                        </Text>
                        <Text fontSize='20px' margin='0px'>
                            <Link to='/projects'>PROJECTS;</Link>
                        </Text>
                        <Text fontSize='20px' margin='0px'>
                            <Link to='/contact'>CONTACT;</Link>
                        </Text>
                    </Stack>
                </Box>
            </Box>
        </Stack>
    )
}