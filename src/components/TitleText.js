import { Text } from "@chakra-ui/react"
import Colors from '../const/Colors.json'

export default function TitleText({ children }) {
    return (
        <>
            <Text width='20rem' margin='0px' position='absolute'
                color={Colors['black-1']}
                fontSize='42px'
                letterSpacing='4px'
                lineHeight='5rem'
                sx={{
                    textShadow: '1px 1px 0 #687E88, -1px 1px 0 #687E88, 1px -1px 0 #687E88, -1px -1px 0 #687E88;'
                }}
            >
                <h1>{children}</h1>
            </Text>
        </>
    )
}