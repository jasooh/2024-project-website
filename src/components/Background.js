import { Box, Stack } from '@chakra-ui/react';
import Colors from '../const/Colors.json';

export default function Background() {
    return (
        <Stack width='100vw' height='100vh' position='absolute'
            alignItems='center'
            justifyContent='center'
        >
            <Box width='96vw' height='92vh'
                borderColor={Colors['black-2']}
                borderStyle='solid'
                borderWidth='3px'
            >
            </Box>
        </Stack>
    )
}