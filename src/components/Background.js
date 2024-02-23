import { Box, Stack } from '@chakra-ui/react'
import TitleText from './TitleText'
import Colors from '../const/Colors.json'

export default function Background() {
    return (
        <Stack width='100vw' height='100vh' position='absolute'
            alignItems='center'
            justifyContent='center'
        >
            <Box width='96vw' height='92vh' position='absolute'
                borderColor={Colors['blue-0']}
                borderStyle='solid'
                borderWidth='2px'
                >
                <Stack direction='column' spacing='0px'>
                    <Box pl='5rem'>
                        <TitleText>JUSTIN ABUYUAN</TitleText>
                    </Box>
                </Stack>
            </Box>
        </Stack>
    )
}