import { Text, Stack, Divider, Box, AbsoluteCenter } from "@chakra-ui/react";

// custom components
import TypingText from "../components/TypingText";
import ContentContainer from "../components/ContentContainer";

import Colors from '../const/Colors.json';

export default function ProjectPage() {
    return (
        <>
            <TypingText>working towards making my own robot army.</TypingText>
            {/* Project content */}
            <ContentContainer>
            <Stack
                direction='column'
                width='100%'
                textAlign='center'
            >
                <Box position='relative' padding='10'>
                    <Divider />
                    <AbsoluteCenter bg={Colors['black']} color={Colors['white']} px='4'>
                        Projects
                    </AbsoluteCenter>
                </Box>
            </Stack>
            </ContentContainer>
        </>
    )
}
