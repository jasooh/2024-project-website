import { Text, Stack, Divider, Box, AbsoluteCenter } from "@chakra-ui/react";

// custom components
import TypingText from "../components/TypingText";
import ContentContainer from "../components/ContentContainer";

// color
import Colors from '../const/Colors.json';

export default function ContactPage() {
    return (
        <>
            <TypingText>i check my email often :&#41;</TypingText>
            {/* Contact content */}
            <ContentContainer>
            <Stack
                direction='column'
                width='100%'
                textAlign='center'
            >
                <Box position='relative' padding='10'>
                    <Divider />
                    <AbsoluteCenter bg={Colors['black']} color={Colors['white']} px='4'>
                        Contact
                    </AbsoluteCenter>
                </Box>
            </Stack>
            </ContentContainer>
        </>
    )
}
