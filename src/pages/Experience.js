import { Text, Stack, Divider, Box, AbsoluteCenter } from "@chakra-ui/react";

// custom components
import TypingText from "../components/TypingText";
import ContentContainer from "../components/ContentContainer";
import ExperienceCard from "../components/ExperienceCard";

import Colors from '../const/Colors.json';

export default function ExperiencePage() {
    return (
        <>
            <TypingText>developing skills to become a software engineer - one co-op at a time.</TypingText>
            {/* Experience content */}
            <ContentContainer>
                <Stack
                    direction='column'
                    width='100%'
                    textAlign='center'
                >
                    <Box position='relative' padding='10'>
                        <Divider />
                        <AbsoluteCenter bg={Colors['black']} color={Colors['white']} px='4'>
                            Experience
                        </AbsoluteCenter>
                    </Box>
                    {/* Card container */}
                    <Stack direction='column'>
                        <ExperienceCard />
                    </Stack>
                </Stack>
            </ContentContainer>
        </>
    )
}
