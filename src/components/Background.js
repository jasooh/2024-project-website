import { Box, Text, Stack, Heading, Button } from '@chakra-ui/react'
import Colors from '../const/Colors.json'

export default function Background() {
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
                {/* Heading - name */}
                <Box pl='5rem' width='21rem' height='100%'>
                    <Stack height='100%' 
                        direction='column'
                        spacing='0px'
                    >
                        <Heading
                            width='20rem'
                            margin='0px'
                            mt='80px'
                            mb='15px'
                            pb='0px'
                            fontSize='84px'
                            letterSpacing='1px'
                            lineHeight='4.5rem'
                        >
                            JUSTIN ABUYUAN
                        </Heading>
                        <Text fontSize='15px' lineHeight='0px' mb='50px'>const compSciStudent;</Text>
                        {/* <Button colorScheme='blue'>Button</Button> */}
                        <Text fontSize='20px' margin='0px'>ABOUT;</Text>
                        <Text fontSize='20px' margin='0px'>PROJECTS;</Text>
                        <Text fontSize='20px' margin='0px'>CONTACT;</Text>
                    </Stack>
                </Box>
            </Box>
        </Stack>
    )
}