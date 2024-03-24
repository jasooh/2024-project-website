import { Text } from "@chakra-ui/react";

// custom components
import TypingText from "../components/TypingText";
import ContentContainer from "../components/ContentContainer";

export default function ProjectPage() {
    return (
        <>
            <TypingText>working towards making my own robot army.</TypingText>
            {/* Project content */}
            <ContentContainer>
                <Text height='100vh'>Projects</Text>
            </ContentContainer>
        </>
    )
}
